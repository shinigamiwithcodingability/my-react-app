import React, {useState} from "react";
import { ProductInfo, Products } from '../../components/dataschemas/productinfo';
import DataContext from "../dataschemas/propschemas";
import SelectContextComponent from "../reusablecomponents/selectcontextcomponent";

const ProductInfoStateComponent  = () => {
    const  [product, setProduct] = useState<ProductInfo>(new ProductInfo(0, '', '', '', '', 0));

    const [products, setProducts] = useState<Array<ProductInfo>>(Products);
    const [columns, setColumns] = useState<string[]>(Object.keys(new ProductInfo(0, '', '', '', '', 0)));

    const categories = ['Electronics', 'Electrical', 'Books', 'Fashion'];

    const save = () => {
        setProducts([...products, product]);

    }
    const clear = () => {
        setProduct(new ProductInfo(0, '', '', '', '', 0));
    }

    const onSelectRow = (prod:ProductInfo) =>{
        setProduct(prod)
    }
    return(
        <div className="container">
            {/* <form action=""> */}
                <div className="form-group">
                    <label htmlFor="ProductRecordId">Product Record ID</label>
                    <input type="number"  className="form-control" placeholder="Enter Product Record Id" value={product.ProductRecordId}
                    onChange={(evt) => setProduct({...product, ProductRecordId: parseInt(evt.target.value)})}
                      />
                </div>
                <div className="form-group">
                    <label htmlFor="ProductId">Product ID</label>
                    <input type="text"  className="form-control" placeholder="Enter Product Id" value={product.ProductId}
                      onChange={(evt) => setProduct({...product, ProductId: evt.target.value})}
                      />
                </div>
                <div className="form-group">
                    <label htmlFor="ProductName">Product Name</label>
                    <input type="text"  className="form-control" placeholder="Enter Product Name" value={product.ProductName} 
                    onChange={(evt) => setProduct({...product, ProductName: evt.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="CategoryName">Category Name : </label>
                    <DataContext.Provider value={{dataSource: categories, selectedData: (value) => setProduct({...product, CategoryName: value})}}>
                        <SelectContextComponent />
                    </DataContext.Provider>
                    {/* <select name="CategoryName" value={product.CategoryName}> */}

                        {/* <option>Select Category</option>
                        {
                            categories.map((category,index) => (
                                <option key={index} value={category}>{category}</option>
                            ))
                        } */}
                    {/* </select> */}
                </div>
                <div className="form-group">
                    <label htmlFor="Description">Description</label>
                    <input type="text"  className="form-control" placeholder="Enter Description" value={product.Description}
                    onChange={(evt) => setProduct({...product, Description: evt.target.value})}  />
                </div>
                <div className="form-group">
                    <label htmlFor="UnitPrice">Unit Price</label>
                    <input type="number"  className="form-control" placeholder="Enter Unit Price" value={product.UnitPrice}
                    onChange={(evt) => setProduct({...product, UnitPrice: parseFloat(evt.target.value)})}  />
                </div>
                <div className="btn-group-lg">
                    <button className="btn btn-primary" onClick={save} >Add Product</button>
                    <button className="btn btn-danger" onClick={clear} >Reset</button>
                </div>
            {/* </form> */}
            <br />
            <table className="table table-bordered table-scripted">
                <thead>
                    <tr>
                        {
                            columns.map((col, index) => (
                                <th key={index}>{col}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((prod, ind) => (
                        <tr key={ind} onClick={() => onSelectRow(prod)} style={{cursor: 'pointer'}}>
                            {
                                columns.map((col, index) => (
                                    <td key={index}>{prod[col]}</td>
                                ))
                            }
                        </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}
     


export default ProductInfoStateComponent;