import {useState, useEffect} from 'react'
import './App.css'

const contentful = require("contentful")

const client = contentful.createClient({
    space: `3t2epby3nzvk`,
    accessToken: `U6A7spSwhw5u4PPhyxE3PkX4uKkHqhp2DR2JZWRS_j4`,
})

const MenuItem = ({item}) => {
    let ingredientString = ""
    if(item.ingredients.length > 0){
        ingredientString = item.ingredients[0]
        for (let i = 1; i < item.ingredients.length; i++){
            ingredientString += `, ${item.ingredients[i]}`
        }
    }
    
    return (
        <div>
            <h2>{item.name}</h2>
            <h3>{`$${item.price}`}</h3>
            <p>{ingredientString}</p>
        </div>
    )
}

function App() {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        client.getEntries()
            .then((response) => setMenu(response.items.map(item => item.fields)))
            .catch(console.error)
    }, [])

    return (
        <div>
            <h1>Menu Demo</h1>
            {menu.map((item, index) => <MenuItem item={item} key={index} />)}
        </div>
    );
}

export default App;
