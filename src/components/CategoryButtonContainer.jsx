import {useRef, useEffect} from 'react';
import styled from 'styled-components';

const CategoryButtonContainer = ({children, position, numberOfCats}) => {
    
    let containerRef = useRef(null);

    useEffect(() => {     
        containerRef.current.scrollLeft = ((80 + 8) * position) - 8;
    }, [position])

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
`

const ButtonRow = styled.div`    
    scroll-behavior: smooth;
    overflow: auto;
    white-space: nowrap;
    margin: -16px -20px;
    padding: 16px;

    button{
        margin: 0 4px;
    }

    @media screen and (min-width: 768px){
        
    }
`

export default CategoryButtonContainer;