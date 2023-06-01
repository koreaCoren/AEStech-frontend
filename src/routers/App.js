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
import Product_01_1 from "pages/sub/product/Product_01_1";
import Product_01_2 from "pages/sub/product/Product_01_2";
import Product_01_3 from "pages/sub/product/Product_01_3";
import Product_01_4 from "pages/sub/product/Product_01_4";
import Product_01_5 from "pages/sub/product/Product_01_5";
import Product_01_6 from "pages/sub/product/Product_01_6";
import Product_02 from "pages/sub/product/Product_02";
import Product_02_1 from "pages/sub/product/Product_02_1";
import Product_03 from "pages/sub/product/Product_03";
import Product_04 from "pages/sub/product/Product_04";
import Product_04_1 from "pages/sub/product/Product_04_1";
import Inquiry from "pages/sub/inquiry/Inquiry";

import Main from "pages/main/Main";
import Login from "pages/login/Login";
import Register from "pages/login/Register";
import Admin from "routers/Admin";
import Community from "./community/Community";


import "assets/css/common/common.css";
import Performance from "pages/sub/performance/Performance";
import PerformanceDetail from "pages/sub/performance/PerformanceDetail";
import Agency from "pages/sub/Agency/Agency";
import AgencyDetail from "pages/sub/Agency/AgencyDetail";
import Distributor from "pages/sub/Distributor/Distributor";
import DistributorDetail from "pages/sub/Distributor/DistributorDetail";

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
                <Route path="/pages/2010/1" element={<Product_01_1 />} />
                <Route path="/pages/2010/2" element={<Product_01_2 />} />
                <Route path="/pages/2010/3" element={<Product_01_3 />} />
                <Route path="/pages/2010/4" element={<Product_01_4 />} />
                <Route path="/pages/2010/5" element={<Product_01_5 />} />
                <Route path="/pages/2010/6" element={<Product_01_6 />} />
                <Route path="/pages/2020" element={<Product_02 />} />
                <Route path="/pages/2020/1" element={<Product_02_1 />} />
                <Route path="/pages/2030" element={<Product_03 />} />
                <Route path="/pages/2040" element={<Product_04 />} />
                <Route path="/pages/2040/1" element={<Product_04_1 />} />
                <Route path="/pages/30/:boardPage" element={<Performance />} />
                <Route path="/pages/40/:boardPage" element={<Agency />} />
                <Route path="/pages/50/:boardPage" element={<Distributor />} />
                <Route path="/pages/60" element={<Inquiry />} />

                <Route path="/pages/performanceDetail/:boardPage" element={<PerformanceDetail />} />
                <Route path="/pages/agencyDetail/:boardPage" element={<AgencyDetail />} />
                <Route path="/pages/distributorDetail/:boardPage" element={<DistributorDetail />} />

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
