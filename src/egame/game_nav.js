import React from 'react';
import { Link } from 'react-router';

var GameNav = React.createClass({
    render() {
        var gameType = [
            { val: 'pt', txt: 'PT游戏' },
            { val: 'mg', txt: 'MG游戏' },
            { val: 'ttg', txt: 'TTG游戏' },
            { val: 'gg', txt: 'GG游戏' },
            { val: 'ag', txt: 'AG游戏' },
            { val: 'gpi', txt: 'GPI游戏' },
            { val: 'tgp', txt: 'TGP游戏' },
            { val: 'bbin', txt: 'BBIN游戏' }
        ];
        var _dom = gameType.map(function (obj, key) {

            if (obj.val !== 'ag' && obj.val !== 'bbin') {
                return (
                    <li key={key}>
                        <Link to={'/' + obj.val + '.html'} activeClassName = "active">
                            <span></span>
                            <div className="subNavImg">
                                <img alt="egame" src={require('../assets/img/egame/gameNavImg' + (key + 1) + '.png')} />
                            </div>
                            <p>{obj.txt}</p>
                        </Link>
                    </li>
                )
            } else {
               return ( <li key={key}>
                    <a>
                        <span></span>
                        <div className="subNavImg">
                            <img src={require('../assets/img/egame/gameNavImg' + (key + 1) + '.png')} />
                        </div>
                        <p>{obj.txt}</p>
                    </a>
                </li>)
            }

        })
        return (
            <div className="game_rightNav w1200">
                <ul className="game_subNavList">
                    {_dom}
                </ul>
                <div className="clear"></div>
                <div className="h15"></div>
            </div>
        )
    },
    componentDidMount() {

    }
})
export default GameNav;