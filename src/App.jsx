import { Suspense, useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import CustomerTickets from './components/CustomerTickets/CustomerTickets';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const fetchCustomerTickets = async () => {
  const res = await fetch('/customerTickets.json');
  return res.json();
};

function App() {
  const customerTicketsPromise = fetchCustomerTickets();

  const [selectedTickets, setSelectedTickets] = useState([]); // In-Progress
  const [resolvedTickets, setResolvedTickets] = useState([]); // Resolved

  const handleSelectTicket = (ticket) => {
    if (
      !selectedTickets.find((t) => t.id === ticket.id) &&
      !resolvedTickets.find((t) => t.id === ticket.id)
    ) {
      setSelectedTickets([...selectedTickets, ticket]);
    }
  };

  const handleCompleteTicket = (ticket) => {
    setSelectedTickets(selectedTickets.filter((t) => t.id !== ticket.id));
    setResolvedTickets([...resolvedTickets, ticket]);
  };

  const inProgressCount = selectedTickets.length;
  const resolvedCount = resolvedTickets.length;

  return (
    <>
      <Navbar />
      <div className="bg-gray-200">
        <Banner
          inProgressCount={inProgressCount}
          resolvedCount={resolvedCount}
        />
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <CustomerTickets
            customerTicketsPromise={customerTicketsPromise}
            handleSelectTicket={handleSelectTicket}
            selectedTickets={selectedTickets}
            resolvedTickets={resolvedTickets}
            handleCompleteTicket={handleCompleteTicket}
          />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default App;
