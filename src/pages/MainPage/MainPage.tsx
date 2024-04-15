import { FC, useState } from "react"
import styles from "./MainPage.module.scss"
import { IMainPage } from "../../types/Types"
import Navbar from "../../widgets/Navbar/Navbar"
import PizzaItem from "../../entities/PizzaItem/PizzaItem"


const MainPage:FC<IMainPage> = ({array}) => {

    const [activeCategory, setActiveCategory] = useState(0)
    const categories = ["Все","Мясные","Вегетарианские","Гриль","Острые","Закрытые"]



    return(
        <div className={styles.wrapper}>
            <Navbar isMainPage={true}/>
            <div className={styles.topside__filter}>
                <ul>
                    {categories.map((item, i) => 
                    <li key={i}
                    onClick={() => setActiveCategory(i)}
                    className={`${activeCategory === i ? styles.active : styles.nonActive}`}
                    >{item}</li>)}
                </ul>
                <div className={styles.topside__filter__by}>

                </div>
            </div>
            <div className={styles.centralSide}>
                <h1>Все пиццы</h1>
                <div className={styles.centralSide__elements}>
                    {/* {array.map((item) => <PizzaItem item={item} key={item.id}/>)} */}
                    {array.filter((item) => {
                        if (activeCategory === 0 || activeCategory === item.category) {
                            return true;
                        }
                        return false;
                        }).map((item) => (
                        <PizzaItem item={item} />
                    ))}
                </div>
            </div>

        </div>
    )
}


export default MainPage