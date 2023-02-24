// action creators
import { DESTINATIONFROM, DESTINATIONTO,JOURNEYDATE,GUESTS,CLASS,BOOK, INPUT } from './actionTypes';

export const input=(name, value)=>{
    return {
        type: INPUT,
        payload:{
            name,
            value
        }
    }
}
export const destinationFrom =(destinationFromPlace)=>{
    
    return {
        type: DESTINATIONFROM,
        payload: destinationFromPlace
    }
}
export const destinationTo =(destinationToPlace)=>{
    return {
        type: DESTINATIONTO,
        payload: destinationToPlace
    }
}
export const journeyDate =(journeyDate)=>{
    return {
        type: JOURNEYDATE,
        payload: journeyDate
    }
}

export const guests =(guestsNumber)=>{
    return {
        type: GUESTS,
        payload: guestsNumber
    }
}
export const vehicleClass =(classStatus)=>{
    return {
        type: CLASS,
        payload: classStatus
    }
}
export const book =(booking)=>{
    return {
        type: BOOK,
        payload: booking
    }
}