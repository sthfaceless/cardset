import React from 'react'
import {Provider} from "react-redux";
import {StaticRouter} from "react-router";
import {store} from "./store/store";
import '@/css/styles.scss'
import LayoutContainer from "@/js/layout/LayoutContainer";

function App(){
    return (
        <Provider store={store}>
            <StaticRouter>
                <LayoutContainer/>
            </StaticRouter>
        </Provider>
    )
}

export default App