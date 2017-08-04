import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './route';
import './assets/css/reset.css';
// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false }); //取消url后面的?_k=adseis参数


ReactDOM.render(
    <Routes />,
    document.getElementById("root"));