import {useContext} from 'react'
import {ColorContext} from '../App/App'

import VegIcon from '../../icons/food/VegIcon'
import FireIcon from '../../icons/food/FireIcon'
import GlutenIcon from '../../icons/food/GlutenIcon'
import PopIcon from '../../icons/food/PopIcon'

import styles from './TagButton.module.scss'

const renderTagIcon = (tag, color) => {
    switch(tag){
        case 'Popular':
            return <PopIcon color={color}/>
        case 'Gluten Free':
            return <GlutenIcon color={color}/>
        case 'Vegetarian':
            return <VegIcon color={color}/>
        case 'Spicy':
            return <FireIcon color={color}/>
        default:
            return null
    }
}

const TagButton = ({handleTapTag, tag, isActive}) => {

    const colors = useContext(ColorContext)

    return (
        <button
            onClick={handleTapTag}
            className={styles.tagButton}
            style={{
                borderColor: colors.mainColor,
                background: isActive ? colors.mainColor : 'none',
                color: isActive ? 'white' : colors.mainColor,
            }}
        >

            {renderTagIcon(tag, isActive ? 'white': colors.mainColor)}
            {tag}
        </button>
    )
}

export default TagButton;