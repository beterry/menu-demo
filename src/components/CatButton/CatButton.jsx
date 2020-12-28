import styles from './CatButton.module.scss'

const CatButton = ({name, handleClick}) => {
    return (
        <button
            onClick={handleClick}
            className={styles.catbutton}
        >
            <p>{name}</p>
        </button>
    )
}

export default CatButton
