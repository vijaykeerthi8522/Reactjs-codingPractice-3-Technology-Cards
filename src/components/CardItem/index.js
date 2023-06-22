// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardItem} = props
  const {title, imgUrl, description, className} = cardItem

  return (
    <li className={`card ${className}`}>
      <h1 className="card-heading">{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} className="card-image" alt={title} />
    </li>
  )
}

export default CardItem
