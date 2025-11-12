import './App.css';
import reactLogo from './assets/react.svg'
import Counter from './component/Counter';
import Todos from './component/Todos';
import ShowHideMessage from './component/ShowHideMessage'
import ColorPicker from './component/ColorPicker';
import ContentSwitcher from './component/ContentSwitcher';
import StatusShowHide from './component/StatusShowHide';
import Toggler from './component/Toggler';

// You can modify these variables
const item = { name: "Smartphone", price: 799 };
const quantity = 2;
const discount = 0.1; // 10% discount
const formattedName = item.name.toUpperCase();
 
const warningStyle = {
  color: 'red',
  backgroundColor: '#ffebee', // camelCase for background-color
  padding: '10px',           // String value for padding
  border: '1px solid red',
  fontSize: '16px'           // Explicitly a string
};
 
function calculateTotal(price:number, quantity:number, discount:number) {
  // Calculate the discounted price per item
  const discountedPrice = price * (1 - discount);
  // Calculate the total cost
  return discountedPrice * quantity;
}
function App() {
  return (
    <main className="card">
      <h1>Hello React!</h1>

      <img src={reactLogo} alt="logo" />

      <p style={warningStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rerum mollitia doloribus ipsam maiores nulla eligendi, reprehenderit, soluta ullam voluptatum, quaerat iusto eos ipsa. Magnam natus temporibus totam repellendus et?</p>

      <form>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="" />
      </form>
      <Counter/>
      <hr />
      <Todos/>

     <MyButton/>
      <div>
        <h1>Product Details</h1>
        <p>Item: {formattedName}</p> {/* Use the formattedName variable */}
        <p>Price per item: ${item.price}</p>
        <p>Quantity: {quantity}</p>
        {/* Embed an expression to calculate and display the total cost using the function */}
        <p>Total Cost (after {discount * 100}% discount): ${calculateTotal(item.price, quantity, discount)}</p>
        {/* Use a ternary operator: Display "In Stock" if quantity > 0, otherwise "Out of Stock" */}
        <p>Status: {quantity > 0 ? 'In Stock' : 'Out of Stock'}</p>
      </div>
      <p>Toggle Visibility </p>
      <ShowHideMessage/>
      <ColorPicker/>
      <Toggler/>
      <ContentSwitcher/>
      <StatusShowHide/>
      
    </main>
  )
}
export default App;

function MyButton(){

  const handleClick = () => console.log('clicked')
  return (
    <button onClick={handleClick}>
        Click me
    </button>
  )
}
function Snippet(){
  return (
    <>
      <div className="profile">
        <img src="avatar.png" alt="User Avatar"/>
        <h2>User Profile</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" readOnly/>
        <br/>
        <p>Bio: A short bio goes here.</p>
      </div>
      <button className="btn primary">Save Changes</button>
    </>
  )
}


function Card() {
  return (
    <>
      <h2>Card</h2>
      <p>This is a card component.</p>
    </>
  );
}

function SignInForm() {
  return (
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Sign In</button>
    </form>
  );
}

function Title() {
  return <h3>Title</h3>;
}


function SearchBar() {
  return (
    <>
      <input type="text" placeholder="search..."/>
      <button>Search</button>
    </>
  )
}