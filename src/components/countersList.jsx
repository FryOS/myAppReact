import React, {useState} from "react";
import Counter from "./counter"


const CountersList = () => {
    const initialState = [
        {id:0, value:0, name:"Ложка"},
        {id:1, value:4, name:"Вилка"}, 
        {id:2, value:0, name:"Стопка"},
        {id:3, value:0, name:"Грудка"},
        {id:4, value:0, name:"Ручка"}];

    const [counters, setCounters] = useState(initialState);
    
    const handleDelete = (id) => {
        console.log("delete");
        const newCounters = counters.filter(c => c.id !== id);
        setCounters(newCounters);
    }

    const handleReset = (id) => {
        console.log("reset");  
        setCounters(initialState);      
    }

    const handleIncrement = (id) => {

        setCounters(prev => {
            return [
                ...prev
            ]
        })
        const idCount = counters.filter(c => c.id === id);
        idCount.map(c => c.value += 1);
        
    };
   
       const handleDecrement = (id) => {

        setCounters(prev => {
            return [
                ...prev
            ]
        })
        const idCount = counters.filter(c => c.id === id);
        idCount.map(c => c.value -= 1);
    };

    return (
    <>
        {counters.map(count => 
            (<Counter 
                key={count.id} 
                {...count}
                onDelete={handleDelete}
                onIncrement = {handleIncrement}
                onDecrement = {handleDecrement}
                />
        ))}
        <div className="btn btn-danger btn-sm m-2" onClick={handleReset}>Сброс</div>
       
    </>)
};

export default CountersList;