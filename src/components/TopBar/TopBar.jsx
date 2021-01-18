import {useContext} from 'react'
import {ColorContext} from '../App/App'

import styles from './TopBar.module.scss'

import HomeIcon from '../../icons/HomeIcon'

//TODO: read color from context
const TopBar = ({activeCat, handleBack}) => {

    const colors = useContext(ColorContext)

    return (
        <nav className={styles.topbar} style={{backgroundColor: colors.main}}>
            <div className={styles.nav_inner}>
                <a href='https://benterry.dev' target='_blank' rel='noreferrer' className={styles.btn_home}>
                    <HomeIcon color='white' />
                </a>
            </div>
        </nav>
    )
}

export default TopBar
