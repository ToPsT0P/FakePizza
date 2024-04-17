
import { FC, useEffect, useState } from "react"
import styles from "./Navbar.module.scss"
import Images from "../../shared/Images"
import { INavbar } from "../../types/Types"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootStateCartData } from "../../store/RootState"
import { render } from "react-dom"



const Navbar:FC<INavbar> = ({isMainPage, setSearchValue}) => {

    const goods = useSelector((state:RootStateCartData) => state.cartData)
    let goodsPrice = 0
    let goodsCount = 0

    const [goodsPriceUseState, setGoodsPriceUseState] = useState<number>(0)
    const [goodsCountUseState, setGoodsCountUseState] = useState<number>(0)


    useEffect(() => {
        goods.map(item => {
            goodsPrice = item.item.price + goodsPrice
            goodsCount = item.count + goodsCount
            
            setGoodsPriceUseState(goodsPrice)
            setGoodsCountUseState(goodsCount)
        })
    }, [goods])

    

    return(
        <div className={styles.navbar__wrapper}>
            <Link to={"/"} className={styles.navbar__leftside}>
                <img src={Images.logo} alt="" />
                <div>
                    <b>React pizza</b>
                    <p>Самая вкусная пицца во вселенной</p>
                </div>
            </Link>

                {
                isMainPage 
                ?<>
            <div className={styles.navbar__centralside}>
                <div className={styles.navbar__centralside__input}>
                    <img src={Images.search} alt="" />
                    <input 
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text" 
                    placeholder="Поиск пиццы..." />
                </div>
            </div>

            <div className={styles.navbar__rightside}>
                <Link to={"/cart"} className={styles.navbar__rightside__button}>
                    <div className={styles.navbar__rightside__price}>
                        {goodsPriceUseState}Р
                    </div>
                    <div>
                        {goodsCountUseState}
                    </div>
                </Link> 
            </div>
            </>
                : <></>
                }
        </div>
    )
}

export default Navbar