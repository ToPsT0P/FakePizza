import { FC } from "react";
import { ILikedOptions } from "../../types/Types";

const likedOptions: FC<ILikedOptions> = ({e, item, setItemOptions, itemOptions}) => {
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

  export default likedOptions