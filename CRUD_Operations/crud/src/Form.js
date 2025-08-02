import { useState } from "react";

function Form(props){

    let [product, setProduct] = useState(props.data);
    let [submitted, setSubmitted] = useState(false);

    let changeFormData = (event) =>{
        let {name,value} = event.target;
        setProduct({...product,[name]:value});
    }

    return(
        <div className="form-overlay">
            <form>
                <div className="form-group">
                    <label className="">Name:</label>
                    <input type='text' className="form-control mt-2" name="name" value={product.name}
                        placeholder="Enter Product Name" onChange = {changeFormData} ></input>

                    { submitted && product.name=== "" && <span className="text-danger">Enter Product Name</span>}

                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input type='number' className="form-control mt-2" name="price" value={product.price}
                        placeholder="Enter Product Price" onChange = {changeFormData}></input> 

                    { submitted && product.price=== "" && <span className="text-danger">Enter Product Price</span>}    
                </div>

                <div className="form-group">
                    <label>Category:</label>
                    <select className="form-control" name="category" value={product.category} onChange = {changeFormData}>
                        <option value="-1"></option>
                        <option value="Mobiles">Mobiles</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Laptops">Laptops</option>
                        <option value="Kitchen-Items">Kitchen-Items</option>
                        <option value="TV's">TV</option>
                    </select>

                    { submitted && product.category=== "" && <span className="text-danger">Select Product Category</span>}
                </div>

                <button className="btn btn-danger float-end m-1" onClick={(e)=>{
                    e.preventDefault();
                    props.close();
                }}>Close</button>

                <button className="btn btn-primary float-end m-1" onClick={(e)=>{
                    setSubmitted(true);
                    e.preventDefault();

                    if(!!product.name && !!product.price && !!product.category) {
                        props.add(product);
                    }
                }}>Add</button>
            </form>
        </div>

        
    )
}

export default Form;