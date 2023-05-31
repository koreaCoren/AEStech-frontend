import styled from "styled-components";

export const Container = styled.div`
    padding: 150px 0px;
    .list{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 15px;
        text-align: center;
        margin-top: 30px;
    }
    .list li{}
    .list li a > div{
        position: relative;
    }
    .list li a > div > div{
        position: absolute;
        display: none;
    }
` 