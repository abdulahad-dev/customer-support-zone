import { Suspense } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import CustomerTickets from './components/CustomerTickets/CustomerTickets';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const fetchCustomerTickets = async () => {
  const res = await fetch('/public/customerTickets.json');
  return res.json();
};

function App() {
  const customerTicketsPromise = fetchCustomerTickets();

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-200">
        <Banner></Banner>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <CustomerTickets
            customerTicketsPromise={customerTicketsPromise}
          ></CustomerTickets>
        </Suspense>
      </div>
      <div className="bg-neutral text-neutral-content">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
