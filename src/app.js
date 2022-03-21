import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./admin";
import Home from "./home";
import Unsubscribe from "./unsubscribe";
import Links from "./links";
import Contribution from "./contribution";

export default function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/unsubscribe" component={Unsubscribe} />
            <Route exact path="/links" component={Links} />
            <Route exact path="/contribution" component={Contribution} />
        </BrowserRouter>
    );
}
