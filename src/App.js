import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const nayoks = [' rajjak', 'jasim', 'salman', 'sakib', 'bappi']

  const products = [

    { name: 'Photoshop', price: '$90.99' },
    { name: 'illustrator', price: '$60.99' },
    { name: 'PDf', price: '$60.99' },
    { name: 'Primiere Ei ', price: '$60.99' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
       
        {
          products.map(product=> <li>{product.name}</li>)
        }
        </ul>

       {
          products.map(product=> <Product product={product}></Product>)
       }
      
    
        {/* <Person Name=" munna" Prop=" i am a astudent " ></Person>
       <Person Name=" jubayer" Prop=" i am a astudent " ></Person>
       <Person Name=" jamil" Prop=" i am a astudent " ></Person>
  */}

      </header>
    </div>
  );
}
function Counter (){
  const[count, setCount]= useState(10);
  const handleIncrease = () => setCount(count + 1);
  

  return(
    <div>
      <h1>Count: {count}</h1>
      <button  onClick={() => setCount(count - 1) }>Decrease</button>
      <button onClick={() => setCount(count + 1) }>Increase</button>
    </div>
  )
}

function Users(){

  const[users,setUsers] = useState([]);
  useEffect(()=>{
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data  => setUsers(data));
  },[]) 
  
  return(
    <div>
      <h3>Dynamic Users:{users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '2px solid',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '300px',
    float: 'left',
    color: 'black'
  }
  const { name, price } = props.product;
  console.log(name, price);


  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price} </h3>
      <button>Buy now</button>
    </div>
  )
}


// function Person(props) {
//  return (
//    <div style={{border:'2px solid',width:'500px', margin:' 10px', backgroundColor:'black' }}>
//      <h3>My Name:{props.Name} </h3>
//      <p>My Profassion:{props.Prop}</p>
//    </div>
//  )
// }

export default App;
