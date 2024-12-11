
import "./index.css";
import App from './App';

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);   // notice the '!'
root.render(<App />);

