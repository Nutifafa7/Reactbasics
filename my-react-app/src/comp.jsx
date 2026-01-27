import React, {useState} from 'react';
function Comp(){
    const [name,setName]=useState("Guest");
    const [quantity,setQuantity]=useState(0);
    const [comment,setComment]=useState("");
    const [payment,setPayment]=useState();
    const [like,setLike]=useState(null);   
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    } 
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleLikeChange(event){
        setLike(event.target.value==="yes");
    }
    return(
        <div className="comp-container">
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter your comment about the website"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="PayPal">PayPal</option>
            </select>
            <p>Payment Method: {payment}</p>
            <label>
        <input
          type="radio"
          name="like"
          value="yes"
          checked={like === true}
          onChange={handleLikeChange}
        />
        Liked
      </label>

      <label>
        <input
          type="radio"
          name="like"
          value="no"
          checked={like === false}
          onChange={handleLikeChange}
        />
        Did not like this website
      </label>

      <p>Liked: {like === null ? "Not selected" : like ? "Yes" : "No"}</p>
        </div>
    )
}
export default Comp
