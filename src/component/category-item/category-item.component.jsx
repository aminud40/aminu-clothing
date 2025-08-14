import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <div className="category-container">
            <div className='background-image' style={{ backgroundImage: `url("${imageUrl}")` }} />
            {/* <img className='bagr' src={imageUrl}/> */}
            {/* url("paper.gif"); */}
            <div className="category-body-container">
                <h1>{title}</h1>
                <p>SHOP NOW</p>
            </div>
        </div>
    )

}

export default CategoryItem