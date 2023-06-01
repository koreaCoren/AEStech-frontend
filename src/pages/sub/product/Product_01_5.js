import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Tap from 'components/product/Tap';

import * as Style from "assets/styleComponent/product/common"

import product from "assets/images/prodcut/냉풍건조기05.png";
import table01 from "assets/images/prodcut/표1.png";
import table02 from "assets/images/prodcut/표2.png";

const Product = () => {
    return (
        <Style.Container>
            <div className="wrap">
                <Tap />

                <Style.Top2>
                    <img src={product} alt="" />
                    <div className="content">
                        <h2>냉풍건조기 [CWCD-115D]</h2>
                        <div className='flex'>
                            <p>
                                • 기계실치수(mm) : 길이 3,000 X 폭 1,500 X 높이 2,600 <br />
                                •  대차수(대) : 8대 (길이 930 X 폭 1,200 X 높이 1,645)<br />
                                •  건조물 내용량(kg) : 3,000 (건조물 종류에 따라 다를 수 있음)<br />
                                •  히트펌프용량(HP) : 15<br />
                                •  재열히터용량(kW) : 9.9<br />
                                •  송풍기(kW) : 1.5 X 3대<br />
                                •  제습능력(L/hr) : 32<br />
                                •  전원 : 3상 4P 380V 60hz<br />
                                •  용도 : 과일, 야채, 수산물, 한약재 등
                            </p>
                            <div className='table'>
                                <table >
                                    <tbody>
                                        <tr>
                                            <td>모델명</td>
                                            <td>CWCD-115D</td>
                                            <td>사용냉매</td>
                                            <td>R-134a</td>
                                        </tr>
                                        <tr>
                                            <td>법정 냉동톤</td>
                                            <td>3.35RT</td>
                                            <td>압축기</td>
                                            <td>11kw X 1EA</td>
                                        </tr>
                                        <tr>
                                            <td>냉동능력</td>
                                            <td>25.7kw(22,100kcal/h)</td>
                                            <td>재열히터</td>
                                            <td>9.9kw</td>
                                        </tr>
                                        <tr>
                                            <td>제습능력</td>
                                            <td>32L/h</td>
                                            <td>송풍기</td>
                                            <td>∅550</td>
                                        </tr>
                                        <tr>
                                            <td>풍량</td>
                                            <td>165CCM X 3EA</td>
                                            <td>송풍기전동기</td>
                                            <td>1.5kw 3P 3EA</td>
                                        </tr>
                                        <tr>
                                            <td>전원</td>
                                            <td>3PH 60Hz 380V</td>
                                            <td>실외송풍기</td>
                                            <td>0.4kw 5p ∅600 2EA</td>
                                        </tr>
                                        <tr>
                                            <td>내압시험압력</td>
                                            <td>H : 2.2MPa L : 1.3MPa</td>
                                            <td>최고사용압력</td>
                                            <td>H : 2.0MPa L : 1.0MPa</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h5>* 재열 히터의 경우 건조장 내부의 온도가 낮을 경우 올리기 위해 보조적으로 필요</h5>
                            </div>
                        </div>
                    </div>
                </Style.Top2>
                <Style.Top2>
                    <div className="content">
                        <h2>응용1 - [ 모델명 : CWCD-003D ]</h2>
                        <div className='flex'>
                            <p>
                                • 치수(mm) : 길이 2,250 X 폭 1,288 X 높이 1,906 <br />
                                • 채반수(개) : 26<br />
                                • 건조물 내용량(kg) : 200 내외<br />
                                • 히트펌프용량(HP) : 3<br />
                                • 재열히터용량(kW) : 6.6 / 9.9 / 13.2 / 16.5 / 19.8 선택가능<br />
                                • 송풍기(kW) : 1.5<br />
                                • 제습능력(L/hr) : 12<br />
                                • 전원 : 3상 4P 380V 60hz<br />
                                • 용도 : 연구실용
                            </p>
                        </div>
                    </div>
                </Style.Top2>
                <Style.Top2>
                    <div className="content">
                        <h2>응용2 - [ 모델명 : CWCD-003S ]</h2>
                        <div className='flex'>
                            <p>
                                • 치수(mm) : 길이 4,000 X 폭 1,288 X 높이 2,250<br />
                                • 채반수(개) : 52<br />
                                • 건조물 내용량(kg) : 300 ~ 500 (건조물 종류에 따라 상이)<br />
                                • 히트펌프용량(HP) : 3<br />
                                • 재열히터용량(kW) : 6.6 / 9.9 / 13.2 / 16.5 / 19.8 선택가능<br />
                                • 송풍기(kW) : 1.5<br />
                                • 제습능력(L/hr) : 12<br />
                                • 전원 : 3상 4P 380V 60hz<br />
                                • 용도 : 열교환 시스템을 부착하여 에너지 효율 제고
                            </p>
                        </div>
                    </div>
                </Style.Top2>
            </div>
        </Style.Container>
    );
};

export default Product;