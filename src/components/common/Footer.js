import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getCategory } from 'api/category';
import logo from 'assets/images/ft_logo.png'

const Footer = () => {
    const [categorys, setCategorys] = useState(null);

    useEffect(() => {
        getCategory(setCategorys);
    }, [])

    return (
        <Foot>
            <div className="wrap">
                <ul>
                    <li className='left'>
                        <h2><img src={logo} alt="" /></h2>
                        <p>
                            상호 : AES TEOINOLOGY | 대표자 : 남호영 <br />
                            주소 : 대구광역시 북구 연임로 68-1(2층) <br />
                            TEL : 053-951-3376 | FAX : 053-952-3376 <br />
                            EMAIL : oes2023@naver.com | 사업자번호 : 070-81-00399
                        </p>
                    </li>
                    <li className='right'>
                        <nav>
                            <ul>
                                {
                                    categorys?.map((a, i) => {
                                        return (
                                            <li key={i}>
                                                {
                                                    a.lowCategory.length <= 0
                                                        ? <Link to={`/pages/${(a.cate_code)}`}>{a.cate}</Link>
                                                        : <span>{a.cate}</span>
                                                }
                                                <ol>
                                                    {
                                                        a.lowCategory?.map((b, j) => {
                                                            return (
                                                                <li key={j}><Link to={`/pages/${b.cate_code}`}>{b.cate}</Link></li>
                                                            )
                                                        })
                                                    }
                                                </ol>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                        <p>CopyrightⓒAES Eechnology All rights reserved.</p>
                    </li>
                </ul>
            </div>
        </Foot>
    )
};
const Foot = styled.footer`
    width: 100%;
    background-color: #222;
    padding: 50px 0px;
    *{
        color: #fff;
    }
    .wrap > ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .left > h2{}
    .left > p{
        margin-top: 30px;
        line-height: 1.3;
        color: #aaa;
    }

    .right {}
    .right nav ul{}
    .right nav ul > li{
        padding-left: 50px;
    }
    .right nav ul > li a,
    .right nav ul > li span{}
    .right nav ul > li ol{
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-top: 20px;
    }
    .right nav ul > li ol li{}
    .right nav ul > li ol li a{
        color: #aaa;
        font-size: 14px;
        line-height: 1.3;
    }
    .right p{
        text-align: right;
        margin-top: 20px;
    }

    @media (max-width:1000px) {
        .wrap > ul {
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .right{
            display: none;
        }
    }
`

export default Footer;