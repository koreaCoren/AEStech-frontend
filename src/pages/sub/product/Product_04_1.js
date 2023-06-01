import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Tap from 'components/product/Tap';

import * as Style from "assets/styleComponent/product/common"

import product01 from "assets/images/prodcut/8.png";

const Product = () => {
    return (
        <Style.Container>
            <div className="wrap">
                <Tap />

                <Style.Top style={{ alignItems: "start" }}>
                    <img src={product01} alt="" />
                    <div className="content">
                        <h2>IESS(Innovation Energy Save System)</h2>
                        <p>
                            살수 장치의 에너지 절약과 시스템은 기존 냉동기, 에어컨, 칠러 외 <br />
                            각종 냉동기 실외기에 본 시스템을 추가하여 간단한 조정을 하는 것 만으로<br />
                            소비전력 저감 효과를 실현하였습니다. <br /><br />

                            여름철 온도 상승으로 인하여 고압이 형성되므로 전기 소모량이 많아 집니다.<br />
                            IESS 장치를 부착한 제품은 일반 제품에 비해 소비전력이 최대 50%까지 절약됩니다.
                        </p>
                        <h3 style={{ marginTop: "50px" }}>IESS 설치 시 소비전력 저감 효과</h3>
                        <p>
                            1. 압력 저하로 comp 사용량 감소<br />
                            2. comp 내 압력 저하<br />
                            3. 고압을 안정화 시켜서 전력 소모 감소<br />
                            4. 가스 응축이 잘 되어 냉각 효율 증대<br />
                            5. 안정적인 온도 유지로 인하여 화재 예방<br />
                            6. 가스 압력 저하로  comp 수명 증가<br />
                            7. comp 소음 및 팬 소음 감소 (소음, 전기 사용)<br />
                            8. 주변 실외기 부하 감소 및 핀 자동세척 (냉각효과 증가)
                        </p>
                    </div>
                </Style.Top>
            </div>
        </Style.Container>
    );
};

export default Product;