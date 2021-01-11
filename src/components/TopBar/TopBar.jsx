import styles from './TopBar.module.scss'

import HomeIcon from '../../icons/HomeIcon'
import BackIcon from '../../icons/BackIcon'

//TODO: read color from context
//TODO: read onClick func from context reducer
const TopBar = ({activeCat, handleBack}) => {
    return (
        <nav className={styles.topbar} style={{backgroundColor: '#366959'}}>
            <div className={styles.nav_inner}>
                <a href='https://benterry.dev' target='_blank' rel='noreferrer' className={styles.btn_home}>
                    <HomeIcon color='white' />
                </a>
            </div>
        </nav>
    )
}

export default TopBar
