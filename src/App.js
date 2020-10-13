import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import Forms from "./containers/Forms/Forms";

function App() {
    return (
        <div className="App">
            <Layout>
                <Forms>

                </Forms>
            </Layout>
        </div>
    );
}

export default App;
