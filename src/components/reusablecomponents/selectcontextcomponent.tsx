import React, { useContext} from 'react';
import DataContext from '../dataschemas/propschemas'; 


const SelectContextComponent=()=>{
  console.log('The Select Component is Rendered');
  // Subscribe to the context
  const context = useContext(DataContext);  
  // Read the dataSource abd  selectedData from the context
  const dataSource = context.dataSource;
  const propertyName = context.propertyName;
  const selectedData = context.selectedData;

  if(dataSource === undefined || dataSource.length === 0) {
    return <div>No data available</div>;
  }
  const selection=(v:string)=>{
    
     selectedData?.(v);
  }
  return (
    <div>
        <select className="form-control" value={propertyName} onChange={(evt)=>selection(evt.target.value)}>
            <option>Select Value</option>
            {
                 dataSource.map((item,index)=>(
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))
            }
        </select>
    </div>
  );
}

export default SelectContextComponent;