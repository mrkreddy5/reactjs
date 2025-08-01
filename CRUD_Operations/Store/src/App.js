import React from "react";
import { useEffect, useState } from "react";

import Form from "./Form";
import ProductList from "./Table";
import { getData, deleteData, putData , postData} from "./Api";

function App(){

  const [products, setProducts] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [initialForm, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });
  const [edit, setEdit] = useState(false);

  async function getProductsData(){
    let res = await getData();
    setProducts(res.data);
  }

  async function deleteProduct(id){
    await deleteData(Number(id));
    await getProductsData();
  }

  async function addProduct(product){

    const res = await getData();
    const currentProducts = res.data;
    const maxId = Math.max(...currentProducts.map(p => Number(p.id)),0);

    let data = {
      id : String(maxId+1),
      name : product.name,
      price : product.price,
      category : product.category
    }

    if(edit) await putData(product.id,data)
    else await postData(data);
    await getProductsData();
    closeForm();
  }

  function editProduct(data){
    setForm(data);
    setFormOpen(true);
    setEdit(true);
  }

  function showForm() {
    setFormOpen(true);
    setForm({
      name: "",
      price: "",
      category: "",
    });
    setEdit(false);
  }

  function closeForm(){
    setFormOpen(false);
  }


  useEffect(()=>{
    getProductsData()
  },[])

  return(
    <div>
      <h2 className="text-primary">CRUD Operations</h2>
      <button className="btn btn-primary" onClick={()=>showForm()}>Add Product</button>

      <ProductList products={products} deleteProduct ={deleteProduct} editProduct={editProduct}></ProductList>
      {formOpen && (<Form className='form' data={initialForm} close={closeForm} add={addProduct}></Form> )}
    </div>
  )
}

export default App;