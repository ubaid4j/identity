import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";

function App() {
    return (
        <div className="App">
            <Layout>
                <p>Hello World</p>
                <strong>By Ubaid</strong>
            </Layout>
        </div>
    );
}

export default App;
