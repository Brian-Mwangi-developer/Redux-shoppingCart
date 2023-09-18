import React from 'react'
import { Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/uiSlice'
const Notification = ({ type, message }) => {
    const dispatch = useDispatch()
    const handleClose =()=>{
        dispatch(uiActions.showNotifications({
            open:false,
        }))
    }
    const notification = useSelector(state => state.ui.notification);
    return (
        <div>
            {notification && <Alert onClose ={handleClose} severity={type}>{message}</Alert>}
        </div>
    )
}

export default Notification