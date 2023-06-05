import React,{useEffect} from 'react'
import styled from "styled-components";
import 전화 from "assets/images/Intro/전화.png";
import 팩스 from "assets/images/Intro/팩스.png";
import 위치 from "assets/images/Intro/위치.png";
const {kakao} = window;

export default function Come() {
    useEffect(()=>{
        const container = document.getElementById('map');
        const location = new kakao.maps.LatLng(35.89144212706748, 128.59610425518105);
        const options = {
            center: location,
            level: 3};
        const kakaoMap = new kakao.maps.Map(container, options);
        const marker = new kakao.maps.Marker({
            position: location
        });
        marker.setMap(kakaoMap);
        }, [])
  return (
    <>
        <Wrap>
            <Title>오시는 길</Title>
            <Map>
                <div id="map"></div>
                <InfoBox>
                    <div>
                        <h6>ADDRESS</h6>
                        <p><img src={위치} className="mo"/> 대구광역시 북구 연암로 68-12(2층)</p>
                    </div>
                    <div>
                        <h6>TEL</h6>
                        <p><img src={전화} className="mo"/>053-951-3376</p>
                    </div>
                    <div>
                        <h6>FAX</h6>
                        <p><img src={팩스} className="mo"/>053-952-3376</p>
                    </div>
                </InfoBox>
            </Map>
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
padding: 120px 0 40px 0;
text-align: center;
@media screen and (max-width:1200px) {
    
}
`
const Map = styled.div`
#map{
    width: 110%;
    height: 580px;
    transform: translate(-50%,0%);
    position: relative;
    left: 50%;
    border-radius: 20px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
}
@media screen and (max-width:1200px) {
    #map{
    width: 90%;
    height: 580px;
    transform: translate(-50%,0%);
    position: relative;
    left: 50%;
    border-radius: 20px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
}
}
`

const InfoBox = styled.div`
    background-color: rgb(2,56,133);
    display: flex;
    padding: 60px 0;
    color:white;
    justify-content: space-around;
    border-radius: 20px;
    position: relative;
    transform: translate(-50%,-50%);
    top: -50%;
    left: 50%;
    z-index: 1;
    h6{
        font-size: 20px;
        padding-bottom: 20px;
        position: relative;
    }
    h6::after{
        content: "";
        width: 40px;
        height: 1px;
        background: white;
        position: absolute;
        transform: translate(-50%,0);
        top: 100%;
        left: 20px;
    }
    p{
        padding-top: 20px;
        font-size: 17px;
    }
    p > img{
        padding-right: 5px;
    }
    @media screen and (max-width:1200px) {
        width: 90%;
    }
    @media screen and (max-width:700px) {
        padding: 30px 0;
        h6{
            font-size: 16px;
        }
        p{
            font-size: 12px;
        }
    }
    @media screen and (max-width:500px) {
        h6{
            font-size: 14px;
        }
        p{
            font-size: 10px;
        }
        .mo{
            display: none;
        }
    }
    @media screen and (max-width:400px) {
        padding: 30px 10px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;
        
        > div{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        h6{
            font-size: 12px;
            padding-bottom: 0px;
        }
        p{
            font-size: 12px;
            padding-top: 0px;
        }
        h6::after{
        height: 0px;
        }
    }
`