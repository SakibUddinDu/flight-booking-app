import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

const initialState = [];


const nextBookingId =(bookings) =>{
    const maxId= bookings.reduce((maxId, booking)=>Math.max(booking.id, maxId), -1)//-1+1 =0 -0 o jate id hishebe aste pare
    return maxId+1;
}
const bookingFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
        console.log(action.payload)
        
      if (state.length >= 3) {
        return state;
      }
      return [...state, { id: nextBookingId(state), ...action.payload }];
    case DELETE_BOOKING:
        console.log(state)
      return state.filter((booking) => booking.id !== action.payload);
    default:
      return state;
  }
};

export default bookingFormReducer;

