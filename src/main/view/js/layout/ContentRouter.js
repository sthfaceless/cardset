import React from 'react';
import {Route, Switch} from "react-router";
import Main from "@/js/components/Main";

const ContentRouter = () => {
    return (
        <Switch>
            <Route path='/' component={Main}/>
        </Switch>
    );
};

export default ContentRouter;
