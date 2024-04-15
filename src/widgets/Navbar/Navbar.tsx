
import { FC } from "react"
import styles from "./Navbar.module.scss"
import Images from "../../shared/Images"
import { INavbar } from "../../types/Types"
import { Link } from "react-router-dom"



const Navbar:FC<INavbar> = ({isMainPage, setSearchValue}) => {

    return(
        <div className={styles.navbar__wrapper}>
            <Link to={"/"} className={styles.navbar__leftside}>
                <img src={Images.logo} alt="" />
                <div>
                    <b>React pizza</b>
                    <p>Самая вкусная пицца во вселенной</p>
                </div>
            </Link>

                {
                isMainPage 
                ?<>
            <div className={styles.navbar__centralside}>
                <div className={styles.navbar__centralside__input}>
                    <img src={Images.search} alt="" />
                    <input 
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text" 
                    placeholder="Поиск пиццы..." />
                </div>
            </div>

            <div className={styles.navbar__rightside}>
                <Link to={"/cart"} className={styles.navbar__rightside__button}>
                    <div className={styles.navbar__rightside__price}>
                        520Р
                    </div>
                    <div>
                        3
                    </div>
                </Link> 
            </div>
            </>
                : <></>
                }
        </div>
    )
}

export default Navbar