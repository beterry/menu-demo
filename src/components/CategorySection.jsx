import React, {useRef} from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const SubSection = ({title, children}) => (
    <div>
        <SubSectionHeading>{title}</SubSectionHeading>
        {children}
    </div>
)

const Category = React.forwardRef(({title, items}, ref) => {
    const drinkCats = useRef([]);

    if (title === "Drinks"){
        items.forEach(item => {
            if (!drinkCats.current.includes(item.drinkCategory)){
                drinkCats.current.push(item.drinkCategory);
            }
        })
    }

    if (title === "Drinks"){
        return (
            <SectionWrapper ref={ref}>
                <SectionHeading>{title}</SectionHeading>
                {drinkCats.current.map(cat => 
                    <SubSection title={cat} key={cat}>
                        <ul>
                            {items.map(item => item.drinkCategory === cat ? <MenuItem type='drink' item={item} key={item.name}/> : null)}
                        </ul>
                    </SubSection>
                )}
            </SectionWrapper>
        )
    } else {
        return (
            <SectionWrapper ref={ref}>
                <SectionHeading>{title}</SectionHeading>
                <ul>
                    {items.map(item => <MenuItem type='food' item={item} key={item.name}/>)}
                </ul>
            </SectionWrapper>
        )
    }
})

const SectionWrapper = styled.section`
    background: white;

    padding: 1.5rem 1rem;
    margin: .5rem 0;

    border-top: 1px solid black;
    border-bottom: 1px solid black;

    @media screen and (min-width: 768px){
        border: 1px solid black;
        border-radius: .25rem;

        padding: 3rem;

        &:first-child{
            margin-top: 0;
        }
    }
`

const SectionHeading = styled.h2`
    padding-bottom: 1rem;
`

const SubSectionHeading = styled.h3`
    font-weight: 700;
    padding: 1rem 0;
`

export default Category;