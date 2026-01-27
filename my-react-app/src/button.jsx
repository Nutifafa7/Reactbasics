function Button() {
  const handleClick=(name)=> name.target.textContent="Nice to meet You";
  return (
    <button onClick={(name)=> handleClick(name)}className="button">Click Me!</button>
    
  );
}
export default Button;