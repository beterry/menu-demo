import VegIcon from '../../icons/food/VegIcon'
import FireIcon from '../../icons/food/FireIcon'
import GlutenIcon from '../../icons/food/GlutenIcon'
import PopIcon from '../../icons/food/PopIcon'
import NewIcon from '../../icons/food/NewIcon'

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
    return (
        <button
            onClick={handleTapTag}
            className={styles.tagButton}
            style={{
                borderColor: '#366959',
                background: isActive ? '#366959' : 'none',
                color: isActive ? 'white' : '#366959',
            }}
        >

            {renderTagIcon(tag, isActive ? 'white': '#366959')}
            {tag}
        </button>
    )
}

export default TagButton;