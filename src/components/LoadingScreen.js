import styled from 'styled-components';

const Overlay = styled.div`
    background-color: ${props => props.color};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: ${ props => props.isLoading ? 'none' : 'translateY(-100%)' };
    transition: transform 1s .5s, background-color .5s;
`

const LoadingText = styled.p`

`

const LoadingScreen = ({isLoading, color}) => {
    return (
        <Overlay color={color} isLoading={isLoading}>
            <LoadingText>Loading...</LoadingText>
        </Overlay>
    )
}

export default LoadingScreen;