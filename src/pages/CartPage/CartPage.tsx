import { FC, useEffect } from "react"
import styles from "./CartPage.module.scss"
import Navbar from "../../widgets/Navbar/Navbar"
import Images from "../../shared/Images"
import PizzaItemCart from "../../entities/PizzaItemCart/PizzaItemCart"


const Cart:FC = () => {

    const cartAny = !!localStorage.length
    const flag = true
    interface StoredObject {
        [key: string]: any;
    }
    
    const allItems: StoredObject[] = [];
    
    const takingData = () => {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key) {
                const value = localStorage.getItem(key);
                if (value) {
                    const parsedValue: StoredObject = JSON.parse(value);
                    allItems.push(parsedValue);
                }
            }
        }
    }

    takingData()
    useEffect(() => {
        takingData()
        console.log(allItems)
    }, [flag])

    return(
        <div className={styles.cart__wrapper}>
            <Navbar setSearchValue={""} isMainPage={false}/>
            <div className={styles.cart__centralside}>
                {cartAny 
                ? 
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
                            {allItems.map(item => <PizzaItemCart flag={flag} item={item}/>)}
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
                
                :
                <div className={styles.cartFree}>
                    <b>Корзина пустая &#128533;</b>

                    <p>Вероятней всего, вы не заказывали ещё пиццу.<br/>
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>

                    <img src={Images.cartFree} alt="" />
                    <button>Вернуться назад</button>
                </div>
                }
            </div>
        </div>
    )
}

export default Cart