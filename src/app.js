import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./admin";
import Home from "./home";

export default function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
        </BrowserRouter>
    );
}
