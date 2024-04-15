export interface IData {
    name: string,
    price: number,
    imageURL:any,
    id: number,
    category: number,
  }

  export interface IMainPage {
    array: IData[]
  }

  export interface IElement {
    item: IData,
  }