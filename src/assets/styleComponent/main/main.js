import styled from "styled-components";

export const Banner = styled.div`
    position: relative;
    img{
        width: 100%;
    }
    .content{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
    }
    .content h2{
        font-size: 40px;
        font-family: 'GmarketSansBold';
    }
    .content p{
        font-size: 19px;
        margin-top: 20px;
    }
    @media (max-width:1000px) {
        .content h2{
            font-size: 30px;
        }
        .content p{
            font-size: 16px;
            margin-top: 10px;
        }
    }
    @media (max-width:800px) {
        .content h2{
            font-size: 24px;
        }
        .content p{
            font-size: 14px;
        }
    }

    @media (max-width:600px) {
        .content{
            top: 25%;
        }
    }
    @media (max-width:400px) {
        .content{
            top: 28%;
        }
        .content h2{
            font-size: 18px;
        }
        .content p{
            font-size: 12px;
        }
    }
`

export const Happy = styled.div`
    text-align: center;
    padding: 50px 0px;
    h2{
        font-size: 32px;
        font-family: 'GmarketSansBold';
    }
    h3{
        font-size: 16px;
        color: #666;
        margin: 15px 0px 30px;
    }
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 15px;
    }
    ul li{
        width: 100%;
    }
    ul li a {
        width: 100%;
    }
    ul li a > div{
        position: relative;
        border-radius:30px;
        overflow: hidden;
    }
    ul li img{
        width: 100%;
    }
    ul li .content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #000000cc;
        width: 100%;
        height: 100%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        opacity: 0;
        transition: opacity .5s;
    }
    ul li:hover .content{
        opacity: 1;
    }
    ul li .content p{
        font-size: 28px;
    }
    ul li .content span{
        margin-top: 10px;
        font-size: 12px;
        padding: 7px 30px 5px;
        border: 1px solid #fff;
        border-radius: 50px;
    }
    ul li h4{
        font-size: 18px;
        margin-top: 20px;
    }

    @media (max-width:1000px) {
        ul li .content p{
            font-size: 20px;
        }
    }
    @media (max-width:700px) {
        h2{
            font-size: 24px;
            letter-spacing: -2px;
        }
        h3{
            font-size: 14px;
            letter-spacing: -1px;
            margin-top: 10px;
        }
        ul {
            grid-template-columns: 1fr;
        }
        ul li .content p{
            font-size: 30px;
        }
    }
`
