import {useContext} from 'react';
import BrandContext from '../utilities/BrandContext';
import styled from 'styled-components';

import AppIcon from '../icons/categories/AppIcon';
import SandwichIcon from '../icons/categories/SandwichIcon';
import FlatbreadIcon from '../icons/categories/FlatbreadIcon';
import BurgerIcon from '../icons/categories/BurgerIcon';
import EntreeIcon from '../icons/categories/EntreeIcon';
import SaladIcon from '../icons/categories/SaladIcon';
import DrinkIcon from '../icons/categories/DrinkIcon';
import SpecialsIcon from '../icons/categories/SpecialsIcon';
import DessertIcon from '../icons/categories/DessertIcon';

const CatButton = ({onClick, category, isActive, children}) => {

    const colors = useContext(BrandContext);

    const catIcons = {
        Apps: <AppIcon color={isActive ? 'white' : '#141518'}/>,
        Desserts: <DessertIcon color={isActive ? 'white' : '#141518'}/>,
        Entrees: <EntreeIcon color={isActive ? 'white' : '#141518'}/>,
        Burgers: <BurgerIcon color={isActive ? 'white' : '#141518'}/>,
        Sandwiches: <SandwichIcon color={isActive ? 'white' : '#141518'}/>,
        Salads: <SaladIcon color={isActive ? 'white' : '#141518'}/>,
        Flatbreads: <FlatbreadIcon color={isActive ? 'white' : '#141518'}/>,
        Specials: <SpecialsIcon color={isActive ? 'white' : '#141518'}/>,
        Drinks: <DrinkIcon color={isActive ? 'white' : '#141518'}/>,
    }

    return (
        <Button
            onClick={onClick}
            style={{
                '--backgroundColor': isActive ? colors.mainColor : colors.categoryButtonColor,
                '--textColor': isActive ? 'white' : '#141518',
            }}
        >
            <Icon>{catIcons[category]}</Icon>
            
            {children}
        </Button>
    );
};

const Button = styled.button`
    width: 80px;
    height: 80px;

    background-color: var(--backgroundColor);
    color: var(--textColor);

    display: inline-flex;
    vertical-align: top;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border: none;
    border-radius: .2rem;

    padding: .5rem;

    line-height: 1;

    font-size: .75rem;
    font-weight: 500;

    border: 1px solid black;

    &:focus{
        outline: none;
    }

    @media screen and (min-width: 768px){
        border: 1px solid black;
    }
`

const Icon = styled.div`
    width: auto;
    height: 56.25%;

    display: flex;
    align-items: center;

    margin-bottom: .325rem;

    svg{
        width: 100%;
    }
`

export default CatButton;