import Images from "../../shared/Images"
import { FC, useState } from "react"
import { IElement, ILikedOptions } from "../../types/Types"
import "./PizzaItem.scss"
import { useDispatch } from "react-redux"
import { actions } from "../../store/CartData/CartData.slice"

const PizzaItem:FC <IElement> = ({item}) => {

    const dispatch = useDispatch()
    const [itemOptions, setItemOptions] = useState<number[]>([1,3])

    const likedOptions: FC<ILikedOptions> = ({ e }) => {
        const itemId = item.id;
        const targetId = e.target.id;
    
        // Функция для установки класса активности
        const setActiveClass = (optionIds: number[]) => {
            optionIds.forEach((optionId) => {
                const optionEl = document.getElementById(`${itemId}${optionId}`);
                optionEl?.classList.add("active");
            });
        };
    
        // Удаляем классы активности со всех опций
        [1, 2, 3, 4, 5].forEach((optionId) => {
            const optionEl = document.getElementById(`${itemId}${optionId}`);
            optionEl?.classList.remove("active");
        });
        
        // Определяем комбинации для установки активности и значений itemOptions
        if (targetId === `${itemId}1`) {
            setActiveClass([1, 3]);
            setItemOptions([1, 3]);
        } else if (targetId === `${itemId}2`) {
            setActiveClass([2, 3]);
            setItemOptions([2, 3]);
        } else if (targetId === `${itemId}3` && itemOptions[0] == 1) {
            setActiveClass([1, 3]);
            setItemOptions([1, 3]);
        } else if (targetId === `${itemId}4` && itemOptions[0] == 1) {
            setActiveClass([1, 4]);
            setItemOptions([1, 4]);
        } else if (targetId === `${itemId}5` && itemOptions[0] == 1) {
            setActiveClass([1, 5]);
            setItemOptions([1, 5]);
        } else if (targetId === `${itemId}4`) {
            setActiveClass([2, 4]);
            setItemOptions([2, 4]);
        } else if (targetId === `${itemId}5`) {
            setActiveClass([2, 5]);
            setItemOptions([2, 5]);
        } else if (targetId === `${itemId}3`) {
            setActiveClass([2, 3]);
            setItemOptions([2, 3]);
        }
        
        return 1;
    };
    

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
                onClick={() => dispatch(actions.addingToCart({item, count: 1, options: itemOptions}))}
                 className="pizza__bottomside__button">
                    <img 
                    src={Images.plus} 
                    alt=""
                    
                    />
                    Добавить
                </div>
            </div>
        </div>
    )
}

export default PizzaItem