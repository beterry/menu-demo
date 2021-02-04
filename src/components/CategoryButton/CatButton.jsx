import {useContext} from 'react';
import {ColorContext} from '../App/App';
import styles from './CatButton.module.scss';

import AppIcon from '../../icons/categories/AppIcon';
import SandwichIcon from '../../icons/categories/SandwichIcon';
import FlatbreadIcon from '../../icons/categories/FlatbreadIcon';
import BurgerIcon from '../../icons/categories/BurgerIcon';
import EntreeIcon from '../../icons/categories/EntreeIcon';
import SaladIcon from '../../icons/categories/SaladIcon';
import DrinkIcon from '../../icons/categories/DrinkIcon';
import SpecialsIcon from '../../icons/categories/SpecialsIcon';
import DessertIcon from '../../icons/categories/DessertIcon';

const CatButton = ({onClick, category, children}) => {

    const colors = useContext(ColorContext);

    const catIcons = {
        Apps: <AppIcon color='#141518'/>,
        Desserts: <DessertIcon color='#141518'/>,
        Entrees: <EntreeIcon color='#141518'/>,
        Burgers: <BurgerIcon color='#141518'/>,
        Sandwiches: <SandwichIcon color='#141518'/>,
        Salads: <SaladIcon color='#141518'/>,
        Flatbreads: <FlatbreadIcon color='#141518'/>,
        Specials: <SpecialsIcon color='#141518'/>,
        Drinks: <DrinkIcon color='#141518'/>,
    }

    return (
        <button
            className={styles.catButton}
            onClick={onClick}
            style={{
                background: colors.categoryButtonColor,
                color: '#141518',
            }}
        >
            <div className={styles.iconCtn}>
                {catIcons[category]}
            </div>
            
            {children}
        </button>
    );
};

export default CatButton;