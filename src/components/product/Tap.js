import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Tap = () => {
    return (
        <Nav>
            <h2>제품소개</h2>
            <ul>
                <li className='on'><Link>냉풍건조기</Link></li>
                <li><Link>냉각기(칠러)</Link></li>
                <li><Link>항온항습기</Link></li>
                <li><Link>살수제어장치</Link></li>
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