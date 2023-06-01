import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Tap from 'components/product/Tap';

import * as Style from "assets/styleComponent/product/common"

import product01 from "assets/images/prodcut/7.png";

const Product = () => {
    return (
        <Style.Container>
            <div className="wrap">
                <Tap />

                <Style.Top style={{ alignItems: "start" }}>
                    <img src={product01} alt="" />
                    <div className="content">
                        <h3>MCAP - A150SP (공냉식) AIR COOLED PACKACE</h3>
                        <p>
                            • MCAP - A150SP (공냉식) AIR COOLED PACKACE <br />
                        </p>
                    </div>
                </Style.Top>
            </div>
        </Style.Container>
    );
};

export default Product;