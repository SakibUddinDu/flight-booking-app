import React from "react";
import { useSelector } from "react-redux";
import SingleBooking from './SingleBooking';

const Bookings = () => {
  const states = useSelector((state) => state);
  return (
    <div className="table-container">
      <table className="booking-table">
       {
        states.length > 0 &&  <thead className="bg-gray-100/50">
        <tr className="text-black text-left">
          <th>Destination From</th>
          <th>Destination To</th>
          <th className="text-center">Journey Date</th>
          <th className="text-center">Guests</th>
          <th className="text-center">Class</th>
          <th className="text-center">Delete</th>
        </tr>
      </thead>
       }
        {states.map((booking)=><SingleBooking key={booking.id} booking={booking}></SingleBooking>)}
       
      </table>
    </div>
  );
};

export default Bookings;
