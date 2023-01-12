import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';

const Toast = () => (
  <ToastContainer
    position="top-right"
    hideProgressBar
    autoClose={2000}
    transition={Slide}
    closeButton={false}
  />
);

export { Toast };
