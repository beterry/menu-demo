import styles from './CategorySection.module.scss'

const Category = ({title, children}) => {
    return (
        <section className={styles.cat}>
            <h2>{title}</h2>
            {children}
        </section>
    )
} 

export default Category