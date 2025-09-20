import React, { useEffect } from 'react';
import { ProductInfo } from '../../dataschemas/productinfo';
import { selectProductSuccess } from '../actions';
import { useDispatch } from 'react-redux';

type productListprops = {
    products: Array<ProductInfo>;
    getData: Function;
}
const ProductListReduxComponent = (props: productListprops) => {
    //make use of useEffect hook to receive data from parent

    const dispatch = useDispatch();
    useEffect(() => {
        props.getData({ ...props.products });
    }, []);

    const onSelectedRecord = (prod : ProductInfo) =>{
        console.log(`Selected Product: ${JSON.stringify(prod)}`);
        dispatch(selectProductSuccess(prod));
    }

    return (
        <div className='container'>
            <h2>The Redux Product List</h2>

            <br />
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Product Record Id</th>
                        <th>Product Id</th>
                        <th>Product Name </th>
                        <th>Category Name </th>
                        <th>Description</th>
                        <th>Unit Price</th>
                        <th>Action</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        Array.isArray(props.products) &&
                        props.products.map((prod: ProductInfo, index: number) => (
                            <tr key={index}>
                                <td>{prod.ProductRecordId}</td>
                                <td>{prod.ProductId}</td>
                                <td>{prod.ProductName}</td>
                                <td>{prod.CategoryName}</td>
                                <td>{prod.Description}</td>
                                <td>{prod.UnitPrice}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={() => onSelectedRecord(prod)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );


};





export default ProductListReduxComponent;