import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.css';

// Retrieve the DOM element from  public/index.html

const container = document.getElementById('root');

// After retrieving it, the caller creates a root

const root = ReactDOMClient.createRoot(container);

//then calls render on it

root.render(<App />);
