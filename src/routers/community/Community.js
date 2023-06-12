import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Notice from 'pages/community/Notice';
import NoticeDetail from 'pages/community/NoticeDetail';
import NoticeWrite from 'pages/community/NoticeWrite';
import PerformanceWrite from 'pages/sub/performance/PerformanceWrite';
import AgencyWrite from 'pages/sub/agency/AgencyWrite';
import DistributorWrite from 'pages/sub/distributor/DistributorWrite';

const Community = () => {
    return (
        <>
            <Routes>
                <Route path='/notice/:boardPage' element={<Notice />} />
                <Route path='/noticeDetail/:boardPage' element={<NoticeDetail />} />
                <Route path='/write' element={<NoticeWrite />} />
                <Route path='/performance/write' element={<PerformanceWrite />} />
                <Route path='/agency/write' element={<AgencyWrite />} />
                <Route path='/distributor/write' element={<DistributorWrite />} />
            </Routes>
        </>
    );
};

export default Community;