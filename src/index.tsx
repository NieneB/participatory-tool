
import "./index.css";
import App from './App';

import { createRoot } from 'react-dom/client';
import { StrictMode } from "react";

const root = createRoot(document.getElementById('root')!);   // notice the '!'
root.render( <StrictMode>
    <App />
  </StrictMode>,);

