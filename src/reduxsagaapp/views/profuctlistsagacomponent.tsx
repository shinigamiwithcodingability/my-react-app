import React, {useState, useEffect, use} from 'react';
import { ProductInfo,Products} from '../../components/dataschemas/productinfo';
// import DataContext from '../dataschemas/propschemas';
// import SelectContextComponent from '../reusablecomponents/selectcontextcomponent';
// import { ProductHttpService } from '../../services/producthttpseriveproductinfo';
// import { useNavigate } from 'react-router-dom'; 

// import SelectComponent from '../reusablecomponents/selectcomponent';

// Define the type for the props that will be passed to the component
type ProductListProps = {
    products: Array<ProductInfo>;
    getData: Function;
}
const ProductListReduxSagaComponent=(props:ProductListProps)=>{
    // make use of useState to receive data from the parent component


   useEffect(() => {
    props.getData({...props.products});
   },[])
    const onSelectedRecord=(prod:ProductInfo)=>{
    }

   

    return (
        <div className='container'>
            <h2>The Product Http Component</h2>
        
            <br/>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Product Record Id</th>
                        <th>Product Id</th>
                        <th>Product Name </th>
                        <th>Category Name </th>
                        <th>Description</th>
                        <th>Unit Price</th>
                    </tr>                   
                    
                </thead>
                <tbody>
                    {
                        Array.isArray(props.products) &&
                        props.products.map((prod : ProductInfo,index:number) => (
                            <tr key={index}>
                                <td>{prod.ProductRecordId}</td>
                                <td>{prod.ProductId}</td>
                                <td>{prod.ProductName}</td>
                                <td>{prod.CategoryName}</td>
                                <td>{prod.Description}</td>
                                <td>{prod.UnitPrice}</td>
                            </tr>
                        ))                    
                 }
                </tbody>
            </table>
             
        </div>
    );


};





export default ProductListReduxSagaComponent;