import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* redux */
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import root_reducer from './store/reducers/root_reducer'

const store = createStore(root_reducer)

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
