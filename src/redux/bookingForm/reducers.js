import { BOOK, DESTINATIONFROM, INPUT } from "./actionTypes";

const initialState ={
    bookings:[{
            from:"",
            to:"",
            date:"",
            guests:0,
            ticketClass:"",
    }]
}

const bookingFormReducer = (state= initialState, action) =>{
    switch (action.type) {
       
        case INPUT:
            // console.log(action.payload);
            return {
               ...state,
               [action.payload.name]: action.payload.value,
            //    from : action.payload,
              
            }
        case BOOK:
            console.log(action.payload);
            return {
               ...state,
               bookings: action.payload,
            //    from : action.payload,
              
            }
            
        // case DESTINATIONFROM:
        //     return {
        //        ...state,
        //        [action.payload.name]:action.payload.value,
        //     }    
        default:
            return state;
    }
}

export default bookingFormReducer;