import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Bookkeeper</h1>
      <nav>
        <Link className='link' to='invoices'>Invoices</Link> 
        <Link className='link' to='expenses'>Expenses</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
