import React from 'react';
import {Route, Switch} from "react-router";
import Main from "@/js/components/Main";
import License from "@/js/components/License";
import Decks from "@/js/components/Decks";

const ContentRouter = () => {
    return (
        <Switch>
            <Route path='/license' exact component={License}/>
            <Route path='/decks' component={Decks}/>
            <Route path='/' component={Main}/>
        </Switch>
    );
};

export default ContentRouter;
