import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";


export const fetchData =() =>{
    return  async (dispatch) =>{
        const fetchHandler = async()=>{
            const res = await fetch('https://trial1-fb095-default-rtdb.firebaseio.com/cartItems.json');
            const data = await res.json();
            return data;
        }
        try {
            const cartData = await fetchHandler();
            console.log(cartData);
            dispatch(cartActions.replaceData(cartData))
        } catch (err) {
            dispatch(uiActions.showNotifications({
                open: true,
                message: 'Sending request failed',
                type: 'error'
            })
            );
            console.log(err);
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotifications({
            open: true,
            message: "Sending request...",
            type: 'warning'
        }));
        const sendRequest = async () => {
            //send request as sending request
            const res = await fetch('https://trial1-fb095-default-rtdb.firebaseio.com/cartItems.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });
            const data = await res.json();
            //send state when request is successful
            dispatch(uiActions.showNotifications({
                open: true,
                message: 'Sent Request to database Successfully',
                type: 'success'
            }))
        };
        try {
            await sendRequest();
        }catch(err) {
                //if error send state as error
                dispatch(uiActions.showNotifications({
                    open: true,
                    message: 'Sending request failed',
                    type: 'error'
                })
                );

            };
        }
}