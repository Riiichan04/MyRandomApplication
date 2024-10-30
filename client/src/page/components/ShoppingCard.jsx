import '../../style/element/logged_home/RecommendShopping.css'

export default function ShoppingCard({imageUrl, title, source, price, description}) {
    return (
        <div className="shopping-card">
            <div className="shopping-card__image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="shopping-card__info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="shopping-card__price">
                <h3>{price}</h3>
            </div>
            <div className="shopping-card__footer">
                <p>{source}</p>
            </div>
        </div>
    )
}