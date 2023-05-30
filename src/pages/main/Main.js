import React from 'react';
import { Link } from 'react-router-dom';

import * as Style from "assets/styleComponent/main/main"

import banner from 'assets/images/main/banner.jpg';
import happy01 from 'assets/images/main/m_1.png';
import happy02 from 'assets/images/main/m_2.png';
import happy03 from 'assets/images/main/m_3.png';


const Main = () => {
    return (
        <main>
            <Style.Banner className="banner">
                <img src={banner} alt="" />
                <div className="wrap">
                    <div className="content">
                        <h2>혁신적인, 지속가능성, 고효율</h2>
                        <p>신뢰와 정직을 최우선으로 고객 만족을 추구하는 기업</p>
                    </div>
                </div>
            </Style.Banner>
            <Style.Happy className="happy">
                <div className="wrap">
                    <h2>에너지 절감 장치의 확실한 행복</h2>
                    <h3>AES테크는 고효율 에너지 절감 장치로 지속가능한 일상을 만들어가겠습니다.</h3>

                    <ul>
                        <li>
                            <Link to={`pages/2010`}>
                                <div>
                                    <img src={happy01} alt="" />
                                    <div className="content">
                                        <p>제품안내 더보기</p>
                                        <span>MORE</span>
                                    </div>
                                </div>
                                <h4>PRODCTS</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to={`pages/30`}>
                                <div>
                                    <img src={happy02} alt="" />
                                    <div className="content">
                                        <p>납품실적 더보기</p>
                                        <span>MORE</span>
                                    </div>
                                </div>
                                <h4>DELIVERY</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to={`pages/60`}>
                                <div>
                                    <img src={happy03} alt="" />
                                    <div className="content">
                                        <p>제품문의 및 고객센터</p>
                                        <span>MORE</span>
                                    </div>
                                </div>
                                <h4>CONTACT</h4>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Style.Happy>
        </main>
    );
};

export default Main;