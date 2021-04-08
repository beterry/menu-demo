import {useRef, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    position: relative;
    overflow-x: scroll;
    scroll-behavior: smooth;
    margin-bottom: 1rem;

    @media screen and (min-width: 768px){
        overflow-x: auto;

        position: sticky;
        top: 2rem;
    }
`

const Rail = styled.div`
    display: grid;
    gap: 8px;
    grid-template-columns: .5rem repeat(${props => props.columns}, 1fr) .5rem;

    @media screen and (max-width: 768px){
        &::before, &::after{
            content: '';
        }
    }

    @media screen and (min-width: 768px){
        grid-template-columns: repeat(2, 80px);
    }

    @media screen and (min-width: 1024px){
        grid-template-columns: repeat(3, 80px);
        gap: 1rem;
    }
`

const CategoryButtonContainer = ({children, position, numberOfCats}) => {
    
    let containerRef = useRef(null);

    useEffect(() => {       
        containerRef.current.scrollLeft = ((80 + 8) * position) - 8;
    }, [position])

    return (
        <Container ref={containerRef}>
            <Rail columns={numberOfCats}>
                {children}
            </Rail>
        </Container>
    )
}

export default CategoryButtonContainer;