import styles from './MenuItem.module.scss'

import VegIcon from '../../icons/food/VegIcon'
import FireIcon from '../../icons/food/FireIcon'
import GlutenIcon from '../../icons/food/GlutenIcon'
import PopIcon from '../../icons/food/PopIcon'
import NewIcon from '../../icons/food/NewIcon'

const MenuItem = ({item}) => {

    //compile ingredients string
    let ingredientString = ""
    
    if(item.ingredients && item.ingredients.length > 0){
        ingredientString = item.ingredients[0]
        for (let i = 1; i < item.ingredients.length; i++){
            ingredientString += `, ${item.ingredients[i]}`
        }
    }

    //compile icons for tags
    const renderTagIcons = () => {
        if (item.tags){
            return item.tags.map((tag, index) => {
                switch(tag){
                    case 'Popular':
                        return <PopIcon key={`${item.name} tag:${index}`} color='#366959'/>
                    case 'Gluten Free':
                        return <GlutenIcon color='#366959'/>
                    case 'New':
                        return <NewIcon color='#EB9B3B'/>
                    case 'Vegetarian':
                        return <VegIcon color='#366959'/>
                    case 'Spicy':
                        return <FireIcon color='#366959'/>
                    default:
                        return null
                }
            })
        } else {
            return null
        }
    }
    
    return (
        <li className={styles.foodItem}>
            <div className={styles.top}>
                <div className={styles.name}>
                    <h3>{item.name}</h3>
                    {renderTagIcons()}
                </div>
                <h4 className={styles.price}>{`$${item.price}`}</h4>
            </div>
            <p>{ingredientString}</p>
        </li>
    )
}

export default MenuItem