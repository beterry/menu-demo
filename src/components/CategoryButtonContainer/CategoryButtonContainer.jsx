import {useRef, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    overflow-x: scroll;
    scroll-behavior: smooth;
    margin: 0 .5rem .5rem 0;
    padding: 0 .5rem;
`

const Rail = styled.div`
    display: flex;
`

const CategoryButtonContainer = ({children, position}) => {
    
    let containerRef = useRef(null);

    useEffect(() => {       
        containerRef.current.scrollLeft = (80 + 8) * position;
    }, [position])

    return (
        <Container ref={containerRef}>
            <Rail position={position}>
                {children}
            </Rail>
        </Container>
    )
}

export default CategoryButtonContainer;