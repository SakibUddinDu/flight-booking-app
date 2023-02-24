// action creators
import { DELETED } from './actionTypes';

export const destinationFrom =(bookingId)=>{
    return {
        type: DELETED,
        payload:bookingId
    
    }
}
