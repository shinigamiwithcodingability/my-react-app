import type { IDataSchema } from "../dataschemas/propschemas";

const SelectComponent=(props:IDataSchema)=>{
  if (props.dataSource === undefined || props.dataSource.length === 0) 
    return <div>No Data Available</div>;
  return(
    <div>
      <select >
        <option value="">Select an option</option>
        {
          props.dataSource.map((item,index) => (
            <option key={index} value={item}>{item}</option>
          ))
        }
      </select>
    </div>
  );
}

export default SelectComponent;