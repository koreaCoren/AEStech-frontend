import React from 'react';
import { Link } from 'react-router-dom';

import Tap from 'components/product/Tap';

import * as Style from "assets/styleComponent/product/common"

import product01 from "assets/images/prodcut/1.png";
import product03 from "assets/images/prodcut/3.png";
import product04 from "assets/images/prodcut/4.png";
import product05 from "assets/images/prodcut/5.png";
import product06 from "assets/images/prodcut/6.png";

const Product = () => {
    return (
        <Style.Container>
            <div className="wrap">
                <Tap />
                <p style={{ textAlign: "center", lineHeight: "300px", fontSize: "20px" }}>등록된 상품이 없습니다.</p>
            </div>
        </Style.Container>
    );
};

export default Product;