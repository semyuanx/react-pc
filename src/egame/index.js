import React from 'react';
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router';
import PT from './game_list/pt';   //PT游戏
import GG from './game_list/gg';   //BBIN游戏
import GPI from './game_list/gpi'; // GPI游戏
import MG from './game_list/mg'; // MG游戏
import TGP from './game_list/tgp'; // PT游戏
import TTG from './game_list/ttg'; // PT游戏
require('../assets/css/egame/style.css')

var gameRouter = (
    <Route>
        <IndexRedirect to="/pt.html" />
        <Route path="/pt.html" component={PT} />
        <Route path="/gg.html" component={GG} />
        <Route path="/gpi.html" component={GPI} />
        <Route path="/mg.html" component={MG} />
        <Route path="/tgp.html" component={TGP} />
        <Route path="/ttg.html" component={TTG} />
    </Route>
);

export default gameRouter;