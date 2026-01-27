import PropTypes from 'prop-types';
function List(props) {
    const category = props.category;
    const itemList = props.items;

    //fruits.sort((a,b) => a.name.localeComapre(b.name)); arrange in abc order
    //fruits.sort((a,b)=>b.name.localeCompare(a.name)); //arrange in z-a order
    //fruits.sort((a,b) => a.calories - b.calories); //small to big in calories
    //fruits.sort((a,b) => b.calories - a.calories); //big to small in calories
    
    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //const ListItems = lowCalFruits.map((lowCalfruit) => <li key={lowCalfruit.name}>{lowCalfruit.name}: &nbsp; <b>{lowCalfruit.calories}</b></li>);
    
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    //const ListItems = highCalFruits.map((highCalFruit) => <li key={highCalFruit.name}>{highCalFruit.name}: &nbsp;<b>{highCalFruit.calories}</b></li>);
    
    const listItems = itemList.map((item) => <li key={item.name}>{item.name}: &nbsp;<b>{item.calories}</b></li>);
    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}
List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({   
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number
        })
    ).isRequired,
    category: PropTypes.string
};
List.defaultProps = {
    items: [],
    category: 'Category'
};

export default List;