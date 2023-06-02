import styled from "styled-components";

export const Container = styled.div`
    padding: 150px 0px;
    .list{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 15px;
        text-align: center;
        margin-top: 50px;
    }
    .list li{}
    .list li a > div{
        position: relative;
        box-shadow: 2px 2px 5px #00000066;
        border-radius: 15px;
        overflow: hidden;
        width: 100%;
    }
    .list li:hover a > div{
        border: 5px solid #023885;
    }
    .list li a > div > img{
        width: 100%;
    }
    .list li a > div > div{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: #fff;
        background-color: #02388533;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity .5s;
    }
    .list li:hover a > div > div{
        opacity: 1;
    }
    .list li a > div > div span{
        background-color: #023885;
        padding: 7px 15px 5px;
        border-radius: 50px;
        border: 1px solid #fff;
    }
    .list li a h5{
        margin-top: 20px;
        line-height: 1.2;
    }
    @media (max-width: 900px) {
        .list{
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media (max-width: 700px) {
        .list{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 500px) {
        .list li a h5{
            font-size: 12px;
            letter-spacing: -1px;
        }
    }
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    margin-top: 50px;
    img{
        border: 1px solid #023885;
        border-radius: 15px;
        width: 400px;
    }
    h2{
        font-size: 30px;
        color: #023885;
        font-family: 'GmarketSansBold';
        margin-bottom: 20px;;
    }
    h3{
        font-size: 24px;
        color: #023885;
        font-family: 'GmarketSansBold';
        margin-bottom: 20px;;
    }
    p{
        font-size: 16px;
        line-height: 1.4;
        font-weight: bold;
        color: #444;
    }
    table{
        width: 100%;
        border: 1px solid #e1e1e1;
        border-collapse: collapse;
        margin-top: 20px;
    }
    table tr{}
    table tr td{
        border: 1px solid #e1e1e1;
        padding: 7px 0px 5px;
    }
    table tr td:nth-child(1),
    table tr td:nth-child(3){
        background-color: #8caddc;
        color: #fff;
        text-align: center;
        width: 100px;
    }
    table tr td:nth-child(2),
    table tr td:nth-child(4){
        padding-left: 15px;
    }
    h5{
        text-align: right;
        color: #444;
        margin-top: 10px;
    }

    @media (max-width:900px) {
        flex-direction: column;
    }
    @media (max-width:500px) {
        gap: 20px;
        h2{
            font-size: 20px;
            margin-bottom: 10px;
        }
        h3{
            font-size: 16px;
            letter-spacing: -1px;
            margin-bottom: 10px;
        }
        p{
            font-size: 12px;
        }
        img{
            width: 100%;
        }
        table tr{
            display: flex;
            flex-direction: column;
        }
        table tr td{
            width: 100% !important;
            text-align: center;
        }
        h5{
            text-align: left;
            font-size: 10px;
        }
    }
`

export const Top2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin-top: 50px;
    img{
        border-radius: 15px;
        width: 100%
    }
    h2{
        font-size: 30px;
        color: #023885;
        font-family: 'GmarketSansBold';
        margin-bottom: 20px;;
    }
    .content{
        width: 100%;
    }
    .flex{
        display: flex;
        justify-content: start;
        gap: 30px;
        width: 100%;
    }
    p{
        font-size: 16px;
        line-height: 1.4;
        font-weight: bold;
        color: #444;
    }
    .table{
        flex: 1;
    }
    table{
        width: 100%;
        border: 1px solid #e1e1e1;
        border-collapse: collapse;
        margin-top: 20px;
    }
    table tr{}
    table tr td{
        border: 1px solid #e1e1e1;
        padding: 7px 0px 5px;
    }
    table tr td:nth-child(1),
    table tr td:nth-child(3){
        background-color: #8caddc;
        color: #fff;
        text-align: center;
        width: 100px;
    }
    table tr td:nth-child(2),
    table tr td:nth-child(4){
        padding-left: 15px;
    }
    h5{
        text-align: right;
        color: #444;
        margin-top: 10px;
    }
    @media (max-width:1000px) {
        .flex{
            flex-direction: column;
        }
        h5{
            text-align: left;
        }
    }
    @media (max-width:700px) {
        table tr{
            display: flex;
            flex-direction: column;
        }
        table tr td{
            width: 100% !important;
            text-align: center;
        }
    }
    @media (max-width:500px) {
        h2{
            font-size: 18px;
            margin-bottom: 10px;
            letter-spacing: -1px;
        }
        p{
            font-size: 12px;
        }
        table{
            margin-top: 0px;
        }
        h5{
            font-size: 10px;
        }
    }
`

export const Bottom = styled.div`
    h2{
        font-size: 20px;
        color: #023885;
        font-family: 'GmarketSansBold';
        display: flex;
        align-items: end;
        gap: 5px;
    }
    .content{
        margin: 50px 0px;
    }
    h2 span{
        color: #000;
        font-family: 'GmarketSansMedium';
    }
    p{
        margin: 10px 0px;
        line-height: 1.4;
    }
    p b{
        font-family: 'GmarketSansBold';
    }
    .content > div{
        margin-top: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
    }
    .content > div img{
        width: 100%;
    }
    @media (max-width:500px) {
        h2{
            flex-direction: column;
            justify-content: start;
            align-items: start;
        }
        .content > div{
            margin-top: 10px;
            grid-template-columns: 1fr;
        }
    }
`