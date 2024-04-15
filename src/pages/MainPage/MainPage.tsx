import { FC, useState } from "react"
import styles from "./MainPage.module.scss"
import { IMainPage } from "../../types/Types"
import Navbar from "../../widgets/Navbar/Navbar"
import PizzaItem from "../../entities/PizzaItem/PizzaItem"

const MainPage:FC<IMainPage> = ({array}) => {

    const [activeCategory, setActiveCategory] = useState<number>(0)
    const [searchValue, setSearchValue] = useState("")
    const categories = ["Все","Мясные","Вегетарианские","Гриль","Острые","Закрытые"]

    const filtredArray = array.filter(pizza => {
        return pizza.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    return(
        <div className={styles.wrapper}>
            <Navbar setSearchValue={setSearchValue} isMainPage={true}/>
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
                    {filtredArray.filter((item) => {
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