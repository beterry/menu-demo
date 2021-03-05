import React, {useRef} from 'react';
import styles from './CategorySection.module.scss';

import MenuItem from '../MenuItem/MenuItem';

const SubSection = ({title, children}) => (
    <div className={styles.subSection}>
        <h3>{title}</h3>
        {children}
    </div>
)

const Category = React.forwardRef(({title, items}, ref) => {
    const drinkCats = useRef([]);

    if (title === "Drinks"){
        console.log("Getting drink Cats...");
        items.forEach(item => {
            if (!drinkCats.current.includes(item.drinkCategory)){
                drinkCats.current.push(item.drinkCategory);
            }
        })
    }

    if (title === "Drinks"){
        return (
            <section className={styles.cat} id={title} ref={ref}>
                <h2>{title}</h2>
                {drinkCats.current.map(cat => 
                    <SubSection title={cat} key={cat}>
                        <ul>
                            {items.map(item => item.drinkCategory === cat ? <MenuItem type='drink' item={item} key={item.name}/> : null)}
                        </ul>
                    </SubSection>
                )}
            </section>
        )
    } else {
        return (
            <section className={styles.cat} id={title} ref={ref}>
                <h2>{title}</h2>
                <ul>
                    {items.map(item => <MenuItem type='food' item={item} key={item.name}/>)}
                </ul>
            </section>
        )
    }
} )

export default Category;