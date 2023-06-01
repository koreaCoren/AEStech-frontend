import React, { useState, useEffect } from 'react';
import { sendInquiry } from 'api/board.js';
import styled from 'styled-components';

export default function Inquiry() {
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [fax, setFax] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [addr, setAddr] = useState("");
    const [product, setProduct] = useState("");
    const [tellMe, setTellMe] = useState("");
    const [checkNum, setCheckNum] = useState("");
    const [code, setCode] = useState();

    useEffect(() => {
        let rdNum = createRandomNum();
        setCode(rdNum);
    },[])

    const createRandomNum = () => {
        let rdNum = Math.floor((Math.random()*8999)+1000);
        return rdNum;
    }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch(name){
            case "name":
                setName(value);
                break;
            case "tel":
                setTel(value);
                break;
            case "fax":
                setFax(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "addr":
                setAddr(value);
                break;
            case "product":
                setProduct(value);
                break;
            case "tellMe":
                setTellMe(value);
                break;
            case "checkNum":
                setCheckNum(value);
                break;
        }

    }
    const sendData = () => {
        if(name==""||tel==""||phone==""||email==""||tel==""){
            return alert("필수 정보를 입력해주세요"); 
        } else if(code !== Number(checkNum)){
            return alert("보안코드가 틀렸습니다. 다시 확인해주세요.");
        } else {
            const data = {
                name : name,
                tel : tel,
                fax : fax,
                phone : phone,
                email : email,
                addr : addr,
                product : product,
                tellMe : tellMe
            }
            sendInquiry(data);
        }
    }

  return (
    <>
        <Wrap>
            <Title>제휴문의</Title>
            <Form>
                <label htmlFor="name" className='name'>
                    <p>회사(담당자명)<span>*</span></p>
                    <input type="text" id='name' name='name' value={name} onChange={onChange} />
                </label>
                <div>
                    <label htmlFor="tel" className='tel'>
                        <p>전화번호<span>*</span></p>
                        <input type="text" id='tel' name='tel' value={tel} onChange={onChange}/>
                    </label>
                    <label htmlFor="fax" className='fax'>
                        <p>팩스번호</p>
                        <input type="text" id='fax' name='fax' value={fax} onChange={onChange}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="phone" className='phone'>
                        <p>핸드폰번호<span>*</span></p>
                        <input type="text" id='phone' name='phone' value={phone} onChange={onChange}/>
                    </label>
                    <label htmlFor="email" className='email'>
                        <p>이메일<span>*</span></p>
                        <input type="text" id='email' name='email' value={email} onChange={onChange}/>
                    </label>
                </div>
                <label htmlFor="addr" className='addr'>
                    <p>주소</p>
                    <input type="text" id='addr' name='addr' value={addr} onChange={onChange}/>
                </label>
                <label htmlFor="product" className='product'>
                    <p>제품명</p>
                    <input type="text" id='product' name='product' value={product} onChange={onChange}/>
                </label>
                <label htmlFor="tellMe" className='tellMe'>
                    <p>하실말씀<span>*</span></p>
                    <input type="text" id='tellMe' name='tellMe' value={tellMe} onChange={onChange}/>
                </label>
                <label htmlFor="checkNum" className='checkNum'>
                    <p>보안코드입력<span>*</span></p>
                    <span>{code}</span>
                    <input type="text" id='checkNum' name='checkNum' value={checkNum} onChange={onChange}/>
                </label>
                <div className='btn'>
                    <button
                    type='button'
                    onClick={() => {
                        sendData();
                    }}>등록하기</button>
                </div>
            </Form>
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
@media screen and (max-width:500px) {
    font-size: 36px;
}
`
const Form = styled.form`
    padding:10px 5%;
    p{
        font-size: 20px;
        padding-bottom: 30px;
        font-weight: bold;
    }
    p>span{
        color:red;
        font-size: 20px;
        padding-left: 10px;
    }
    >div{
        display: flex;
        gap: 5%;
        width: 100%;
    }
    >div label{
        flex: 1;
    }
    input[type='text']{
        width: 100%;
        border: 0px solid black;
        border-bottom: 1px solid rgb(220,220,220);
        padding : 10px 10px;
        margin-bottom: 30px;
    }
    input[type='text']:focus{
        border: 2px solid rgb(0,102,255);
        border-radius: 5px;
    }
    .checkNum > span{
        color:red;
        font-size: 18px;
        padding-right: 10px;
    }
    .checkNum > input[type='text']{
        width: 20%;
        padding: 5px;
    }
    .btn{
        padding: 140px 0 60px 0;
        display:flex;
        justify-content: center;
    }
    .btn > button{
        font-size: 17px;
        padding: 20px 50px;
        background: rgb(0,102,255);
        border-radius: 30px;
        color:white;
    }
    @media screen and (max-width:500px) {
        p{
        font-size: 16px;
        }
        p>span{
            font-size: 16px;
        }
        .btn{
        padding: 30px 0 60px 0;
    }
    }
`;