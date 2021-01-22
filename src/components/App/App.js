import React, {useState, useEffect} from 'react'
import './App.module.scss'

//import components
import TopBar from '../TopBar/TopBar';
import MenuItem from '../MenuItem/MenuItem';
import CategorySection from '../CategorySection/CategorySection';
import CatButton from '../CategoryButton/CatButton';
import TagButton from '../TagButton/TagButton'

//import styles
import styles from './App.module.scss';

const contentful = require("contentful");

const client = contentful.createClient({
    space: `3t2epby3nzvk`,
    accessToken: `U6A7spSwhw5u4PPhyxE3PkX4uKkHqhp2DR2JZWRS_j4`,
});

//create context
const colors = {
    main: '#366959',
    secondary: '#F7F5E9',
    tertiary: '#EB9B3B',
};
const ColorContext = React.createContext(colors);

//start app function
function App() {
    const [menu, setMenu] = useState([]);

    const [categories, setCategories] = useState([]);
    const [activeCats, setActiveCats] = useState([]);

    const [tags, setTags] = useState([]);
    const [activeTags, setActiveTags] = useState([]);

    //call to API and populate menu
    useEffect(() => {
        client.getEntries()
            .then((response) => setMenu(response.items.map(item => item.fields)))
            .catch(console.error);
    }, [])

    //parse menu and discover categories and tags
    useEffect(() => {
        let tempCats = [];
        let tempTags = [];
        if (menu.length > 0){
            menu.forEach(item => {
                if (!tempCats.includes(item.category)){
                    tempCats.push(item.category);
                }
                if (item.tags){
                    item.tags.forEach(tag => {
                        if (!tempTags.includes(tag)){
                            tempTags.push(tag);
                        }
                    })
                }
            })
        }
        setCategories(tempCats);
        setTags(tempTags);
    }, [menu])

    const handleTapCat = (e, newCat) => {
        e.preventDefault();
        const newCatIndex = activeCats.indexOf(newCat);

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

    const handleTapTag = (e, newTag) => {
        e.preventDefault();
        const newTagIndex = activeTags.indexOf(newTag);

        if (newTagIndex >= 0){
            //delete tag from array
            const newActiveTags = [...activeTags];
            newActiveTags.splice(newTagIndex, 1);
            setActiveTags(newActiveTags);
        }else {
            //add new tag to state
            setActiveTags([...activeTags, newTag]);
        }
    }

    //returns true if item matches the tags selected
    const tagsMatch = (item) => {
        //always return true of nothing is slected
        if (activeTags.length === 0){
            return true;

        } else {
            //if there are tags selected but item has none
            if (!item.tags){
                return false;
            }

            //return false if there is a mismatch
            for (let i = 0; i<activeTags.length; i++){
                if (!item.tags.includes(activeTags[i])){
                    return false;
                }
            }

            //everything matches
            return true;
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
                        <div className={styles.tagCtn}>
                            {tags.map(tag => 
                                <TagButton
                                    tag={tag}
                                    key={tag}
                                    handleTapTag={(e) => handleTapTag(e, tag)}
                                    isActive={activeTags.includes(tag)}
                                />
                            )}
                        </div>
                    </header>
                    
                    
                    {categories.map(cat => {
                        if (activeCats.includes(cat) || !activeCats.length){
                            return (
                                <CategorySection title={cat} key={cat}>
                                    {menu.map(item => {
                                        if(item.category === cat && tagsMatch(item)){
                                            return <MenuItem item={item} key={item.name}/>
                                        }else {
                                            return null
                                        }
                                    })}
                                </CategorySection>
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
