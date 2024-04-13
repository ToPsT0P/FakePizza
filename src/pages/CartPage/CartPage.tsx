import { FC } from "react"
import styles from "./CartPage.module.scss"
import Navbar from "../../widgets/Navbar/Navbar"

const Cart:FC = () => {

    return(
        <div className={styles.cart__wrapper}>
            <Navbar isMainPage={false}/>
        </div>
    )
}

export default Cart