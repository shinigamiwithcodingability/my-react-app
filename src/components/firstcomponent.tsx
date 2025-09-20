import React from 'react';  
import OtherComponent from './othercomponent.tsx';
import SelectComponent from './reusablecomponents/selectcomponent.tsx';
interface IProps{
    data?: string;
    emitValue?: (value: string) => void;
}
const FirstComponent = (props:IProps) =>{
    const showMessage = () => {
        alert("Hello from First Component");
    }
    const dataReceiver = (value: string) => {
        alert(`Received from New Component: ${value}`);
    }
    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
    return(
        <div>
            <h1>First Component using Vite Module Bundler</h1>
            {
                props.data
            }
            <OtherComponent />
            <br />
            <SelectComponent dataSource={categories}></SelectComponent>
            <br />
            <NewComponent data='I am coming from first component' emitValue={dataReceiver} />
            <br />
            <button onClick={showMessage}>Show Message</button>
        </div>
    );
}

//Create another component

const NewComponent = (props: IProps) =>(
    <div>
        <h2>New Component using Vite Module Bundler</h2>
        {
            props.data
        }
        <button onClick={() => props.emitValue?.('I am from New Component')}>Emit data from New component</button>
    </div>
);


export default FirstComponent;