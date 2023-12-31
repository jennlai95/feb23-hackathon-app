import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApiProvider from './Contexts/ApiContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookSearchByName from './pages/BookSearchByName';

import NavSearchBar from './components/NavSearchBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ApiProvider>
      <BrowserRouter>

        <NavSearchBar />

        <Routes>
          {/* Homepage route  */}
          <Route path="/" element={<App />}/>
          {/* API fetch route */}
          <Route path="/:bookName" element={<BookSearchByName />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
