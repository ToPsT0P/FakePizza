import styles from "./PizzaItemCart.module.scss"
import Images from "../../shared/Images"
import { FC, useEffect, useState } from "react"
import { ICartData } from "../../types/Types"
import { useDispatch } from "react-redux"
import { actions } from "../../store/CartData/CartData.slice"


const PizzaItemCart:FC<ICartData> = ({item, count, options}) => {

    const dispatch = useDispatch()
    const [firstOption, setFirstOption] = useState("")
    const [secondOption, setSecondOption] = useState("")

    const checkData = () => {
        switch(options[0]) {
            case 1:
                setFirstOption("тонкое тесто");
                break;
            case 2:
                setFirstOption("Традиционное тесто");
                break;
            default:
                setFirstOption("Тонкое тесто")
        }
        
        switch(options[1]) {
            case 3:
                setSecondOption("26 см.");
                break;
            case 4:
                setSecondOption("30 см.");
                break;
            case 5:
                setSecondOption("40 см.");
        }    
    }

    useEffect(() => {checkData()}, [])

    return(
        <div className={styles.item__wrapper}>
            <div className={styles.item__left}>
                <img src={`/src/shared/${item.imageURL}`} alt="" />
                <div className={styles.item__left__text}>
                    <b>{item.name}</b>
                    <p>{firstOption} {secondOption}</p>
                </div>
            </div>

            <div className={styles.item__right}>

                <div className={styles.item__right__buttons}>
                    <img src={Images.cartPlus} 
                    onClick={() => dispatch(actions.changingCount({itemID: item.id, newCount: count + 1}))}
                    alt="" />
                    {count}
                    <img 
                    onClick={() => dispatch(actions.changingCount({itemID: item.id, newCount: count - 1}))}
                    src={Images.cartMinus} alt="" />
                </div>
                <b>
                    {item.price * count} &#8381;
                </b>
                <img 
                src={Images.close} 
                style={{cursor:"pointer", marginRight: "40px"}}
                onClick={() => dispatch(actions.deleteFromCart(item.id))}
                alt="" />
            </div>
    </div>
    )
}

export default PizzaItemCart