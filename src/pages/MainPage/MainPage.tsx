import { FC } from "react"
import styles from "./MainPage.module.scss"
import { IMainPage } from "../../types/Types"
import Navbar from "../../widgets/Navbar/Navbar"
import Images from "../../shared/Images"


const MainPage:FC<IMainPage> = ({array}) => {

    let active = true

    return(
        <div className={styles.wrapper}>
            <Navbar isMainPage={true}/>
            <div className={styles.topside__filter}>
                <ul>
                    <li>Все</li>
                    <li>Мясные</li>
                    <li>Вегетарианские</li>
                    <li>Гриль</li>
                    <li>Острые</li>
                    <li>Закрытые</li>
                </ul>
                <div className={styles.topside__filter__by}>

                </div>
            </div>
            <div className={styles.centralSide}>
                <h1>Все пиццы</h1>
                <div className={styles.pizza}>
                    <img src={Images.burger} alt="" />
                    <b>Чизбургер-пицца</b>
                    <div className={styles.pizza__options}>
                        <b className={`${styles.pizza__options__top} ${active ? 'styles.pizza__options__active' : ''}`}>тонкое</b>
                        <b className={styles.pizza__options__top} >традиционное</b>
                        <b className={styles.pizza__options__bottom}>26 см.</b>
                        <b className={styles.pizza__options__bottom}>30 см.</b>
                        <b className={styles.pizza__options__bottom}>40 см.</b>
                    </div>
                    <div className={styles.pizza__bottomside}>

                    </div>
                </div>
            </div>

        </div>
    )
}


export default MainPage