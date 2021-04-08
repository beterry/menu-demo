import {useContext} from 'react'
import {BrandContext} from './App'

import styled from 'styled-components';

const MenuItem = ({item, type, disabled}) => {

    const colors = useContext(BrandContext)

    //compile ingredients string
    let ingredientString = ""
    
    if(item.ingredients && item.ingredients.length > 0){
        ingredientString = item.ingredients[0]
        for (let i = 1; i < item.ingredients.length; i++){
            ingredientString += `, ${item.ingredients[i]}`
        }
    }

    //compile string for drink ABV, maker, location
    const renderDrinkDetails = () => {
        let drinkDetails = [];

        if (item.abv){
            drinkDetails.push(`${item.abv}% ABV`);
        }

        if (item.maker){
            drinkDetails.push(item.maker);
        }

        if (item.location){
            drinkDetails.push(item.location);
        }

        if (drinkDetails.length){
            return drinkDetails.join(' | ');
        }else{
            return null;
        }
    }
    
    if (type === "food"){
        return (
            <Item>
                <Top>
                    <ItemHeading>{item.name}</ItemHeading>
                    <PriceWrapper><Price>{`$${item.price.toFixed(2)}`}</Price></PriceWrapper>
                </Top>
                <Ingredients>{ingredientString}</Ingredients>
                <ul>
                    {item.tags?.map((tag, i) => 
                        <Tag
                            key={`${item.name} tag ${i}`}
                            style={{'--backgroundColor': colors.categoryButtonColor}}
                        >
                            {tag}
                        </Tag>)
                    }
                </ul>
            </Item>
        )
    }

    else if (type === 'drink'){
        return (
            <Item>
                <Top>
                    <ItemHeading>{item.name}</ItemHeading>
                    <PriceWrapper>
                        <Price>{`$${item.price.toFixed(2)}`}</Price>
                        {item.ounces && <Ounces>{`${item.ounces}oz`}</Ounces>}
                    </PriceWrapper>
                </Top>
                <Ingredients>{renderDrinkDetails()}</Ingredients>
                {item.description && <DrinkDescription>{item.description}</DrinkDescription>}
            </Item>
        )
    }

    else {
        throw new Error("Unsupported list item type")
    }
}

const Item = styled.li`
    padding: 1rem 0;

    border-bottom: 1px solid lightgray;

    &:first-child{
        border-top: 1px solid lightgray;
    }
    &:last-child{
        border-bottom: none;
    }
`

const ItemHeading = styled.h4`
    font-size: 1rem;
`

const PriceWrapper = styled.div`
    flex-shrink: 0;
    position: relative;
`

const Price = styled.h5`
`

const Ingredients = styled.p`
    width: 85%;
    color: #6C6C6C;
    line-height: 1.365;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: .5rem;
`

const Ounces = styled.p`
    position: absolute;
    right: 0;
    top: 100%;
    color: #6C6C6C;
`

const DrinkDescription = styled.p`
    margin-top: 1rem;
    color: #6C6C6C;
`

const Tag = styled.li`
    display: inline-flex;
    border-radius: .25rem;
    padding: .25rem .5rem;
    margin-right: .25rem;
    font-size: .75rem;
    margin-top: .5rem;
    background-color: var(--backgroundColor);
`

export default MenuItem