import React, {useState, useEffect} from 'react';
import { ProductInfo, Products} from '../dataschemas/productinfo';
import DataContext from '../dataschemas/propschemas';
import SelectContextComponent from '../reusablecomponents/selectcontextcomponent';
import { ProductHttpService } from '../../services/producthttpseriveproductinfo';
// import SelectComponent from '../reusablecomponents/selectcomponent';
import { useNavigate } from 'react-router-dom';
const ProductCreateComponent=()=>{
    // Define state for the ProductInfo
    const [product, setProduct] = useState<ProductInfo>(new ProductInfo(0,'','','','',0));
    const [products, setProducts] = useState<Array<ProductInfo>>(Products);
    const [columns, setColumns] = useState<string[]>(Object.keys(product));

    // Define a local variable (this is not state property)

    const categories = ['Electronics', 'Electrical', 'Books', 'Fashion'];
    // Define a Service Object
    const serv: ProductHttpService = new ProductHttpService();
    const navigate = useNavigate();
    useEffect(()=>{
        serv.getProducts().then((data:Array<ProductInfo>)=>{
            setProducts(data);
        }).catch((error:Error)=>{
            console.error("Error fetching products:", error);
        });
    },[]);

    const save=()=>{
        serv.postProduct(product).then((data)=>{
            setProducts([...products, data]);
            navigate('/');
        }).catch((error:Error)=>{
            console.error("Error saving product:", error);
        });
    }
    const clear=()=>{
        // Reset the ProductInfo object
        setProduct(new ProductInfo(0,'','','','',0));
    }
    const onSelectedRecord=(prod:ProductInfo)=>{
        setProduct(prod);
    }

   

    return (
        <div className='container'>
            <h2>The Product Http Component</h2>
            {/* <form> */}
                <div className='form-group'>
                    <label htmlFor="ProductRecordId">Product Record Id:</label>
                    <input type="number" className='form-control'
                      placeholder='Enter Product record Id'
                      value={product.ProductRecordId}
                      onChange={
                        (evt)=>setProduct({...product, ProductRecordId:parseInt(evt.target.value)})
                      }
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="ProductId">Product Id:</label>
                    <input type="text" className='form-control'
                      placeholder='Enter Product = Id'
                      value={product.ProductId}
                       onChange={
                        (evt)=>setProduct({...product, ProductId:evt.target.value})
                      }
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="ProductName">Product Name:</label>
                    <input type="text" className='form-control'
                      placeholder='Enter Product Name'
                      value={product.ProductName}
                       onChange={
                        (evt)=>setProduct({...product, ProductName:evt.target.value})
                      }
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="CategoryName">Category Name:</label>
                    <DataContext.Provider value={{dataSource:categories, propertyName:product.CategoryName, selectedData:(value)=>setProduct({...product, CategoryName:value})}}>
                        <SelectContextComponent></SelectContextComponent>
                    </DataContext.Provider>
                </div>
                <div className='form-group'>
                    <label htmlFor="Description">Product Name:</label>
                    <input type="text" className='form-control'
                      placeholder='Enter Description'
                      value={product.Description}
                       onChange={
                        (evt)=>setProduct({...product, Description:evt.target.value})
                      }
                    />
                </div>
                 <div className='form-group'>
                    <label htmlFor="UnitPrice">Unit Price:</label>
                    <input type="number" className='form-control'
                      placeholder='Enter Unit Price'
                      value={product.UnitPrice}
                      onChange={
                        (evt)=>setProduct({...product, UnitPrice:parseInt(evt.target.value)})
                      }
                    />
                </div>
                <div className='btn-group-lg'>
                    <button className='btn btn-success' onClick={save}>Add</button>
                    <button className='btn btn-warning' onClick={clear}>Clear</button>
                </div>
            {/* </form> */}
            <br/>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        {
                            columns.map((col,idx)=>(
                                <th key={idx}>{col}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((prod,index)=>(
                            <tr key={index} onClick={()=>onSelectedRecord(prod)}>
                                {
                                    columns.map((col,idx)=>(
                                        <td key={idx}>{prod[col]}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
             
        </div>
    );


};



export default ProductCreateComponent;