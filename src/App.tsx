import React from 'react';
import { Provider } from "react-redux";
import store from "./stores";
import './App.css';

import TestItem from './components/TestItem';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <TestItem/>
            </div>
        </Provider>
    );
};

export default App;
