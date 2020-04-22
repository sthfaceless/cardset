import React from 'react'
import {Provider} from "react-redux";
import {StaticRouter} from "react-router";
import {store} from "./store/store";

import '@/css/styles.scss'

function App(){
    return (
        <Provider store={store}>
            <StaticRouter>
                <div className='container'>
                    <h1>It works again</h1>
                </div>
            </StaticRouter>
        </Provider>
    )
}

export default App