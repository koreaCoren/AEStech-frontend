import React from 'react';
import { Link } from 'react-router-dom';

import * as Style from "assets/styleComponent/main/main"

const Main = () => {
    return (
        <main>
            <Style.Banner className="banner"></Style.Banner>
            <div className="happy">
                <div className="wrap">
                    <h2>에너지 절감 장치의 확실한 행복</h2>
                    <h3>AES테크는 고효율 에너지 절감 장치로 지속가능한 일상을 만들어가겠습니다.</h3>

                    <ul>
                        <li>
                            <Link to={`pages/2010`}>1</Link>
                            <Link to={`pages/30`}>2</Link>
                            <Link to={`pages/60`}>3</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Main;