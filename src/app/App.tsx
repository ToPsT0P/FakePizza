import { useEffect, useState } from "react"
import MainPage from "../pages/MainPage/MainPage"
import "./absoluteStyles.scss"
import axios from "axios"
import { IData } from "../types/Types"

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
        name: "asdasd",
        price:123,
        imageURL: "asdasd",
        id: 123
        },
        {
          name: "asnbvcvbdasd",
          price:993,
          imageURL: "asdasd",
          id: 993
        }
    ])
  }


  return (


    // Тут будет роутинг, но пока вызываем компоненты напрямую
    <div className="pagesWrapper">
      <MainPage array={dataArray}/>

    </div>      
    )
  }

export default App
