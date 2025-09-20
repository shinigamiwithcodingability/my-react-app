 import {createContext} from 'react';

export interface IDataSchema {
    dataSource?:string[];
    selectedData?:(value: unknown) => void;
}

export interface IDataSchemaContext {
    dataSource?:Array<any>;
     propertyName?:string;
    selectedData?:(value: any) => void;
}

// Define a context for the IDataSchemaContext
// Define the default values for the context 
const DataContext = createContext<IDataSchemaContext>({
    dataSource:[],
    propertyName:"",
    selectedData: (value: any) => {}
});

export default DataContext;