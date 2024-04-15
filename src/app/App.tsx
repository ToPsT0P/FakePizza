import { useEffect, useState } from "react"
import MainPage from "../pages/MainPage/MainPage"
import "./absoluteStyles.scss"
import axios from "axios"
import { IData } from "../types/Types"
import Cart from "../pages/CartPage/CartPage"
import Images from "../shared/Images"

function App() {

  const [dataArray, setDataArray] = useState<IData[]>([])


  // const store = 

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
          imageURL: Images.burger,
          id: 1,
          category: 3,
        },
        {
          name: "Сырная",
          price: 450,
          imageURL: Images.cheese,
          id: 2,
          category: 2,
        },
        {
          name: "Креветки по-азиатски",
          price: 290,
          imageURL: Images.asian,
          id: 3,
          category: 1
        },
        {
          name: "Сырный цыпленок",
          price: 385,
          imageURL: Images.coco,
          id: 4,
          category: 3
        },
        {
          name: "Чизбургер-пицца",
          price: 395,
          imageURL: Images.burger,
          id: 5,
          category: 2
        },
        {
          name: "Сырная",
          price: 450,
          imageURL: Images.cheese,
          id: 6,
          category: 4
        },
        {
          name: "Креветки по-азиатски",
          price: 290,
          imageURL: Images.asian,
          id: 7,
          category: 4
        },
        {
          name: "Сырный цыпленок",
          price: 385,
          imageURL: Images.coco ,
          id: 8,
          category: 2
        }    
    ])
  }


  return (


    // Тут будет роутинг, но пока вызываем компоненты напрямую
    <div className="pages__Wrapper">
      <MainPage array={dataArray}/>
      {/* <Cart/> */}
    </div>      
    )
  }

export default App
