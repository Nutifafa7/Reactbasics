import Footer from './footer.jsx';
import Header from './header.jsx';
import Card from './card.jsx';
import Button from './button.jsx';
import Student from './student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './list.jsx';
import Mycomponent from './MyComponent.jsx';
import Counter from './Counter.jsx'; 
import Comp from './comp.jsx'; 
import ColorPicker from './ColorPicker.jsx';
import Fav from './fav.jsx';
import Certificate from './Certificate.jsx';  
import StopWatch from './StopWatch.jsx';
function App() {
  const fruits = [{id:1,name:'Apple',calories:95},
        {id:2,name: 'Banana',calories:45},
        {id:3,name:'Cherry',calories:105},
        {id:4,name: 'pineapple',calories:159},
        {id:5,name: 'grapes',calories:62}];

  const vegetables = [{id:1,name:'Carrot',calories:95},
        {id:2,name: 'Beetroot',calories:45},
        {id:3,name:'Potato',calories:105},
        {id:4,name: 'Tomato',calories:159},
        {id:5,name: 'Chilly',calories:62}];

  return(
    <>
    <UserGreeting isLoggedIn={true} username="srinithi"/>
    <Header />
    <Card />
    <Button />
    <Counter />
    <Comp />
    <StopWatch />
    {fruits.length>0&&<List items={fruits} category="Fruits"/>}
    {vegetables.length>0?<List items={vegetables} category="Vegetables"/>:null}
    <Student name="Sree Padhma Priya" age={20} major="Computer Science" isStudent={true} />
    <Student name=" Yuva Shree" age={22} major="Mathematics" isStudent={false} />
    <Student name=" Shifrah" age={19} major="Physics" isStudent={true} />
    <Student name=" Kavya" age={21} major="Chemistry" isStudent={false} />
    <Student />
    <Mycomponent />
    <ColorPicker />
    <Fav />
    <Certificate />
    <Footer />
    </>
  );
}

export default App
