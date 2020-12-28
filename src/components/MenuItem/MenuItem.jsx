const MenuItem = ({item}) => {
    let ingredientString = ""
    if(item.ingredients.length > 0){
        ingredientString = item.ingredients[0]
        for (let i = 1; i < item.ingredients.length; i++){
            ingredientString += `, ${item.ingredients[i]}`
        }
    }
    
    return (
        <li>
            <h2>{item.name}</h2>
            <h3>{`$${item.price}`}</h3>
            <p>{ingredientString}</p>
        </li>
    )
}

export default MenuItem