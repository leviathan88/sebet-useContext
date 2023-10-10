// use context
import { useContext } from "react"
import { Context } from "../context/useContext"

export const Product = ({ id, name, price, url, quantity, showAdd = true, showRemove = false }) => {
  const { add, decrease, remove } = useContext(Context)

  return (
    <div className="product-card">
      <img src={url} alt="phone" />
      <p> {name} </p>
      <p> {price}$ </p>
      {quantity && <p> Quantity: {quantity} </p>}
      {showAdd && <button onClick={() => add(id, name, price, url, quantity)}> Add to Card </button>}
      {showRemove && <button onClick={() => {
        decrease(id, name, price, url, quantity)
        if (quantity == 1) remove(id)}}> Remove </button>}
    </div>
  )
}