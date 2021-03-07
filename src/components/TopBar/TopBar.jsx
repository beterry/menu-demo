import {useContext} from 'react'
import {BrandContext} from '../App/App'

import styles from './TopBar.module.scss'

import HomeIcon from '../../icons/HomeIcon'
import PhoneIcon from '../../icons/PhoneIcon'

//TODO: read color from context
const TopBar = ({activeCat, handleBack}) => {

    const brand = useContext(BrandContext)

    return (
        <nav >
            <div className={styles.topbar} style={{backgroundColor: brand.mainColor}}>
                <div className={styles.topbar_inner}>
                    <a href={brand.website} target='_blank' rel='noreferrer' className={styles.btn_icon}>
                        <HomeIcon color='white' />
                    </a>
                    <a href={`tel:${brand.phone}`} className={styles.btn_icon}>
                        <PhoneIcon color={'white'} />
                    </a>
                </div>
            </div>
            <div className={styles.logo}>
                <h1 style={{color: brand.mainColor}}>{brand.companyName}</h1>
                <h2>{brand.companySubtitle}</h2>
            </div>
        </nav>
    )
}

export default TopBar
