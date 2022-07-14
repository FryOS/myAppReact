import React, {useState} from "react";

const Counter = (props) => {
    
    const {value} = props;
    
    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };   
    
    const getBageClasses = () => {
        let classes = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    // const handleIncrement = () => {
    //  console.log("inc");
    // };

    // const handleDecrement = () => {
    //  console.log("dec");
    // };
    

    return (
        <div>  
            <span>{props.name}</span>          
            <span className={getBageClasses()}>{formatValue()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={()=>(props.onIncrement(props.id))}>прибавить</button>
            <button className="btn btn-primary btn-sm m-2" onClick={()=>(props.onDecrement(props.id))}>убавить</button>
            <div className="btn btn-danger btn-sm m-2" onClick={()=>(props.onDelete(props.id)) }>Удалить</div>
        </div>
    )
}

export default Counter;