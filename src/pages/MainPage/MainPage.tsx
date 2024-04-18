import { FC, useEffect, useState } from "react"
import styles from "./MainPage.module.scss"
import Navbar from "../../widgets/Navbar/Navbar"
import PizzaItem from "../../entities/PizzaItem/PizzaItem"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { RootStateAllData } from "../../store/RootState"
import { fetchData } from "../../store/DataAPI/DataAPI.slice"

const MainPage:FC = () => {

    const dispatch = useDispatch();
    const allData = useSelector((state: RootStateAllData) => state.dataApi.items);
  
    useEffect(() => {
        dispatch<any>(fetchData("https://661c44f9e7b95ad7fa6a0d44.mockapi.io/Data"));
    }, [dispatch]);

    

    const [activeCategory, setActiveCategory] = useState<number>(0)
    const [searchValue, setSearchValue] = useState("")
    const categories = ["Все","Мясные","Вегетарианские","Гриль","Острые","Закрытые"]

    const filtredArray = allData.filter(pizza => {
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