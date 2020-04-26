import React from 'react'
import {Provider} from "react-redux";
import {StaticRouter} from "react-router";
import {store} from "./store/store";
import '@/css/styles.scss'
import LayoutContainer from "@/js/layout/LayoutContainer";
import {BrowserRouter} from "react-router-dom";
import { hot } from 'react-hot-loader';

function App(){
    return (
        <Provider store={store}>
            <BrowserRouter>
                <LayoutContainer/>
            </BrowserRouter>
        </Provider>
    )
}
const app = process.env.NODE_ENV === 'development' ?
    hot(module)(App) : App;

export default app