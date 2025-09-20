import React, {useState, useEffect, use} from 'react';
import { ProductInfo, Products} from '../dataschemas/productinfo';
import DataContext from '../dataschemas/propschemas';
import SelectContextComponent from '../reusablecomponents/selectcontextcomponent';
import { ProductHttpService } from '../../services/producthttpseriveproductinfo';
// import SelectComponent from '../reusablecomponents/selectcomponent';
import { useNavigate,useParams } from 'react-router-dom';
import { string } from 'yup';
const ProductEditComponent=()=>{
    // Define state for the ProductInfo
    const [product, setProduct] = useState<ProductInfo>(new ProductInfo(0,'','','','',0));
    const [products, setProducts] = useState<Array<ProductInfo>>(Products);
    // const [columns, setColumns] = useState<string[]>(Object.keys(product));

    // Define a local variable (this is not state property)

    const categories = ['Electronics', 'Electrical', 'Books', 'Fashion'];
    // Define a Service Object
    const serv: ProductHttpService = new ProductHttpService();
    
    const {id} = useParams<{id:string}>();
    const navigate = useNavigate();
    useEffect(()=>{
        serv.getOneProduct(id!).then((data:ProductInfo)=>{
            setProducts(data);
        }).catch((error:Error)=>{
            console.error("Error fetching products:", error);
        });
    },[]);

    const save=()=>{
        serv.putProduct(product).then((data)=>{
            setProducts([...products, data]);
            navigate('/');
            // navigate(`/edit/${data.ProductId}`);
        }).catch((error:Error)=>{
            console.error("Error saving product:", error);
        });
    }
    const clear=()=>{
        // Reset the ProductInfo object
        setProduct(new ProductInfo(0,'','','','',0));
    }
    // const onSelectedRecord=(prod:ProductInfo)=>{
    //     setProduct(prod);
    // }

   

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
             
        </div>
    );


};


export default ProductEditComponent;
