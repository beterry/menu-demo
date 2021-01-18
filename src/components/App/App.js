import React, {useState, useEffect} from 'react'
import './App.module.scss'

//import components
import TopBar from '../TopBar/TopBar'
import MenuItem from '../MenuItem/MenuItem'
import Category from '../Category/Category'
import CatButton from '../CategoryButton/CatButton'

//import styles
import styles from './App.module.scss'

const contentful = require("contentful")

const client = contentful.createClient({
    space: `3t2epby3nzvk`,
    accessToken: `U6A7spSwhw5u4PPhyxE3PkX4uKkHqhp2DR2JZWRS_j4`,
})

//create context
const colors = {
    main: '#366959',
    secondary: '#F7F5E9',
    tertiary: '#EB9B3B',
}
const ColorContext = React.createContext(colors)

//start app function
function App() {
    const [menu, setMenu] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCats, setActiveCats] = useState([])

    //call to API and populate menu
    useEffect(() => {
        client.getEntries()
            .then((response) => setMenu(response.items.map(item => item.fields)))
            .catch(console.error)
    }, [])

    //parse menu and discover categories
    useEffect(() => {
        let tempCats = []
        if (menu.length > 0){
            menu.forEach(item => {
                if (!tempCats.includes(item.category)){
                    tempCats.push(item.category)
                }
            })
        }
        setCategories(tempCats)
    }, [menu])

    const handleTapCat = (e, newCat) => {
        e.preventDefault()
        const newCatIndex = activeCats.indexOf(newCat)

        if (newCatIndex >= 0){
            //delete category from array
            const newActiveCats = [...activeCats]
            newActiveCats.splice(newCatIndex, 1)
            setActiveCats(newActiveCats)
        }else {
            //add new category to state
            setActiveCats([...activeCats, newCat])
        }
    }

    return (
        <ColorContext.Provider value={colors}>
                <TopBar />
                <main>

                    <header className={styles.headerCtn}>
                        <h1 className={styles.logo}>Logo Here</h1>
                        <div className={styles.catCtn}>
                            {categories.map(cat => 
                                <CatButton
                                    key={cat}
                                    isActive={activeCats.includes(cat)}
                                    onClick={(e) => handleTapCat(e, cat)}
                                >
                                    {cat}
                                </CatButton>
                            )}
                        </div>
                    </header>
                    
                    
                    {categories.map(cat => {
                        if (activeCats.includes(cat) || !activeCats.length){
                            return (
                                <Category title={cat} key={cat}>
                                    {menu.map(item => {
                                        if(item.category === cat){
                                            return <MenuItem item={item} key={item.name}/>
                                        }else {
                                            return null
                                        }
                                    })}
                                </Category>
                            )
                        }else {
                            return null
                        }
                        
                    })}
                </main>
        </ColorContext.Provider>
    );
}

export { App as default, ColorContext}
