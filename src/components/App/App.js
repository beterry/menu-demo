import React, {useState, useEffect, useRef} from 'react'
import './App.module.scss'

//import components
import TopBar from '../TopBar/TopBar';
import MenuItem from '../MenuItem/MenuItem';
import CategorySection from '../CategorySection/CategorySection';
import CatButton from '../CategoryButton/CatButton';
import CatContainer from '../CategoryButtonContainer/CategoryButtonContainer';
import TagButton from '../TagButton/TagButton'
import DrinkSection from '../DrinkSection/DrinkSection';

//import styles
import styles from './App.module.scss';

const contentful = require("contentful");

const client = contentful.createClient({
    space: `3t2epby3nzvk`,
    accessToken: `U6A7spSwhw5u4PPhyxE3PkX4uKkHqhp2DR2JZWRS_j4`,
});

//create context
const defaultSiteColors = {
    mainColor: '#e6e6e6',
    categoryButtonColor: '#e6e6e6',
};
const ColorContext = React.createContext(defaultSiteColors);

//start app function
function App() {
    //declare state
    const [menu, setMenu] = useState([]);
    const [drinks, setDrinks] = useState([])
    const [categories, setCategories] = useState([]);
    const [catInView, setCatInView] = useState(null);
    const [tags, setTags] = useState([]);
    const [activeTags, setActiveTags] = useState([]);
    const [siteColors, setSiteColors] = useState(defaultSiteColors);

    //declare refs
    const categoryRefs = useRef([]);
    const navRef = useRef(null);
    const prevScrollPos = useRef(0);

   //set scrolling listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0){
                setCatInView(null);
            } else if (catInView === null){
                setCatInView(0);
            } else if (window.scrollY > prevScrollPos.current){
                if (window.scrollY >= getCatPosition(catInView + 1)){
                    setCatInView(catInView + 1)
                }
            }else {
                if (catInView > 0){
                    if (window.scrollY <= getCatPosition(catInView - 1)){
                        setCatInView(catInView - 1)
                    }
                }
            }
    
            prevScrollPos.current = window.scrollY;
        }
        
        window.addEventListener("scroll", handleScroll);

        //cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [prevScrollPos, catInView])

    //call to API and populate menu
    useEffect(() => {
        //food items
        client.getEntries({
            'content_type': 'item'
        })
            .then((response) => setMenu(response.items.map(item => item.fields)))
            .catch(console.error);

        //drinks items
        client.getEntries({
            'content_type': 'drinkItem'
        })
            .then((response) => setDrinks(response.items.map(item => item.fields)))
            .catch(console.error);

        //site settings
        client.getEntries({
            'content_type': 'siteSettings'
        })
            .then((response) => setSiteColors({...response.items[0].fields}))
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

    const handleTapTag = (e, newTag) => {
        e.preventDefault();
        const newTagIndex = activeTags.indexOf(newTag);

        if (newTagIndex >= 0){
            //delete tag from array
            let newActiveTags = [...activeTags];
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

    const scrollToCategory = (i) => {
        console.log("Scrolling to: ", getCatPosition(i));
        setCatInView(i);
        window.scrollTo({
            top: getCatPosition(i),
            behavior: 'smooth',
        })
    }

    const getCatPosition = (i) => {
        const navHeight = navRef.current.scrollHeight + 8;
        return window.pageYOffset + categoryRefs.current[i].getBoundingClientRect().top - navHeight;
    }

    return (
        <ColorContext.Provider value={siteColors}>
                <TopBar />
                <main>

                    <header className={styles.headerCtn} ref={navRef}>
                        <h1 className={styles.logo}>Logo Here</h1>

                        {/* CATEGORY BUTTONS */}
                        <CatContainer position={catInView}>
                            {/* {drinks.length > 0 &&
                                <CatButton
                                    href={`#Drinks`}
                                    category="Drinks"
                                >
                                    Drinks
                                </CatButton>
                            } */}
                            {categories.map((cat, i) => 
                                <CatButton
                                    key={cat}
                                    onClick={() => scrollToCategory(i)}
                                    category={cat}
                                    isActive={catInView === i}
                                >
                                    {cat}
                                </CatButton>
                            )}
                        </CatContainer>

                        {/* TAG BUTTONS */}
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
                    
                    {/* <DrinkSection drinks={drinks}/> */}
                    
                    {categories.map((cat, i) => (
                        <CategorySection title={cat} key={cat} ref={ref => categoryRefs.current[i] = ref}>
                            <ul>
                                {menu.map(item => {
                                    if(item.category === cat && tagsMatch(item)){
                                        return <MenuItem type='food' item={item} key={item.name}/>
                                    }else {
                                        return null
                                    }
                                })}
                            </ul>
                        </CategorySection>
                    ))}

                </main>
        </ColorContext.Provider>
    );
}

export { App as default, ColorContext}
