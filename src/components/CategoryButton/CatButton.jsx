import styles from './CatButton.module.scss'

const CatButton = ({isActive, onClick, children}) => {
    return (
        <button
            className={styles.catButton}
            onClick={onClick}
            style={{
                background: isActive ? '#366959' : '#F7F5E9',
                color: isActive ? 'white' : 'black',
            }}
        >
            {children}
        </button>
    )
}

export default CatButton