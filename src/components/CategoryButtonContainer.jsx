import {useRef} from 'react';
import styled from 'styled-components';

const CategoryButtonContainer = ({children, position, numberOfCats}) => {
    
    let containerRef = useRef(null);

    if (containerRef.current){
        containerRef.current.scrollLeft = ((80 + 8) * position);
    }

    return (
        <Wrapper>
            <ButtonRow ref={containerRef}>

                {children}

            </ButtonRow>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 16px;

    @media screen and (min-width: 768px){
        padding: 0;
        position: sticky;
        top: 32px;
    }
`

const ButtonRow = styled.nav`
    scroll-behavior: smooth;
    overflow: auto;
    white-space: nowrap;
    margin: -16px;
    padding: 16px 12px;

    button{
        margin: 0 4px;
    }

    @media screen and (min-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin: 0;
        padding: 0;

        button{
            margin: 0;
        }
    }

    @media screen and (min-width: 1024px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export default CategoryButtonContainer;