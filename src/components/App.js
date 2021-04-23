import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

//import components
import TopBar from './TopBar';
import CategorySection from './CategorySection';
import CatButton from './CatButton';
import CatContainer from './CategoryButtonContainer';
import LoadingScreen from './LoadingScreen';

//import utiltities
import sortCategories from '../utilities/sortCategories';
import getCatPosition from '../utilities/getCatPosition';
import BrandContext, {defaultSiteBrand} from '../utilities/BrandContext';
import client from '../utilities/contentful';

//start app function
function App() {
    //declare state
    const [menu, setMenu] = useState([]);
    const [categories, setCategories] = useState([]);
    const [catInView, setCatInView] = useState(null);
    const [siteBrand, setSiteBrand] = useState(defaultSiteBrand);

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
            //scrolling down
            } else if (window.scrollY > prevScrollPos.current){
                //this conditional protects from crashing when last cat is selected from buttons
                if (catInView < categories.length - 1) {
                    if (window.scrollY >= getCatPosition(catInView + 1, navRef.current, categoryRefs.current)){
                        setCatInView(catInView + 1)
                    }
                };
            //scrolling up
            }else {
                if (catInView > 0){
                    if (window.scrollY <= getCatPosition(catInView - 1, navRef.current, categoryRefs.current)){
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
    }, [prevScrollPos, catInView, categories, navRef, categoryRefs])

    //call to API and populate menu
    useEffect(() => {
        console.log("Calling API...");
        let runningMenu = [];

        //food items
        const foodCall = client.getEntries({'content_type': 'item'});

        //drinks items
        const drinkCall = client.getEntries({'content_type': 'drinkItem'});

        Promise.all([foodCall, drinkCall])
        .then((res) => {
            //go through responses and combine the results
            res.forEach(val => {
                runningMenu = runningMenu.concat(val.items.map(item => item.fields));
            })
            setMenu(runningMenu);

            //discover unique categories
            console.log("Discovering categories...")
            let tempCats = [];
            if (runningMenu.length > 0){
                runningMenu.forEach(item => {
                    if (!tempCats.includes(item.category)){
                        tempCats.push(item.category);
                    }
                })
            }
            setCategories(sortCategories(tempCats));
        })
        .catch(console.error)
        ;

        //site settings
        client.getEntries({
            'content_type': 'brand'
        })
        .then((response) => {
            let logoUrl = response.items[0].fields.logo.fields.file.url;
            setSiteBrand({...response.items[0].fields, logo: logoUrl});
        })
        .catch(console.error);
    }, [])

    const scrollToCategory = (i) => {
        setCatInView(i);
        window.scrollTo({
            top: getCatPosition(i, navRef.current, categoryRefs.current),
            behavior: 'smooth',
        })
    }

    return (
        <BrandContext.Provider value={siteBrand}>

                <LoadingScreen isLoading={menu.length === 0} color={siteBrand.mainColor} />

                <TopBar />
                <Wrapper>
                    <Header ref={navRef}>
                        {/* CATEGORY BUTTONS */}
                        <CatContainer position={catInView} numberOfCats={categories.length}>
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
                    </Header>

                    <div>
                        {categories.map((cat, i) => (
                            <CategorySection 
                                title={cat}
                                key={cat}
                                ref={ref => categoryRefs.current[i] = ref}
                                items={menu.filter(item => item.category === cat)}
                            />
                        ))}
                    </div>
                </Wrapper>
        </BrandContext.Provider>
    );
}

const Wrapper = styled.main`
    width: 100%;
    margin: 0 auto;
    display: grid;
    position: relative;
    gap: 0;
    grid-template-columns: 100%;

    @media screen and (min-width: 768px){
        max-width: 90%;
        grid-template-columns: auto 1fr;
        gap: 32px;
    }

    @media screen and (min-width: 1024px){
        width: 80%;
        max-width: 1200px;
        grid-template-columns: auto 1fr;
    }
`

const Header = styled.header`
    width: 100%;
    background: white;

    border-bottom: 1px solid black;

    position: sticky;
    top: 0;

    z-index: 100;

    @media screen and (min-width: 768px){
        position: relative;
        background: none;
        padding: 0;
    }
`

export default App;
