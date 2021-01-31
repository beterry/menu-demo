import CategorySection from '../CategorySection/CategorySection';
import MenuItem from '../MenuItem/MenuItem';

import styles from './DrinkSection.module.scss';

const SubSection = ({title, children}) => (
    <div className={styles.subSection}>
        <h3>{title}</h3>
        {children}
    </div>
)

const DrinkSection = ({drinks}) => {

    //find all existing drink categories
    let drinkCats = [];
    if (drinks.length > 0){
        drinks.forEach(item => {
            if (!drinkCats.includes(item.category)){
                drinkCats.push(item.category);
            }
        })
    }

    console.log(drinkCats);

    return (
        <CategorySection title="Drinks">
            {drinkCats.map(cat => 
                <SubSection title={cat} key={cat}>
                    <ul>
                        {drinks.map(item => item.category === cat ? <MenuItem type='drink' item={item} key={item.name}/> : null)}
                    </ul>
                </SubSection>
            )}
        </CategorySection>
    )
}

export default DrinkSection;