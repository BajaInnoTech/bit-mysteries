import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';

const domNode = createRoot(document.getElementById('root'));

domNode.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);
