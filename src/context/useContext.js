// react hooks
import { createContext, useState } from "react";

// create context
export const Context = createContext()

export const ContextStore = ({ children }) => {
  const [card, setCard] = useState([])

  // product data
  const data = [
    {
      id: 1,
      name: "Xiaomi",
      price: 800,
      url: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k60-pro.jpg",
    },
    {
      id: 2,
      name: "Samsung",
      price: 600,
      url: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m53-5g.jpg",
    },
    {
      id: 3,
      name: "Huawei",
      price: 1000,
      url: "https://fdn2.gsmarena.com/vv/bigpic/huawei-nova11.jpg",
    },
  ]

  // add function
  const add = (id, name, price, url) => {
    const find = card.find(item => item.id == id)
    if (find) {
      const nonExisting = card.filter(item => item.id !== find.id)
      setCard([...nonExisting, { ...find, quantity: find.quantity + 1 }])
    } else {
      setCard([...card, { id, name, price, url, quantity: 1 }])
    }
  }

  // decrease function
  const decrease = (id, name, price, url) => {
    const find = card.find(item => item.id == id)
    if (find) {
      const nonExisting = card.filter(item => item.id !== find.id)
      setCard([...nonExisting, { ...find, quantity: find.quantity - 1 }])
    } else {
      setCard([...card, { id, name, price, url, quantity: 1 }])
    }
  }

  // remove function
  const remove = (id) => {
    const filter = card.filter(item => item.id !== id)
    setCard(filter)
  }

  return (
    <Context.Provider value={{ data, card, add, decrease, remove}}>
      {children}
    </Context.Provider>
  )
}