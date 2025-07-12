import { useEffect,  useState } from "react";

function useApiFetching(url){

    let [data, updateData] = useState(null);

    useEffect(()=>{  
        fetchAPI()
    }, [])

    async function fetchAPI(){
            let apiData = await fetch(url);
            let data = await apiData.json();
            updateData(data);
    }


    return data;
}

export default useApiFetching;


// ______________________________________________________________________

import useApiFetching from './apiFetching';
import './App.css'

function App(){

  let product = useApiFetching('https://fakestoreapi.com/products');
  
  if (!product) return <p>Loading...</p>;
  console.log(product)

  return(
    <>
      
      {product.map((p)=>(
        <div>
          <p>Product ID : {p.id}</p>
          <p>Product name : {p.title}</p>
          <p>Product Price : {p.price}</p>
        </div>
      ))
      }
    </>
  )
}

export default App;


