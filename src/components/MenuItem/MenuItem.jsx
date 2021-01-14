import styles from './MenuItem.module.scss'

const MenuItem = ({item}) => {

    //compile ingredients string
    let ingredientString = ""
    if(item.ingredients && item.ingredients.length > 0){
        ingredientString = item.ingredients[0]
        for (let i = 1; i < item.ingredients.length; i++){
            ingredientString += `, ${item.ingredients[i]}`
        }
    }
    
    return (
        <li className={styles.foodItem}>
            <div className={styles.namePrice}>
                <h3>{item.name}</h3>
                <h4>{`$${item.price}`}</h4>
            </div>
            <p>{ingredientString}</p>
        </li>
    )
}

export default MenuItem