import styles from "./PizzaItem.module.css"
import Images from "../../shared/Images"
import { FC } from "react"
import { IData, IElement } from "../../types/Types"

const PizzaItem:FC<IElement> = ({item}) => {


    return(
        <div className={styles.pizza}>
            <img src={Images.burger} alt="" />
            <b>{item.name}</b>
            <div className={styles.pizza__options}>
                <b id="1" className={styles.pizza__options__top}>тонкое</b>
                <b id="2" className={styles.pizza__options__top} >традиционное</b>
                <b id="3" className={styles.pizza__options__bottom}>26 см.</b>
                <b id="4" className={styles.pizza__options__bottom}>30 см.</b>
                <b id="5" className={styles.pizza__options__bottom}>40 см.</b>
            </div>
            <div className={styles.pizza__bottomside}>
                <b>от {item.price} &#8381;</b>
                <div className={styles.pizza__bottomside__button}>
                    <img src={Images.plus} alt="" />
                    Добавить
                </div>
            </div>
        </div>
    )
}

export default PizzaItem