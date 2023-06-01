import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";

const Tap = () => {
    const location = useLocation();
    const [tap, setTap] = useState();
    useEffect(() => {
        if (/.*2010.*/.test(location.pathname)) {
            setTap(0)
        } else if (/.*2020.*/.test(location.pathname)) {
            setTap(1)
        } else if (/.*2030.*/.test(location.pathname)) {
            setTap(2)
        } else if (/.*2040.*/.test(location.pathname)) {
            setTap(3)
        }
    }, [])

    return (
        <Nav>
            <h2>제품소개</h2>
            <ul>
                <li className={tap === 0 ? "on" : ""}><Link to={"/pages/2010"}>냉풍건조기</Link></li>
                <li className={tap === 1 ? "on" : ""}><Link to={"/pages/2020"}>냉각기(칠러)</Link></li>
                <li className={tap === 2 ? "on" : ""}><Link to={"/pages/2030"}>항온항습기</Link></li>
                <li className={tap === 3 ? "on" : ""}><Link to={"/pages/2040"}>살수제어장치</Link></li>
            </ul>
        </Nav>
    );
};
export const Nav = styled.div`
    text-align: center;
    h2{
        font-size: 50px;
        font-family: 'GmarketSansBold';
        margin-bottom: 20px;
    }
    ul{
        display: flex;
        border: 1px solid #ccc;
    }
    ul li{
        flex: 1;
        &:not(:last-child){
            border-right: 1px solid #ccc;
        }
    }
    ul li a{
        font-size: 16px;
        padding-top: 5px;
        line-height: 60px;
        font-family: 'GmarketSansBold';
        width: 100%;
    }
    ul li.on a{
        background-color: #023885;
        color: #fff;
    }
`

export default Tap;