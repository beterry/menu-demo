const getCatPosition = (i, nav, catElems) => {
    if (i >= 0 && i < catElems.length){
        if (window.innerWidth < 768){
            const navHeight = nav.scrollHeight + 8;
            return window.pageYOffset + catElems[i].getBoundingClientRect().top - navHeight;
        }else {
            return window.pageYOffset + catElems[i].getBoundingClientRect().top - 32;
        }
    }else {
        return 0;
    }
}

export default getCatPosition;