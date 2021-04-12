import React from 'react'

//this information is used before data is pulled from Contentful
const defaultSiteBrand = {
    companyName: 'Logo Here',
    website: 'https://benterry.dev',
    phone: '1 717 419 0478',
    mainColor: '#e6e6e6',
    categoryButtonColor: '#e6e6e6',
};

const BrandContext = React.createContext(defaultSiteBrand);

export {BrandContext as default, defaultSiteBrand};