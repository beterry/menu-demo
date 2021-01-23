import {useContext} from 'react'
import {ColorContext} from '../App/App'
import styles from './CatButton.module.scss'

const CatButton = ({isActive, onClick, children}) => {

    const colors = useContext(ColorContext)

    return (
        <button
            className={styles.catButton}
            onClick={onClick}
            style={{
                background: isActive ? colors.mainColor : colors.categoryButtonColor,
                color: isActive ? 'white' : 'black',
            }}
        >
            {children}
        </button>
    )
}

export default CatButton