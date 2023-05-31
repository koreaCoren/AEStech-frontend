import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import moment from "moment/moment";

import { tokenCheck } from "api/token";
import { updateUserAccessCount } from "api/user";

import Header from "components/common/Header";
import Footer from "components/common/Footer";
import Error from "components/error/Error";
import NotFoundPage from "components/error/NotFoundPage";
import Intro from "pages/sub/intro/1010"
import Come from "pages/sub/intro/1020"
import Product_01 from "pages/sub/product/Product_01";
import Inquiry from "pages/sub/inquiry/Inquiry";

import Main from "pages/main/Main";
import Login from "pages/login/Login";
import Register from "pages/login/Register";
import Admin from "routers/Admin";
import Community from "./community/Community";


import "assets/css/common/common.css";

function App() {
    const nav = useNavigate();
    const location = useLocation();
    const [header, setHeader] = useState(true);
    const [user, setUser] = useState();
    const [orderData, setOrderData] = useState();
    const [cookies, setCookies] = useCookies();

    // 방문자 체크
    const accessCheck = async () => {
        const expires = moment().add('10', 'm').toDate();
        if (cookies.userCount !== 'true') {
            setCookies('userCount', true, { expires });
            updateUserAccessCount("나 등장~!");
        }
    }

    // 어드민페이지, 에러페이지 들어오면 헤더 삭제
    // 메인아니면 헤더 색깔 변경
    const pageCheck = () => {
        if (/.*admin.*/.test(location.pathname) || /.*error.*/.test(location.pathname)) {
            setHeader(false);
        } else if (/.*pages.*/.test(location.pathname)) {
            setHeader("pages");
        } else {
            setHeader(true);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        accessCheck();
        pageCheck();
        tokenCheck(setUser);
    }, [nav])
    return (
        <>
            {header && <Header user={user} header={header}></Header>}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/pages/1010" element={<Intro />} />
                <Route path="/pages/1020" element={<Come />} />
                <Route path="/pages/2010" element={<Product_01 />} />
                <Route path="/pages/2020" element={2020} />
                <Route path="/pages/2030" element={2030} />
                <Route path="/pages/2040" element={2040} />
                <Route path="/pages/30" element={30} />
                <Route path="/pages/40" element={40} />
                <Route path="/pages/50" element={50} />
                <Route path="/pages/60" element={<Inquiry />} />
                <Route path="/pages/70" element={70} />

                <Route path="/admin/*" element={<Admin />} />
                <Route path='/login' element={<Login />} />
                <Route path='/loginRegister' element={<Register />} />
                <Route path="/community/*" element={<Community />} />

                {/* 에러 날때 밑에 파일로 보내줌 */}
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            {header && <Footer></Footer>}
        </>
    );
}

export default App;
