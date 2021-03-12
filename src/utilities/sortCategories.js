//change this array to re-order the categories
const order = ['Drinks', 'Specials', 'Apps', 'Salads', 'Flatbreads', 'Sandwiches', 'Burgers', 'Entrees', 'Desserts'];

const sortCategories = (categories) => {
    const sortedCategories = categories.sort((a, b) => {
        if (order.indexOf(a) < order.indexOf(b)) {return -1};
        if (order.indexOf(a) > order.indexOf(b)) {return 1};
        return 0;
    })
    return sortedCategories;
}

export default sortCategories;