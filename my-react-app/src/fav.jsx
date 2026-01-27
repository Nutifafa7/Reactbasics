import React, {useState} from 'react';
function Fav(){
    const [car,setCar]=useState({year:2020,model:'Toyota',color:'Red'});
    function handleYearChange(event){
        setCar(c =>({...c,year:event.target.value}));
    }
    function handleModelChange(event){
        setCar(c =>({...c,model:event.target.value}));
    }
    function handleColorChange(event){
        setCar(c =>({...c,color:event.target.value}));
    }
    return(
        <div className="car-container">
            <p>My Favorite Car : Model: {car.model} Year: {car.year} Color: {car.color}</p>
            <input type="number" value={car.year} onChange={handleYearChange} />
            <input type="text" value={car.model} onChange={handleModelChange} />
            <input type="text" value={car.color} onChange={handleColorChange} />
        </div>
    );
}
export default Fav;