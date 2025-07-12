import { useEffect } from 'react';
import './App.css';


function App(){

    useEffect(()=>{
      addProduct();
    }, [])

    async function addProduct(){
      let res = await fetch('https://fakestoreapi.com/products',
      {
        method: "POST",
        body : JSON.stringify(
        {
          title: 'test product',
          price: '110$',
          description : 'new brand',
          category : 'mobiles'
        })
      });

      let resp = await res.json();
      console.log(resp);

    }

    return(
    <>
       <h1>New Product</h1>
    </>
    )
}

export default App;



// --------------------------------------------------------------------------


let res = await fetch('https://fakestoreapi.com/products/7',
      {
        method: "PUT",
        body : JSON.stringify(
        {
          title: 'test product',
          price: '110$',
          description : 'new brand',
          category : 'mobiles'
        })
      });


// --------------------------------------------------------------------------


let res = await fetch('https://fakestoreapi.com/products/7',
      {
        method: "PATCH",
        body : JSON.stringify(
        {
          price: '110$'

        })
      });

// ------------------------------------------------------------------------------

let res = await fetch('https://fakestoreapi.com/products/7',
      {
        method: "DELETE"
});



// ----------------------------------------------------------------------------------------


using AXIOS library

  let res = await axios.delete('https://fakestoreapi.com/products/7',
      {
          title: 'test product',
          price: '110$',
          description : 'new brand',
          category : 'mobiles'
      });

      console.log(res);



      or 

      let res = await axios(
      {
        method: 'post',
        url : 'https://fakestoreapi.com/products',
        data : {
          title: 'test product',
          price: '110$',
          description : 'new brand',
          category : 'mobiles'
        }
      });

      console.log(res);
