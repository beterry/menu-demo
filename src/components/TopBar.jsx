import {useContext} from 'react'
import {BrandContext} from './App'

import styled from 'styled-components';

import {IconButton} from './Buttons';

import HomeIcon from '../icons/HomeIcon'
import PhoneIcon from '../icons/PhoneIcon'

//TODO: read color from context
const TopBar = ({activeCat, handleBack}) => {

    const brand = useContext(BrandContext)

    return (
        <header>
            <TopBarWrapper style={{'--backgroundColor': brand.mainColor}}>
                <Inner>
                    <TopBarIcon as='a' href={brand.website} target='_blank' rel='noreferrer'>
                        <HomeIcon color='white' />
                    </TopBarIcon>
                    <TopBarIcon as='a' href={`tel:${brand.phone}`}>
                        <PhoneIcon color={'white'} />
                    </TopBarIcon>
                </Inner>
            </TopBarWrapper>
            <Logo>
                <h1 style={{color: brand.mainColor}}>{brand.companyName}</h1>
                <h2>{brand.companySubtitle}</h2>
            </Logo>
        </header>
    )
}

const TopBarWrapper = styled.nav`
    padding: .5rem 1rem;
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
    padding: 1rem 0 0 0;
    background: white;

    h1{
        text-transform: uppercase;
    }

    h2{
        font-size: .875rem;
    }

    @media screen and (min-width: 768px) {
        background: none;
        padding: 5%;

        h1{
            font-size: 3rem;
        }

        h2{
            font-size: 1rem;
        }
    }
`

export default TopBar
