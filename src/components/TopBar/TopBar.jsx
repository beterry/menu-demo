import {useContext} from 'react'
import {BrandContext} from '../App/App'

import styles from './TopBar.module.scss'

import HomeIcon from '../../icons/HomeIcon'
import PhoneIcon from '../../icons/PhoneIcon'

//TODO: read color from context
const TopBar = ({activeCat, handleBack}) => {

    const brand = useContext(BrandContext)

    return (
        <nav className={styles.topbar} style={{backgroundColor: brand.mainColor}}>
            <div className={styles.nav_inner}>
                <a href={brand.website} target='_blank' rel='noreferrer' className={styles.btn_icon}>
                    <HomeIcon color='white' />
                </a>
                <a href={`tel:${brand.phone}`} className={styles.btn_icon}>
                    <PhoneIcon color={'white'} />
                </a>
            </div>
        </nav>
    )
}

export default TopBar
