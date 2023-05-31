import React from 'react';
import { Link } from 'react-router-dom';

import Tap from 'components/product/Tap';

import * as Style from "assets/styleComponent/product/common"

import product01 from "assets/images/prodcut/1.png";
import product03 from "assets/images/prodcut/3.png";
import product04 from "assets/images/prodcut/4.png";
import product05 from "assets/images/prodcut/5.png";
import product06 from "assets/images/prodcut/6.png";

const Product_01 = () => {
    return (
        <Style.Container>
            <div className="wrap">
                <Tap />

                <ul className='list'>
                    <li>
                        <Link>
                            <div>
                                <img src={product01} alt="" />
                                <div className="more">자세히보기</div>
                            </div>
                            <h5>■ 냉풍건조기 [CWCD-230D]</h5>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div>
                                <img src={product01} alt="" />
                                <div className="more">자세히보기</div>
                            </div>
                            <h5>■ 냉풍건조기 [CWCD-230D]</h5>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div>
                                <img src={product03} alt="" />
                                <div className="more">자세히보기</div>
                            </div>
                            <h5>■ 냉풍건조기 [CWCD-230D]</h5>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div>
                                <img src={product04} alt="" />
                                <div className="more">자세히보기</div>
                            </div>
                            <h5>■ 냉풍건조기 [CWCD-230D]</h5>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div>
                                <img src={product05} alt="" />
                                <div className="more">자세히보기</div>
                            </div>
                            <h5>■ 냉풍건조기 [CWCD-230D]</h5>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div>
                                <img src={product06} alt="" />
                                <div className="more">자세히보기</div>
                            </div>
                            <h5>■ 냉풍건조기 [CWCD-230D]</h5>
                        </Link>
                    </li>
                </ul>
            </div>
        </Style.Container>
    );
};

export default Product_01;