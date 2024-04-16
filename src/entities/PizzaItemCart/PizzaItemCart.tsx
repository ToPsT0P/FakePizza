import styles from "./PizzaItemCart.module.scss"
import Images from "../../shared/Images"
import { FC, useState } from "react"

interface IPizzaItemCart {
    item: any
}

const PizzaItemCart:FC<IPizzaItemCart> = ({item}) => {

    const [count, setCount] = useState(1)
    const pizzaDelete = () => {
        localStorage.removeItem(`${item.id}`)
    }

    return(
        <div className={styles.item__wrapper}>
            <div className={styles.item__left}>
                <img src={item.imageURL} alt="" />
                <div className={styles.item__left__text}>
                    <b>{item.name}</b>
                    <p>Тонкое тесто, 26 см.</p>
                </div>
            </div>

            <div className={styles.item__right}>

                <div className={styles.item__right__buttons}>
                    <img src={Images.cartPlus} onClick={() => setCount(count + 1)} alt="" />
                    {count}
                    <img src={Images.cartMinus} onClick={()=>{ if(count > 1){setCount(count - 1)}}} alt="" />
                </div>
                <b>
                    {item.price * count} &#8381;
                </b>
                <img src={Images.close} onClick={() => pizzaDelete()} alt="" />
            </div>
    </div>
    )
}

export default PizzaItemCart