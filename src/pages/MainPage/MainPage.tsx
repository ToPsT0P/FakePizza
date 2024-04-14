import { FC } from "react"
import styles from "./MainPage.module.scss"
import { IMainPage } from "../../types/Types"
import Navbar from "../../widgets/Navbar/Navbar"
import PizzaItem from "../../entities/PizzaItem/PizzaItem"


const MainPage:FC<IMainPage> = ({array}) => {


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
                <div className={styles.centralSide__elements}>
                    {array.map((item) => <PizzaItem item={item} />)}

                </div>
            </div>

        </div>
    )
}


export default MainPage