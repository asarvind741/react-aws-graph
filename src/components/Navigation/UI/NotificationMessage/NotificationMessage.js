import { ToastContainer } from "react-toastify";
import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import './NotificationMessage.css';

const notificationMessage = (props) => (
    <ToastContainer 
    newestOnTop = { true }
    draggable = { true }
    // className = "toast-class"
    // position="top-right"
    // closeButton = { true }
    position = "top-center"
    autoClose = {10000} />
)

export default notificationMessage;