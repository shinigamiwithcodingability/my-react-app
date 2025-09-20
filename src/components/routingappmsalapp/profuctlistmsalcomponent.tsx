import React, {useState, useEffect} from 'react';
import { ProductInfo, Products} from '../dataschemas/productinfo';
import DataContext from '../dataschemas/propschemas';
import SelectContextComponent from '../reusablecomponents/selectcontextcomponent';
import { ProductHttpService } from '../../services/producthttpseriveproductinfo';
import { useNavigate } from 'react-router-dom'; 

// import SelectComponent from '../reusablecomponents/selectcomponent';
const ProductListMsalComponent=()=>{
    // Define state for the ProductInfo
    const [product, setProduct] = useState<ProductInfo>(new ProductInfo(0,'','','','',0));
    const [products, setProducts] = useState<Array<ProductInfo>>(Products);
    const [columns, setColumns] = useState<string[]>(Object.keys(product));

    // Define a local variable (this is not state property)

    const categories = ['Electronics', 'Electrical', 'Books', 'Fashion'];

    const navigate = useNavigate();
    // Define a Service Object
    const serv: ProductHttpService = new ProductHttpService();
    
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

   const navigateToEdit=(id : string )=>{
       navigate(`/edit/${id}`);
   }

    return (
        <div className='container'>
            <h2>The Product Http Component</h2>
        
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
                    <th>
                        Action
                    </th>
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
                                <td>
                                    <button className='btn btn-click' onClick={()=>navigateToEdit(prod.ProductId)}>Edit</button>
                                </td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
             
        </div>
    );


};





export default ProductListComponent;