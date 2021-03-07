import {useRef, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    overflow-x: scroll;
    scroll-behavior: smooth;
    margin-bottom: 1rem;
`

const Rail = styled.div`
    display: grid;
    gap: 8px;
    grid-template-columns: .5rem repeat(${props => props.columns}, 1fr) .5rem;

    &::before, &::after{
        content: '';
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