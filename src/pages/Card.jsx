// use context
import { useContext } from "react"

// components
import { Header } from "../components/Header"
import { Product } from "../components/Product"
import { Context } from "../context/useContext"

export const Card = () => {
  const { card } = useContext(Context)

  return (
    <>
      <Header />
      <div className="product-section">
        {card.length == 0 ? <h1> You have no products </h1> :
          card.map(item =>
            <Product
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              url={item.url}
              showAdd={false}
              showRemove={true}
            />)}
      </div>
    </>
  )
}