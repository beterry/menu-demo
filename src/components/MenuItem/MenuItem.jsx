import {useContext} from 'react'
import {ColorContext} from '../App/App'

import styles from './MenuItem.module.scss'

import VegIcon from '../../icons/food/VegIcon'
import FireIcon from '../../icons/food/FireIcon'
import GlutenIcon from '../../icons/food/GlutenIcon'
import PopIcon from '../../icons/food/PopIcon'
import NewIcon from '../../icons/food/NewIcon'

const MenuItem = ({item, type, disabled}) => {

    const colors = useContext(ColorContext)

    //compile ingredients string
    let ingredientString = ""
    
    if(item.ingredients && item.ingredients.length > 0){
        ingredientString = item.ingredients[0]
        for (let i = 1; i < item.ingredients.length; i++){
            ingredientString += `, ${item.ingredients[i]}`
        }
    }

    //compile icons for food tags
    const renderTagIcons = () => {
        if (item.tags){
            return item.tags.map((tag, index) => {
                switch(tag){
                    case 'Popular':
                        return <PopIcon key={`${item.name} tag:${index}`} color={colors.mainColor}/>
                    case 'Gluten Free':
                        return <GlutenIcon color={colors.mainColor} key={`${item.name} tag:${index}`}/>
                    case 'New':
                        return <NewIcon color={colors.mainColor} key={`${item.name} tag:${index}`}/>
                    case 'Vegetarian':
                        return <VegIcon color={colors.mainColor} key={`${item.name} tag:${index}`}/>
                    case 'Spicy':
                        return <FireIcon color={colors.mainColor} key={`${item.name} tag:${index}`}/>
                    default:
                        return null
                }
            })
        } else {
            return null
        }
    }

    //compile string for drink ABV, maker, location
    const renderDrinkDetails = () => {
        let drinkDetails = [];

        if (item.abv){
            drinkDetails.push(`${item.abv}% ABV`);
        }

        if (item.maker){
            drinkDetails.push(item.maker);
        }

        if (item.location){
            drinkDetails.push(item.location);
        }

        if (drinkDetails.length){
            return drinkDetails.join(' | ');
        }else{
            return null;
        }
    }
    
    if (type === "food"){
        return (
            <li className={`${styles.menuItem} ${disabled && styles.disabled}`}>
                <div className={styles.top}>
                    <div className={styles.name}>
                        <h4>{item.name}</h4>
                        {/*renderTagIcons()*/}
                    </div>
                    <h5 className={styles.price}>{`$${item.price.toFixed(2)}`}</h5>
                </div>
                <p>{ingredientString}</p>
                <ul>
                    {item.tags?.map((tag, i) => 
                        <li
                            key={`${item.name} tag ${i}`}
                            className={styles.tag}
                            style={{background: colors.categoryButtonColor}}
                        >
                            {tag}
                        </li>)
                    }
                </ul>
            </li>
        )
    }

    else if (type === 'drink'){
        return (
            <li className={`${styles.menuItem} ${disabled && styles.disabled}`}>
                <div className={styles.top}>
                    <div className={styles.name}>
                        <h4>{item.name}</h4>
                    </div>
                    <div className={styles.price}>
                        <h5>{`$${item.price.toFixed(2)}`}</h5>
                        {item.ounces && <p className={styles.oz}>{`${item.ounces}oz`}</p>}
                    </div>
                </div>
                <p>{renderDrinkDetails()}</p>
                {item.description && <p className={styles.drinkDesc}>{item.description}</p>}
            </li>
        )
    }

    else {
        console.log("Unsupported type");
        return null;
    }
    
}

export default MenuItem