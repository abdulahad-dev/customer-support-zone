import { use } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const CustomerTickets = ({
  customerTicketsPromise,
  handleSelectTicket,
  selectedTickets,
  resolvedTickets,
  handleCompleteTicket,
}) => {
  const customerTicketData = use(customerTicketsPromise);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto pb-18 mt-10 px-4 lg:px-0">
      {/* Customer Tickets */}
      <div className="lg:col-span-3">
        <h2 className="text-2xl font-bold mb-4">Customer Tickets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {customerTicketData.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => handleSelectTicket(ticket)}
              className="card w-full bg-base-100 shadow-sm cursor-pointer"
            >
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">{ticket.title}</h2>
                  <span
                    className={`flex items-center gap-2 ${
                      ticket.status === 'Open'
                        ? 'bg-green-200'
                        : 'bg-yellow-200'
                    } px-2 py-1 rounded-full`}
                  >
                    <span
                      className={`w-3 h-3 ${
                        ticket.status === 'Open'
                          ? 'bg-green-600'
                          : 'bg-yellow-600'
                      } rounded-full`}
                    ></span>
                    <span
                      className={`${
                        ticket.status === 'Open'
                          ? 'text-green-700'
                          : 'text-yellow-700'
                      } font-medium`}
                    >
                      {ticket.status}
                    </span>
                  </span>
                </div>
                <p className="line-clamp-2 text-gray-500 font-medium mt-2">
                  {ticket.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-between mt-3 text-gray-500 text-sm font-medium">
                  <span>#{ticket.id}</span>
                  <span>{ticket.priority}</span>
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-1" /> {ticket.createdAt}
                  </span>
                  <span>{ticket.customer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task Status & Resolved */}
      <div>
        {/* Task Status */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Task Status</h2>
          <p className="text-gray-600 pt-2 text-sm">
            Select a ticket to add to Task Status
          </p>
          <div className="bg-base-100 shadow-sm p-4 rounded mt-2">
            {selectedTickets.length === 0 && (
              <p className="text-gray-400 text-sm">No ticket selected</p>
            )}
            {selectedTickets.map((ticket) => (
              <div key={ticket.id} className="pt-2 pb-4">
                <h2 className="text-sm font-bold">{ticket.title}</h2>
                <button
                  type="button"
                  className="btn btn-active btn-success w-full text-white font-bold tracking-wide mt-1"
                  onClick={() => handleCompleteTicket(ticket)}
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Resolved Task */}
        <div>
          <h2 className="text-2xl font-bold">Resolved Task</h2>
          <p className="text-gray-600 pt-2 text-sm">
            {resolvedTickets.length === 0 ? 'No resolved task yet.' : ''}
          </p>
          <div className="mt-2 space-y-3">
            {resolvedTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-blue-100 shadow-md rounded-lg p-4"
              >
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-sm">{ticket.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
