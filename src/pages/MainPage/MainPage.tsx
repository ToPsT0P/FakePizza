import { FC } from "react"
import styles from "./MainPage.module.scss"
import { IMainPage } from "../../types/Types"

const MainPage:FC<IMainPage> = ({array}) => {


    return(
        <div className={styles.wrapper}>
            <div className={styles.navbar}>

            </div>
            <div className={styles.centralSide}>
                <div className={styles.pizza}>

                </div>
            </div>

        </div>
    )
}


export default MainPage