import React from 'react';
import { Link } from 'react-router-dom';

import Tap from 'components/product/Tap';

import * as Style from "assets/styleComponent/product/common"

import product01 from "assets/images/prodcut/7.png";

const Product = () => {
    return (
        <Style.Container>
            <div className="wrap">
                <Tap />

                <ul className='list'>
                    <li>
                        <Link to={"1"}>
                            <div>
                                <img src={product01} alt="" />
                                <div className="more">
                                    <span>자세히보기</span>
                                </div>
                            </div>
                            <h5>■ MCAP - A150SP (공냉식) AIR <br />COOLED PACKACE</h5>
                        </Link>
                    </li>
                </ul>
            </div>
        </Style.Container>
    );
};

export default Product;