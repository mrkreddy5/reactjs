import Product from "./product";

function App(){
    let prod = {
        name: 'hp',
        model : 'ryzen-5000',
        year : 2000,
        price : 45000
    }

    return (
        <Product {...prod}/>
    )
}

export default App;



import prod from './App.js'

function Product (prod) {
    return (
        <>
            <p>Product Name : {prod.name}</p>
            <p>Product Model : {prod.model}</p>
            <p>Product Year : {prod.year}</p>
            <p>Product Price : {prod.price}</p>
        </>
    )
}

// export default Product;


// -----------------------------------------------------------------------

import prod from './App.js'

function Product ({name, model}) {
    return (
        <>
            <p>Product Name : {name}</p>
            <p>Product Model : {model}</p>
            {/* <p>Product Year : {prod.year}</p>
            <p>Product Price : {prod.price}</p> */}
        </>
    )
}

// export default Product;


