import React from 'react';
import styles from './CategorySection.module.scss';

const Category = React.forwardRef(({title, children}, ref) => {
    return (
        <section className={styles.cat} id={title} ref={ref}>
            <h2>{title}</h2>
            {children}
        </section>
    )
} )

export default Category