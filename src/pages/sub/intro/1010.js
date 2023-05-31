import React from 'react';
import error from 'assets/images/Intro/인사말BG.png';
import styled from "styled-components";

export default function Intro() {
  return (
    <>
        <Wrap>
            <Title>인사말</Title>
            <ImgBox>
                <img src={error} alt="" />
            </ImgBox>
            <TextBox>
                <p>
                    안녕하십니까?<br />
                    AES TECHNOLOGY를 방문해주셔서 진심으로 감사드립니다.<br />
                    <br />
                    <span className="strong">
                        저희 AES TECHNOLOGY는 냉난방기, 칠러, 항온항습기, 냉풍건조기,<br className='mo' />
                        에너지절감장치를 판매하는 회사로서 최고 품질의 제품을 합리적인 가격으로<br className='mo' />
                        공급하여 소비자께 만족을 드리고자 노력하고 있습니다.
                    </span>
                    <br />
                    <br />
                    고품질의 제품 공급과 출저한 사후관리<br />
                    전국 어디서든 상담 시공해드리며, 향후 A/S 및 고객관리에 최선을 다하겠습니다.
                </p>
                <p>
                    지금까지 저희 AES TECHNOLOGY를 아껴주시고 찾아주신 고객 여러분께<br className='mo'/>
                    감사드리며 앞으로도 더욱 많은 지도 편달 부탁드립니다.<br/>
                    <br/>
                    최고의 품질의 제품으로 고객만족에 최선을 다할 것을 약속드립니다.
                    <br className='mo'/>
                    <br className='mo'/>
                    <br/>
                    <br/>
                    <span className='strong'>
                        AES TECHNOLOGY 임직원 일동
                    </span>
                </p>
            </TextBox>
        </Wrap>
    </>
  )
}

const Wrap = styled.div`
width: 1200px;
margin: 0 auto;
@media screen and (max-width : 1200px){
    width: 100%;
}
`
const Title = styled.h2`
font-size: 52px;
font-weight: bold;
padding: 120px 0 30px 0;
@media screen and (max-width:1200px) {
    text-align: center;
}
@media screen and (max-width:500px) {
    font-size: 36px;
}
`
const ImgBox = styled.div`
    text-align: center;
    img{
        width: 120%;
        transform: translate(-50%,0%);
        position: relative;
        left: 50%;
    }
    @media screen and (max-width:1000px) {
        img{
        width: 90%;
        transform: translate(0%,0%);
        position: relative;
        left: 0;
    }
        
    }
`
const TextBox = styled.div`
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    p{
        font-size: 16px;
        line-height: 1.2;
    }
    p .strong{
        font-size: 18px;
        font-weight: bold;
        line-height: 1.2;
    }
    @media screen and (max-width:1000px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 30px 10%;
        p .mo{
            display: none;
        }
    }
    @media screen and (max-width:500px){
        p{
            font-size: 14px;
        }
        p .strong{
            font-size: 16px;
        }
    }

`