'use client';

import { ToastContainer } from 'react-toastify';

export default function ToastWrapper() {
  return <ToastContainer closeOnClick theme="colored" position="top-right" newestOnTop autoClose={2000} />;
}
