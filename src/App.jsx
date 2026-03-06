import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import CustomerTickets from './components/CustomerTickets/CustomerTickets';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-200">
        <Banner></Banner>
        <CustomerTickets></CustomerTickets>
      </div>
      <div className="bg-neutral text-neutral-content">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
