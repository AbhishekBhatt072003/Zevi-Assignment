import { faker } from "@faker-js/faker";

const getProductData = () => {
    const productData = [];
    for (let i = 0; i < 5; i++) {
        productData.push({
            name: faker.commerce.productName(),
            image: faker.image.urlLoremFlickr({ category: 'people', height: 300, width: 300 }),
            description: faker.commerce.productDescription(),
        });
    }

    return productData;
};


const getSuggestions = () => {
    const suggestions = [];
    for (let i = 0; i < 5; i++) {
        suggestions.push({
            name: faker.commerce.productName(),
        });
    }
    return suggestions;
}


export { getProductData, getSuggestions };