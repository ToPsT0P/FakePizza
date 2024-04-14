import { useEffect, useState } from "react"
import MainPage from "../pages/MainPage/MainPage"
import "./absoluteStyles.scss"
import axios from "axios"
import { IData } from "../types/Types"
import Cart from "../pages/CartPage/CartPage"

function App() {

  const [dataArray, setDataArray] = useState<IData[]>([])

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
      // const response = axios.get(URL)
      // setDataArray(response.data)
      setDataArray([
        {
          name: "Чизбургер-пицца",
          price: 395,
          imageURL: "burger",
          id: 1
        },
        {
          name: "Сырная",
          price: 450,
          imageURL: "cheese",
          id: 2
        },
        {
          name: "Креветки по-азиатски",
          price: 290,
          imageURL: "asian",
          id: 3
        },
        {
          name: "Сырный цыпленок",
          price: 385,
          imageURL: "coco",
          id: 4
        },
        {
          name: "Чизбургер-пицца",
          price: 395,
          imageURL: "burger",
          id: 1
        },
        {
          name: "Сырная",
          price: 450,
          imageURL: "cheese",
          id: 2
        },
        {
          name: "Креветки по-азиатски",
          price: 290,
          imageURL: "asian",
          id: 3
        },
        {
          name: "Сырный цыпленок",
          price: 385,
          imageURL: "coco",
          id: 4
        }    
    ])
  }


  return (


    // Тут будет роутинг, но пока вызываем компоненты напрямую
    <div className="pages__Wrapper">
      {/* <MainPage array={dataArray}/> */}
      <Cart/>
    </div>      
    )
  }

export default App
