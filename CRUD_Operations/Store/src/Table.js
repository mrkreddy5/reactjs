import { useState } from "react";

function ProductList({products, deleteProduct, editProduct}){
    
    return(
        <div>
            <table className="table m-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((data)=>(
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.category}</td>

                                <td><button className="btn btn-secondary" onClick={()=>editProduct(data)}>Edit</button></td>
                                <td><button className="btn btn-danger" onClick={() => deleteProduct(data.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;