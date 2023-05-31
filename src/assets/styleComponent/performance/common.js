import styled from "styled-components";

export const Container = styled.div`
    padding: 145px 0 57px 0;
    min-height: 734px;
    h2{
        font-size: 40px;
        font-weight: bold;
        font-family: 'GmarketSansBold';
        border-bottom: 1px solid #000;
        padding-bottom: 50px;
    }

    .write{
        padding: 5px 20px;
        border-radius: 5px;
        background-color: #444;
        color: #fff;
        font-size: 16px;
    }

    @media (max-width:500px) {
        input{
            width: 200px;
        }
    }
    
`
export const Board = styled.div`

    ul{
        display: grid;
        grid-template-columns: 18% 62% 1fr;
        height: 100px;
        
    }
    ul li{
        display: flex;
        align-items: center;
        font-size: 17px;
        font-family: 'GmarketSansBold';
        a{
            font-size: 17px;
        }
    }
    
    ul:not(:first-child) li{
        font-family: 'GmarketSansMedium';
    }
    ul li:not(:nth-child(2)){        
        justify-content: center;        
    }  
    
    ul li:nth-child(2){
        justify-content: flex-start;
    }
    ul:not(:first-child) li:nth-child(2){
        padding-left: 50px;
    }
    

    ul:first-child li{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    .title{
        border-bottom: 1px solid #aaaaaa70;
    }

    .title li{
        line-height: 40px;
        text-align: center;
    }

    .list:not(:nth-child(1)){
        border-bottom: 1px solid #aaaaaa80;
    }

    .list li:not(:nth-child(2)){
        text-align: center;
    }

    .list li,.list a{
        line-height: 40px;
    }

    p{
        text-align: center;
        line-height: 200px;
        border-bottom: 1px solid #aaa;
    }

    @media (max-width:700px) {
        ul{
            grid-template-columns: 50px 1fr 100px;
        }
        .title li:nth-child(4),
        .title li:nth-child(5),
        .list li:nth-child(4),
        .list li:nth-child(5){
            display: none;
        }
    }
`
export const NonBoard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 410px;
    p{
        text-align: center;
        line-height: 200px;
        font-size: 20px;
    }
`