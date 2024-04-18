export interface IData {
    name: string,
    price: number,
    imageURL:any,
    id: number,
    category: number,
  }

export interface IElement {
  item: IData
}
export interface ILikedOptions {
    e: any;
}

export interface INavbar {
  isMainPage: boolean,
  setSearchValue: any
}

export interface ICartData {
    item: IData
    count: number
    options: number[]
}


