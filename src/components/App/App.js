import React, {useState, useEffect, useRef} from 'react'
import './App.module.scss'

//import components
import TopBar from '../TopBar/TopBar';
import CategorySection from '../CategorySection/CategorySection';
import CatButton from '../CategoryButton/CatButton';
import CatContainer from '../CategoryButtonContainer/CategoryButtonContainer';

//import styles
import styles from './App.module.scss';

const contentful = require("contentful");

const client = contentful.createClient({
    space: `3t2epby3nzvk`,
    accessToken: `U6A7spSwhw5u4PPhyxE3PkX4uKkHqhp2DR2JZWRS_j4`,
});

//create context
const defaultSiteBrand = {
    companyName: 'Logo Here',
    website: 'https://benterry.dev',
    phone: '1 717 419 0478',
    mainColor: '#e6e6e6',
    categoryButtonColor: '#e6e6e6',
};
const BrandContext = React.createContext(defaultSiteBrand);

//start app function
function App() {
    //declare state
    const [menu, setMenu] = useState([]);
    const [categories, setCategories] = useState([]);
    const [catInView, setCatInView] = useState(null);
    const [siteBrand, setSiteBrand] = useState(defaultSiteBrand);

    //declare refs
    const categoryRefs = useRef([]);
    const numberOfCats = useRef(0);
    const navRef = useRef(null);
    const prevScrollPos = useRef(0);

   //set scrolling listener
    useEffect(() => {
        const handleScroll = () => {
            
            if (window.scrollY === 0){
                setCatInView(null);
            } else if (catInView === null){
                setCatInView(0);
            //scrolling down
            } else if (window.scrollY > prevScrollPos.current){
                //this conditional protects from crashing when last cat is selected from buttons
                if (catInView < numberOfCats.current - 1) {
                    if (window.scrollY >= getCatPosition(catInView + 1)){
                        setCatInView(catInView + 1)
                    }
                };
            //scrolling up
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
    }, [prevScrollPos, catInView, numberOfCats])

    //call to API and populate menu
    useEffect(() => {
        let runningMenu = [];

        //food items
        const foodCall = client.getEntries({'content_type': 'item'});

        //drinks items
        const drinkCall = client.getEntries({'content_type': 'drinkItem'});

        Promise.all([foodCall, drinkCall]).then((res) => {
            //go through responses and combine the results
            res.forEach(val => {
                runningMenu = runningMenu.concat(val.items.map(item => item.fields));
            })
            setMenu(runningMenu);
        });

        //site settings
        client.getEntries({
            'content_type': 'brand'
        })
            .then((response) => setSiteBrand({...response.items[0].fields}))
            .catch(console.error);
    }, [])

    //parse menu and discover categories
    useEffect(() => {
        let tempCats = [];
        if (menu.length > 0){
            menu.forEach(item => {
                if (!tempCats.includes(item.category)){
                    tempCats.push(item.category);
                }
            })
        }
        setCategories(tempCats);
        numberOfCats.current = tempCats.length;
    }, [menu])

    const scrollToCategory = (i) => {
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
        <BrandContext.Provider value={siteBrand}>
                <TopBar />
                <main>

                    <header className={styles.headerCtn} ref={navRef}>

                        {/* CATEGORY BUTTONS */}
                        <CatContainer position={catInView} numberOfCats={numberOfCats.current}>
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

                    </header>
                    
                    {categories.map((cat, i) => (
                        <CategorySection 
                            title={cat}
                            key={cat}
                            ref={ref => categoryRefs.current[i] = ref}
                            items={menu.filter(item => item.category === cat)}
                        />
                    ))}

                </main>
        </BrandContext.Provider>
    );
}

export { App as default, BrandContext}
