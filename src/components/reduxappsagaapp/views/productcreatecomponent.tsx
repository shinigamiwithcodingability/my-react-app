import React, { useState } from 'react';
import { ProductInfo } from '../../dataschemas/productinfo';
import DataContext from '../../dataschemas/propschemas';
import SelectContextComponent from '../../reusablecomponents/selectcontextcomponent';
import { createProduct } from '../actions';
import {  useDispatch } from 'react-redux';


// import SelectComponent from '../reusablecomponents/selectcomponent';
const ProductCreateSagaComponent = () => {

  // Define state for the ProductInfo
  const [product, setProduct] = useState<ProductInfo>(new ProductInfo(0, '', '', '', '', 0));

  // Define a local variable (this is not state property)

  const categories = ['Electronics', 'Electrical', 'Books', 'Fashion'];
  // Define a Service Object
  // const currentProduct = useSelector((state: IState) => state.product, shallowEqual);
  // if (currentProduct != null) {
  //   console.log(`Current Product ${JSON.stringify(currentProduct)}`);
  //   setProduct(currentProduct);
  // }
  const dispatch = useDispatch();

  const save = () => {
    dispatch(createProduct(product));
  }
  const clear = () => {
    // Reset the ProductInfo object
    setProduct(new ProductInfo(0, '', '', '', '', 0));
  }




  return (
    <div className='container'>
      <h2>The Create Product Redux Component</h2>
      {/* <form> */}
      <div className='form-group'>
        <label htmlFor="ProductRecordId">Product Record Id:</label>
        <input type="number" className='form-control'
          placeholder='Enter Product record Id'
          value={product.ProductRecordId}
          onChange={
            (evt) => setProduct({ ...product, ProductRecordId: parseInt(evt.target.value) })
          }
        />
      </div>
      <div className='form-group'>
        <label htmlFor="ProductId">Product Id:</label>
        <input type="text" className='form-control'
          placeholder='Enter Product = Id'
          value={product.ProductId}
          onChange={
            (evt) => setProduct({ ...product, ProductId: evt.target.value })
          }
        />
      </div>
      <div className='form-group'>
        <label htmlFor="ProductName">Product Name:</label>
        <input type="text" className='form-control'
          placeholder='Enter Product Name'
          value={product.ProductName}
          onChange={
            (evt) => setProduct({ ...product, ProductName: evt.target.value })
          }
        />
      </div>
      <div className='form-group'>
        <label htmlFor="CategoryName">Category Name:</label>
        <DataContext.Provider value={{ dataSource: categories, propertyName: product.CategoryName, selectedData: (value) => setProduct({ ...product, CategoryName: value }) }}>
          <SelectContextComponent></SelectContextComponent>
        </DataContext.Provider>
      </div>
      <div className='form-group'>
        <label htmlFor="Description">Product Description:</label>
        <input type="text" className='form-control'
          placeholder='Enter Description'
          value={product.Description}
          onChange={
            (evt) => setProduct({ ...product, Description: evt.target.value })
          }
        />
      </div>
      <div className='form-group'>
        <label htmlFor="UnitPrice">Unit Price:</label>
        <input type="number" className='form-control'
          placeholder='Enter Unit Price'
          value={product.UnitPrice}
          onChange={
            (evt) => setProduct({ ...product, UnitPrice: parseInt(evt.target.value) })
          }
        />
      </div>
      <div className='btn-group-lg'>
        <button className='btn btn-success' onClick={save}>Add</button>

        <button className='btn btn-warning' onClick={clear}>Clear</button>

        {/* <button className='btn btn-primary' onClick={update}>Update</button> */}
      </div>
      {/* </form> */}
      <br />

    </div>
  );


};



export default ProductCreateSagaComponent;