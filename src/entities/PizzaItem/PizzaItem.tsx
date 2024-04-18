import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStateCartData } from "../../store/RootState";
import { actions } from "../../store/CartData/CartData.slice";
import Images from "../../shared/Images";
import { IElement, ILikedOptions } from "../../types/Types";
import "./PizzaItem.scss";

const PizzaItem: FC<IElement> = ({ item }) => {
  const dispatch = useDispatch();
  const [itemOptions, setItemOptions] = useState<number[]>([1, 3]);
  const [alreadyBought, setAlreadyBought] = useState<boolean>(false);
  const allCartData = useSelector((state: RootStateCartData) => state.cartData);

  useEffect(() => {
    checkAlreadyBought();
  }, [allCartData]);

  const checkAlreadyBought = () => {
    const isBought = allCartData.some((cartItem) => cartItem.item.id === item.id);
    setAlreadyBought(isBought);
  };

  const likedOptions: FC<ILikedOptions> = ({ e }) => {
    const itemId = item.id;
    const targetId = e.target.id;

    const setActiveClass = (optionIds: number[]) => {
      optionIds.forEach((optionId) => {
        const optionEl = document.getElementById(`${itemId}${optionId}`);
        optionEl?.classList.add("active");
      });
    };

    [1, 2, 3, 4, 5].forEach((optionId) => {
      const optionEl = document.getElementById(`${itemId}${optionId}`);
      optionEl?.classList.remove("active");
    });

    if (targetId === `${itemId}1`) {
      setActiveClass([1, 3]);
      setItemOptions([1, 3]);
    } else if (targetId === `${itemId}2`) {
      setActiveClass([2, 3]);
      setItemOptions([2, 3]);
    } else if (targetId === `${itemId}3` && itemOptions[0] === 1) {
      setActiveClass([1, 3]);
      setItemOptions([1, 3]);
    } else if (targetId === `${itemId}4` && itemOptions[0] === 1) {
      setActiveClass([1, 4]);
      setItemOptions([1, 4]);
    } else if (targetId === `${itemId}5` && itemOptions[0] === 1) {
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

  return (
    <div className="pizza">
      <img src={`/src/shared/${item.imageURL}`} alt="" />
      <b>{item.name}</b>
      <div className="pizza__options">
        <b id={`${item.id}1`} onClick={(e) => likedOptions({ e })} className="pizza__options__top active">
          тонкое
        </b>
        <b id={`${item.id}2`} onClick={(e) => likedOptions({ e })} className="pizza__options__top">
          традиционное
        </b>
        <b id={`${item.id}3`} onClick={(e) => likedOptions({ e })} className="pizza__options__bottom active">
          26 см.
        </b>
        <b id={`${item.id}4`} onClick={(e) => likedOptions({ e })} className="pizza__options__bottom">
          30 см.
        </b>
        <b id={`${item.id}5`} onClick={(e) => likedOptions({ e })} className="pizza__options__bottom">
          40 см.
        </b>
      </div>
      <div className="pizza__bottomside">
        <b>{item.price} ₽</b>
        <div
          onClick={() => dispatch(actions.addingToCart({ item, count: 1, options: itemOptions }))}
          className="pizza__bottomside__button"
        >
          {alreadyBought ? (
            <>В корзине</>
          ) : (
            <>
              <img src={Images.plus} alt="" className="pizza__bottomside__button__img" />
              Добавить
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
