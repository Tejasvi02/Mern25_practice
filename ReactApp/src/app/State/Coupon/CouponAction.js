import * as ActionTypes from "../ActionTypes";//alias import  

//coupon action
export const addCoupon = (coupon) => ({        
    type: ActionTypes.ADD_COUPON,
    payload: coupon
});