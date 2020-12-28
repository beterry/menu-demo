import MenuItem from '../MenuItem/MenuItem'

//import styles
import styles from './CatPage.module.scss'

const CatPage = ({items}) => {
    return (
        <ul>
            {items.map((item, index) => <MenuItem item={item} key={`item ${index}`} />)}
        </ul>
    )
}

export default CatPage