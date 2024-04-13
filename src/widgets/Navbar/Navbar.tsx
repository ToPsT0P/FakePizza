
import { FC } from "react"
import styles from "./Navbar.module.scss"
import Images from "../../shared/Images"

interface INavbar {
    isMainPage: boolean
}

const Navbar:FC<INavbar> = ({isMainPage}) => {

    return(
        <div className={styles.navbar__wrapper}>
            <div className={styles.navbar__leftside}>
                <img src={Images.logo} alt="" />
                <div>
                    <b>React pizza</b>
                    <p>Самая вкусная пицца во вселенной</p>
                </div>
            </div>

            <div className={styles.navbar__rightside}>
                {
                isMainPage 
                ?
                <div className={styles.navbar__rightside__button}>
                    <div className={styles.navbar__rightside__price}>
                        520Р
                    </div>
                    <div>
                        3
                    </div>
                </div> 

                : <></>
                }
            </div>
        </div>
    )
}

export default Navbar