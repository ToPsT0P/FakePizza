import { FC, useEffect, useState } from "react"
import styles from "./CartPage.module.scss"
import Navbar from "../../widgets/Navbar/Navbar"
import Images from "../../shared/Images"
import PizzaItemCart from "../../entities/PizzaItemCart/PizzaItemCart"
import { useSelector } from "react-redux"
import { RootStateCartData } from "../../store/RootState"
import { ICartData } from "../../types/Types"
import { useDispatch } from "react-redux"
import { actions } from "../../store/CartData/CartData.slice"
import { Link } from "react-router-dom"

const Cart:FC = () => {

    const allCartData : ICartData[] = useSelector((state :RootStateCartData) => state.cartData)
    const [cartFree, setCartFree] = useState<boolean>(true)
    const [userPizzaCount, setUserPizzaCount] = useState<number>()
    const [userPizzaPrice, setUserPizzaPrice] = useState<number>()
    let pizzaCount = 0
    let pizzaPrice = 0
    const dispatch = useDispatch()

    const checkCartFree = () => {
        if(allCartData.length == 0){
            setCartFree(true)
        }else{
            setCartFree(false)
        }
    }


    const mathPizzaData = () => {
        pizzaCount = 0
        allCartData.map(item => {
            pizzaCount = pizzaCount + item.count
            setUserPizzaCount(pizzaCount)

            pizzaPrice = pizzaPrice + (item.item.price * item.count)
            setUserPizzaPrice(pizzaPrice)
        })
    }
    

    useEffect(() => {
        checkCartFree()
        mathPizzaData()
    }, [allCartData])



    return(
        <div className={styles.cart__wrapper}>
            <Navbar setSearchValue={""} isMainPage={false}/>
            <div className={styles.cart__centralside}>
                {!cartFree
                ? 
                <div className={styles.cart__centralside__main}>
                    <div className={styles.cart__centralside__main__top}>
                        <div className={styles.cart__centralside__main__top__left}>
                            <img src={Images.cart} alt="" />
                            <b>Корзина</b>
                        </div>
                        <div
                        onClick={() => dispatch(actions.deleteFromCart(-1))}
                        className={styles.cart__centralside__main__top__right}>
                            <img src={Images.trash} alt="" />
                            <p>Очистить корзину</p>
                        </div>
                    </div>
                        <div className={styles.cart__centralside__main__items}>
                            {allCartData.map(item => <PizzaItemCart options={item.options} count={item.count} item={item.item}/>)}
                        </div>
                        <div className={styles.cart__centralside__main__bottom}>
                            <div className={styles.cart__centralside__main__bottom__top}>
                                <div className={styles.cart__centralside__main__bottom__top__left}>
                                    <p>Всего пицц: </p>
                                    <b>{userPizzaCount} шт.</b>
                                </div>
                                <div className={styles.cart__centralside__main__bottom__top__right}>
                                    <p>Сумма заказа: </p>
                                    <b> {userPizzaPrice} Руб.</b>
                                </div>
                            </div>
                            <div className={styles.cart__centralside__main__bottom__bottom}>
                                <div className={styles.cart__centralside__main__bottom__exitButton}>
                                    <Link
                                    className={styles.exitText}
                                    to={"/"}>Вернуться назад</Link>
                                </div>
                                <div className={styles.cart__centralside__main__bottom__buyButton}>
                                    <p>Оплатить сейчас</p>
                                </div>
                            </div>
                        </div>
                </div>
                
                :
                <div className={styles.cartFree}>
                    <b>Корзина пустая &#128533;</b>

                    <p>Вероятней всего, вы не заказывали ещё пиццу.<br/>
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>

                    <img src={Images.cartFree} alt="" />
                    <Link className={styles.cartFree__button} to={"/"}>Вернуться назад</Link>
                </div>
                }
            </div>
        </div>
    )
}

export default Cart