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
            <h3>{item.name}</h3>
            <h4>{`$${item.price}`}</h4>
            <p>{ingredientString}</p>
        </li>
    )
}

export default MenuItem