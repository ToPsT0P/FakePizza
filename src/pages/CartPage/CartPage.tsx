import { FC } from "react"
import styles from "./CartPage.module.scss"
import Navbar from "../../widgets/Navbar/Navbar"
import Images from "../../shared/Images"
import PizzaItemCart from "../../entities/PizzaItemCart/PizzaItemCart"


const Cart:FC = () => {

    return(
        <div className={styles.cart__wrapper}>
            <Navbar isMainPage={false}/>
            <div className={styles.cart__centralside}>
                <div className={styles.cart__centralside__main}>
                    <div className={styles.cart__centralside__main__top}>
                        <div className={styles.cart__centralside__main__top__left}>
                            <img src={Images.cart} alt="" />
                            <b>Корзина</b>
                        </div>
                        <div className={styles.cart__centralside__main__top__right}>
                            <img src={Images.trash} alt="" />
                            <p>Очистить корзину</p>
                        </div>
                    </div>
                    <div className={styles.cart__centralside__main__items}>
                        <PizzaItemCart />
                        <PizzaItemCart />
                        <PizzaItemCart />
                    </div>
                    <div className={styles.cart__centralside__main__bottom}>
                        <div className={styles.cart__centralside__main__bottom__top}>
                            <div className={styles.cart__centralside__main__bottom__top__left}>
                                <p>Всего пицц: </p>
                                <b>3 шт.</b>
                            </div>
                            <div className={styles.cart__centralside__main__bottom__top__right}>
                                <p>Сумма заказа: </p>
                                <b> 900 Руб.</b>
                            </div>
                        </div>
                        <div className={styles.cart__centralside__main__bottom__bottom}>
                            <div className={styles.cart__centralside__main__bottom__exitButton}>
                                <p>Вернуться назад</p>
                            </div>
                            <div className={styles.cart__centralside__main__bottom__buyButton}>
                                <p>Оплатить сейчас</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart