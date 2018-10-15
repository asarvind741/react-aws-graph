import { ToastContainer } from "react-toastify";
import React from 'react';
import "react-toastify/dist/ReactToastify.css";

const notificationMessage = (props) => (
    <ToastContainer 
    position="top-center"
    // closeButton = { true }
    autoClose = {5000} />
)

export default notificationMessage;