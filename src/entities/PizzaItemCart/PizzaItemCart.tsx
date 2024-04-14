import styles from "./PizzaItemCart.module.scss"
import Images from "../../shared/Images"

const PizzaItemCart = () => {


    return(
        <div className={styles.item__wrapper}>
            <div className={styles.item__left}>
                <img src={Images.burger} alt="" />
                <div className={styles.item__left__text}>
                    <b>Сырный цыпленок</b>
                    <p>Тонкое тесто, 26 см.</p>
                </div>
            </div>

            <div className={styles.item__right}>

                <div className={styles.item__right__buttons}>
                    <img src={Images.cartPlus} alt="" />
                    2
                    <img src={Images.cartMinus} alt="" />
                </div>
                <b>
                    770 &#8381;
                </b>
                <img src={Images.close} alt="" />
            </div>
    </div>
    )
}

export default PizzaItemCart