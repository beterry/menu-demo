import {useState, useEffect} from 'react'
import './App.module.scss'

//import components
import TopBar from '../TopBar/TopBar'
import MenuItem from '../MenuItem/MenuItem'
import Category from '../Category/Category'

//import styles
// import styles from './App.module.scss'

const contentful = require("contentful")

const client = contentful.createClient({
    space: `3t2epby3nzvk`,
    accessToken: `U6A7spSwhw5u4PPhyxE3PkX4uKkHqhp2DR2JZWRS_j4`,
})

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

    useEffect(() => {
        console.log("Active Cats: ", activeCats)
    }, [activeCats])

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
        <div>
            <TopBar />
            <main>
                <h1>Logo Here</h1>
                {categories.map(cat => <button key={cat} onClick={(e) => handleTapCat(e, cat)}>{cat}</button>)}
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
        </div>
    );
}

export default App;
