import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/Navbar"
window.onerror = (e)=> {
  alert(e)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar />
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals((...arg) => {
  const breaker = new Array(20).join("=")
  console.debug(breaker + " WEB_VITAL " + breaker)
  console.debug(...arg);
  console.debug(breaker+"END OF VITALS "+breaker)
});
