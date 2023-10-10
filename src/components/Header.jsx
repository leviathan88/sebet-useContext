// react router
import { Link } from "react-router-dom"

// use context
import { useContext } from "react"
import { Context } from "../context/useContext"

export const Header = () => {
  const { card } = useContext(Context)

  // total price
  const sumPrice = card.map(item => item.quantity * item.price)
  const sumAll = sumPrice.reduce((prev, current) => prev + current, 0)

  // total quantity
  const sumQuantity = card.map(item => item.quantity)
  const allQuantity = sumQuantity.reduce((prev, current) => prev + current, 0)

  return (
    <div className="header">
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/card"> Card ({allQuantity}) </Link></li>
        <li> Total: {sumAll}$ </li>
      </ul>
    </div>
  )
}