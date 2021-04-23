import {useContext} from 'react';
import BrandContext from '../utilities/BrandContext';

import styled from 'styled-components';

import {IconButton} from './Buttons';

import HomeIcon from '../icons/HomeIcon'
import PhoneIcon from '../icons/PhoneIcon'

//TODO: read color from context
const TopBar = ({activeCat, handleBack}) => {

    const brand = useContext(BrandContext)

    const showAlert = (message) => {
        window.alert(message);
    }

    return (
        <Wrapper>
            <TopBarWrapper style={{'--backgroundColor': brand.mainColor}}>
                <Inner>
                    <TopBarIcon
                        onClick={() => showAlert(`This button would link back to your business's main website.`)}
                    >
                        <HomeIcon color='white' />
                    </TopBarIcon>
                    <TopBarIcon
                        onClick={() => showAlert(`This button would open the phone app with your business's phone number ready to call.`)}
                    >
                        <PhoneIcon color={'white'} />
                    </TopBarIcon>
                </Inner>
            </TopBarWrapper>
            <Logo>
                <img src={brand.logo} alt={brand.companyName} />
            </Logo>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    
`

const TopBarWrapper = styled.nav`
    padding: 8px 16px;
    background-color: var(--backgroundColor);
`

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`

const TopBarIcon = styled(IconButton)`
    &:hover{
        background-color: rgba(0,0,0,.1);
    }
`

const Logo = styled.div`
    text-align: center;
    background: white;
    padding: 16px;

    img{
        width: 60%;
        max-width: 350px;
    }

    @media screen and (min-width: 768px){
        background: none;
        padding: 3%;
    }
`

export default TopBar
