import React from 'react';
import {useRoutes, BrowserRouter as Router,} from "react-router-dom";

import UserItemPage from "./components/UserItemPage";
import UsersPage from "./components/UsersPage";

import './App.scss';


function App() {
    let element = useRoutes([
        {
            path: "/",
            element: <UsersPage />,

        },
        {
            path: "/:id",
            element: <UserItemPage />,
        },
    ]);

    return element;
}
const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
