import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStateCartData } from "../../store/RootState";
import { actions } from "../../store/CartData/CartData.slice";
import Images from "../../shared/Images";
import { IElement } from "../../types/Types";
import "./PizzaItem.scss";
import likedOptions from "./PizzaItemLiked";

const PizzaItem: FC<IElement> = ({ item }) => {
  const dispatch = useDispatch();
  const allCartData = useSelector((state: RootStateCartData) => state.cartData);
  const [itemOptions, setItemOptions] = useState<number[]>([1, 3]);
  const [alreadyBought, setAlreadyBought] = useState<boolean>(false);

  useEffect(() => {
    checkAlreadyBought();
  }, [allCartData]);

  const checkAlreadyBought = () => {
    const isBought = allCartData.some((cartItem) => cartItem.item.id === item.id);
    setAlreadyBought(isBought);
  };

  return (
    <div className="pizza">
      <img src={`/src/shared/${item.imageURL}`} alt="" />
      <b>{item.name}</b>
      <div className="pizza__options">
        <b id={`${item.id}1`} onClick={(e) => likedOptions({ e, item, setItemOptions, itemOptions })} className="pizza__options__top active">
          тонкое
        </b>
        <b id={`${item.id}2`} onClick={(e) => likedOptions({ e, item, setItemOptions, itemOptions })} className="pizza__options__top">
          традиционное
        </b>
        <b id={`${item.id}3`} onClick={(e) => likedOptions({ e, item, setItemOptions, itemOptions })} className="pizza__options__bottom active">
          26 см.
        </b>
        <b id={`${item.id}4`} onClick={(e) => likedOptions({ e, item, setItemOptions, itemOptions})} className="pizza__options__bottom">
          30 см.
        </b>
        <b id={`${item.id}5`} onClick={(e) => likedOptions({ e, item, setItemOptions, itemOptions })} className="pizza__options__bottom">
          40 см.
        </b>
      </div>
      <div className="pizza__bottomside">
        <b>{item.price} ₽</b>
        <div
          className="pizza__bottomside__button"
        >
          {alreadyBought ? (
            <p>В корзине</p>
          ) : (
            <p onClick={() => dispatch(actions.addingToCart({ item, count: 1, options: itemOptions }))}>
              <img src={Images.plus} alt="" className="pizza__bottomside__button__img" />
              Добавить
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
