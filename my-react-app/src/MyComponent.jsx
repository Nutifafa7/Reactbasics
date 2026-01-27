import React,{useState} from 'react';

function MyComponent(){
    const [name,setName]=useState("Guest");
    const [age,setAge]=useState(19);
    const updateName=() =>{
        setName("srinithi");
    }
    const incrementAge=()=>{
        setAge(age+1);
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName} className="button">Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge} className="button">Increment age</button>

        </div>
    )
}
export default MyComponent