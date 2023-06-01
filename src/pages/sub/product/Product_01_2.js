import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Tap from 'components/product/Tap';

import * as Style from "assets/styleComponent/product/common"

import product01 from "assets/images/prodcut/1.png";
import table01 from "assets/images/prodcut/표1.png";
import table02 from "assets/images/prodcut/표2.png";

const Product = () => {
    return (
        <Style.Container>
            <div className="wrap">
                <Tap />

                <Style.Top>
                    <img src={product01} alt="" />
                    <div className="content">
                        <h2>냉풍건조기 [CWCD-115D]</h2>
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
                </Style.Top>
                <Style.Bottom>
                    <div className="content">
                        <h2>냉풍건조기 특징 <span>(자연환경과 흡사한 신개념의 냉각 제습 건조방식)</span></h2>

                        <p>
                            <b>1) 고품질의 제품 건조</b><br />
                            <span>- 저온의 제습된 공기 순환을 이용하여 제품 본연의 맛, 향, 모양, 색, 성분, 품질을 자연 그대로 유지하여 상품성 및 생산성 증대</span>
                        </p>
                        <p>
                            <b>2) 계절과 날씨에 상관없는 전전후 건조</b><br />
                            <span>- 봄,여름,가을,겨울 비가오나 눈이오나 온도./습도에 관계없이 일정한 생산량 및 균일한 품질의 제품 보장</span>
                        </p>
                        <p>
                            <b>3) 고효율 에너지 절감 방식의 건조</b><br />
                            <span> - 히트펌프를 사용한 건조방식으로 폐열에너지를 회수하여 재활용함으로써 기름, 전기를 이용한 건조기 대비 최대 70% 에너지 절감 효과</span>
                        </p>
                        <p>
                            <b>4) 무공해 청정 안전한 친환경 건조</b><br />
                            <span> - 기름이나 전기로 인한 제반 문제 (제품 변질, 불완전연소에 의한 매연 흡착, 화재 위험 등)를 일시에 해소하며 높은 에너지 효율을 통한 탄소배출 절감</span>
                        </p>
                        <p>
                            <b>5) 조작이 쉽고 편리한 건조</b><br />
                            <span>- 인공지능 컨트롤러로 피냉각물에 적합한 온습도 조건, 건조 시간들을 간단한 조작으로 제어하여 원스톱 건조가 가능하며 오류 발생시 알람기능이 적용</span>
                        </p>
                    </div>
                    <div className="content">
                        <h2>적용가능한 제품들</h2>

                        <p>
                            <b>1) 농산물</b>
                            <span> - 고추, 마늘, 과일류, 버섯, 무, 호박, 양파, 곶감, 감말랭이, 블루베리, 고구마 등</span>
                        </p>
                        <p>
                            <b>2) 수산물</b>
                            <span> - 과메기, 멸치, 오질어, 해삼, 명태, 조기, 굴비, 참치, 노가리, 파래, 김 등</span>
                        </p>
                        <p>
                            <b>3) 식품류</b>
                            <span> - 각종 면류, 무말랭이, 고사리, 떡 등</span>
                        </p>
                        <p>
                            <b>4) 약초류</b><br />
                            <span> - 인삼, 홍삼, 당귀, 황귀, 알로에, 국화 등</span>
                        </p>
                        <p>
                            <b>5) 기타</b>
                            <span> - 목제, 모피, 약품, 제과류 등</span>
                        </p>
                    </div>
                    <div className="content">
                        <h2>경제성 분석 비교도</h2>

                        <div>
                            <img src={table01} alt="" />
                            <img src={table02} alt="" />
                        </div>
                    </div>
                </Style.Bottom>
            </div>
        </Style.Container>
    );
};

export default Product;