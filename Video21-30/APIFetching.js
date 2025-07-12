import { useEffect, useState } from "react"
import ProductCard from "./productCard";
import './App.css';

function App() {

    let [productList, updateProductList] = useState([]);

    useEffect(()=>{
        getProducts();
    }, [])

    async function getProducts(){
        let res = await fetch('https://fakestoreapi.com/products');
        console.log(res);

        let productList = await res.json();
        console.log(productList);
        updateProductList(productList);
    }

    if(productList.length === 0){
        return <h1>fetching data...</h1>
    }


    return(
        <>
            <div className="product-list">
            {   
                productList.map((p)=>  <ProductCard {...p} key = {p.id}></ProductCard>) 
            }
            </div>
        </>
    )
}

export default App;


// ___________________________________________________________________________________

// .product-list {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin: 20px;
// }

// .card {
//   width: 350px;
//   padding: 16px;
//   border-radius: 5px;
//   box-shadow: 5px 5px gray;
// } 

// .card img{
//   width: 100%;
//   height: 250px;
//   object-fit: contain;
// }


// --------------------------------------------------------------------------------------




// function ProductCard({title, price, image, category}){

//     return (
//         <div className="card">
//             <img src={image} alt = {title}/>
//             <h2>{title}</h2>
//             <p> $ {price}</p>
//             <p>{category}</p>
//         </div>
//     )
// }

// export default ProductCard;