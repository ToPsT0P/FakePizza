import Images from "../../shared/Images"
import { FC } from "react"
import { IElement, ILikedOptions } from "../../types/Types"
import "./PizzaItem.scss"
import { json } from "react-router-dom"

const PizzaItem:FC<IElement> = ({item}) => {

    const likedOptions:FC<ILikedOptions> = ({e}) => {
        if(e.target.id == `${item.id}1` || e.target.id == `${item.id}2`){
            const firstEl = document.getElementById(`${item.id}1`)
            const secondEl = document.getElementById(`${item.id}2`)
            firstEl?.classList.remove("active")
            secondEl?.classList.remove("active")
            if(e.target.id == `${item.id}1`){
                firstEl?.classList.add("active")
            }else{
                secondEl?.classList.add("active")
            }
        }else{
            const firstEl = document.getElementById(`${item.id}3`)
            const secondEl = document.getElementById(`${item.id}4`)
            const thirdEl = document.getElementById(`${item.id}5`)
            firstEl?.classList.remove("active")
            secondEl?.classList.remove("active")
            thirdEl?.classList.remove("active")
            if(e.target.id == `${item.id}3`){
                firstEl?.classList.add("active")
            }
            if(e.target.id == `${item.id}4`){
                secondEl?.classList.add("active")
            }
            if(e.target.id == `${item.id}5`){
                thirdEl?.classList.add("active")
            }
        }
        return 1
    }

    const addingToCart = () => {
        localStorage.setItem(`${item.id}`, JSON.stringify(item))
    }

    return(
        <div className="pizza">
            <img src={item.imageURL} alt="" />
            <b>{item.name}</b>
            <div className="pizza__options">
                <b id={`${item.id}1`} onClick={(e) => likedOptions({e})} className="pizza__options__top active">тонкое</b>
                <b id={`${item.id}2`} onClick={(e) => likedOptions({e})} className="pizza__options__top" >традиционное</b>
                <b id={`${item.id}3`} onClick={(e) => likedOptions({e})} className="pizza__options__bottom active">26 см.</b>
                <b id={`${item.id}4`} onClick={(e) => likedOptions({e})} className="pizza__options__bottom">30 см.</b>
                <b id={`${item.id}5`} onClick={(e) => likedOptions({e})} className="pizza__options__bottom">40 см.</b>
            </div>
            <div className="pizza__bottomside">
                <b>от {item.price} &#8381;</b>
                <div
                onClick={() => addingToCart()}
                 className="pizza__bottomside__button">
                    <img src={Images.plus} alt="" />
                    Добавить
                </div>
            </div>
        </div>
    )
}

export default PizzaItem