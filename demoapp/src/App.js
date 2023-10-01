import logo from './logo.svg';
import './App.css';
import'./components/Items';
import Items from './components/Items';
import ItemDate from './components/ItemDate';
import NewProduct from './components/NewProduct';

function App() {
  const resopnse=[{
    itemName:"Nirma",
    ItemDtae:"20",
    ItemMonth:"Dec",
    itemYear:"2001"
  },
  {
    itemName:"surf",
    ItemDtae:"22",
    ItemMonth:"jun",
    itemYear:"2000"
  }
];

  function b(data){
    console.log("you are in app");
    console.log(data);
  }

  return (
    <div>
      <NewProduct ona = {b}></NewProduct>

      <Items name="nirma"></Items>
      <ItemDate date="20" month="june" year="2001" ></ItemDate>

      <Items name="surf"></Items>
      <ItemDate date="20" month="july" year="1999"></ItemDate>

      <Items name="ghadi">
        {/* to print this typen props.children in Items.js */}
        hello this is my third item
      </Items>
      <ItemDate date="25" month="dec" year="2021"></ItemDate>

      <Items name={resopnse[0].itemName}></Items>
      <ItemDate date={resopnse[0].ItemDtae} month={resopnse[0].ItemMonth} year={resopnse[0].itemYear}></ItemDate>

      <Items name={resopnse[1].itemName}></Items>
      <ItemDate date={resopnse[0].ItemDtae} month={resopnse[0].ItemMonth} year={resopnse[0].itemYear}></ItemDate>
       
      <div className="App">
      hello jee
     </div>
    </div>
    
  );
}

export default App;
