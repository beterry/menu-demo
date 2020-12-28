import {useState, useEffect} from 'react'
import './App.module.scss'

//import components
import CatButton from '../CatButton/CatButton'
import CatPage from '../CatPage/CatPage'

//import styles
import styles from './App.module.scss'

const contentful = require("contentful")

const client = contentful.createClient({
    space: `3t2epby3nzvk`,
    accessToken: `U6A7spSwhw5u4PPhyxE3PkX4uKkHqhp2DR2JZWRS_j4`,
})

function App() {
    const [menu, setMenu] = useState([])
    const [cats, setCats] = useState([])
    const [activeCat, setActiveCat] = useState(null)

    //call to API and populate menu
    useEffect(() => {
        client.getEntries()
            .then((response) => setMenu(response.items.map(item => item.fields)))
            .catch(console.error)
    }, [])

    //parse menu and discover categories
    useEffect(() => {
        let categories = []
        if (menu.length > 0){
            menu.forEach(item => {
                if (!categories.includes(item.category)){
                    categories.push(item.category)
                }
            })
        }
        setCats(categories)
    }, [menu])

    const changeActiveCat = (cat) => {
        setActiveCat(cat)
    }

    return (
        <div>
            <main>
                <h1>Menu Demo</h1>
                <h2>Categories</h2>
                <section className={styles.catgrid}>
                    {cats.map(category => 
                        <CatButton
                            name={category}
                            key={category} 
                            handleClick={() => changeActiveCat(category)}
                        />
                    )}
                </section>
                {activeCat && <CatPage items={menu.filter(item => item.category === activeCat)} />}
            </main>
        </div>
    );
}

export default App;
