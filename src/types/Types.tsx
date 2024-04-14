export interface IData {
    name: string,
    price: number,
    imageURL: string,
    id: number,
  }

  export interface IMainPage {
    array: IData[]
  }

  export interface IElement {
    item: IData,
  }