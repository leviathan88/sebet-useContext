// use context
import { useContext } from "react"

// components
import { Header } from "../components/Header"
import { Product } from "../components/Product"
import { Context } from "../context/useContext"

export const Home = () => {
  const { data } = useContext(Context)

  return (
    <>
      <Header />
      <div className="product-section">
        {data.map(item =>
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            url={item.url}
          />)}
      </div>
    </>
  )
}