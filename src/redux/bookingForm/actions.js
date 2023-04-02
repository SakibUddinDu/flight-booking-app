// action creators
import { ADD_BOOKING, DELETE_BOOKING } from './actionTypes';

export const addBooking=(bookingData)=>{
    return {
        type: ADD_BOOKING,
        payload:bookingData
    }
}
export const deleteBooking =(bookingId)=>{
    return {
        type: DELETE_BOOKING,
        payload: bookingId
    }
}
// export const destinationFrom =(destinationFromPlace)=>{
    
//     return {
//         type: DESTINATIONFROM,
//         payload: destinationFromPlace
//     }
// }
// export const destinationTo =(destinationToPlace)=>{
//     return {
//         type: DESTINATIONTO,
//         payload: destinationToPlace
//     }
// }
// export const journeyDate =(journeyDate)=>{
//     return {
//         type: JOURNEYDATE,
//         payload: journeyDate
//     }
// }

// export const guests =(guestsNumber)=>{
//     return {
//         type: GUESTS,
//         payload: guestsNumber
//     }
// }
// export const vehicleClass =(classStatus)=>{
//     return {
//         type: CLASS,
//         payload: classStatus
//     }
// }
