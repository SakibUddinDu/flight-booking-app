import React from 'react';
import SingleBooking from './SingleBooking';

const Bookings = () => {
 
    return (
        <div className="table-container">
        <table className="booking-table">
          <thead className="bg-gray-100/50">
            <tr className="text-black text-left">
              <th>Destination From</th>
              <th>Destination To</th>
              <th className="text-center">Journey Date</th>
              <th className="text-center">Guests</th>
              <th className="text-center">Class</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
         <SingleBooking></SingleBooking>
        </table>
      </div>
    );
};

export default Bookings;