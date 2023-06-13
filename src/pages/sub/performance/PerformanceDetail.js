import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getDetailBoard, deleteBoard } from 'api/board.js';

import adminCheck from 'utils/adminCheck';

import Loading from 'components/loding/Loading';

import * as Style from "assets/styleComponent/performance/detail";

const PerformanceDetail = () => {
    const { boardPage } = useParams();
    const nav = useNavigate();
    const [readDetail, setReadDetail] = useState(null);
    const boardDel = async () => {
        const data = {
            type: "board_performance",
            i_board: readDetail.detail.i_board,
        }
        deleteBoard(data);
    }

    useEffect(() => {
        const data = {
            i_board: boardPage,
            boardType: "board_performance",
        }
        getDetailBoard(data, setReadDetail);
    }, [nav])

    return (
        readDetail !== null
            ? <Loading />
            : <Style.Detail>
                <div className="wrap">
                    <div className="flexBox">
                        <h2>납품실적</h2>
                        {adminCheck(false) && <button className='delButton' onClick={boardDel}>삭제</button>}
                    </div>
                    <div className="title">
                        <ul>
                            <li>
                                <div>NO.{readDetail.detail.i_board}</div>
                                <div>{readDetail.detail.title}</div>
                                <div className='title_pc'>20{readDetail.detail.create_date.replaceAll('/', '-')}</div>
                            </li>
                        </ul>
                    </div>

                    <div className="content">
                        <p dangerouslySetInnerHTML={{ __html: readDetail.detail.content }}></p>
                    </div>
                    <div className='button'>
                        <Link to="/pages/30/1" className="more">목록</Link>
                    </div>
                </div>
            </Style.Detail>
    );
};

export default PerformanceDetail;