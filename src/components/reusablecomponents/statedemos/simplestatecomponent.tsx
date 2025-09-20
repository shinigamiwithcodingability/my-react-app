import React, {useState} from "react";
const SimpleStateComponent = () =>{
    const [X, setX] = useState<number>(0);
    const [Y, setY] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const add = () => {
        setResult(X + Y);
    };
    const multi = () => {
        setResult(X * Y);
    };
    const ac = () => {
        setX(0);
        setY(0);
        setResult(0);
    };
    //onChange event will dispatch the actions that results into mutating state
    return(
        <div className="container alert alert-danger">
            <div className="form-group">
                <label htmlFor="x">X</label>
                <input type="text" placeholder="Enter value for X"
                value={X}
                onChange={(evt)=> setX(parseInt(evt.target.value))}
                />
            </div>
            <div className="form-group">
                <label htmlFor="y">Y</label>
                <input type="text" placeholder="Enter value for Y"
                value={Y}
                onChange={(evt)=> setY(parseInt(evt.target.value))}
                />
            </div>
            <div className="form-group">
                <label htmlFor="result">Result</label>
                <input type="text"  placeholder="result "
                value={result}
                readOnly
                />
            </div>
            <div className="btn group-lg">
                <button className="btn btn-primary" onClick={add}>Add</button>
                <button className="btn btn-warning" onClick={multi}>Mutiply</button>
                <button className="btn btn-danger" onClick={ac}>AC</button>
            </div>
        </div>
    )
}


export default SimpleStateComponent;