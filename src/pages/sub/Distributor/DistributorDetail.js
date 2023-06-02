import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getDetailBoard, deleteBoard } from 'api/board.js';

import adminCheck from 'utils/adminCheck';

import Loading from 'components/loding/Loading';

import * as Style from "assets/styleComponent/performance/detail";

const DistributorDetail = () => {
    const { boardPage } = useParams();
    const nav = useNavigate();
    const [readDetail, setReadDetail] = useState(null);
    const boardDel = async () => {
        const data = {
            type: "board_distributor",
            i_board: readDetail.detail.i_board,
        }
        deleteBoard(data);
    }

    useEffect(() => {
        const data = {
            i_board: boardPage,
            boardType: "board_distributor",
        }
        getDetailBoard(data, setReadDetail);
    }, [nav])

    return (
        readDetail === null
            ? <Loading />
            : <Style.Detail>
                <div className="wrap">
                    <h2>총판</h2>
                    <div className="flexBox">
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
                        <Link to="/pages/50/1" className="more">목록</Link>
                    </div>

                    {/* <div className="differentBoard">
                        <ul>
                            <li>
                                <div>다음글</div>
                                <div>
                                    <Link to={
                                        readDetail.next.length <= 0
                                            ? null
                                            : `/community/noticeDetail/${Number(readDetail.next[0].i_board)}`
                                    }>
                                        {
                                            readDetail.next.length <= 0
                                                ? "다음글이없습니다."
                                                : readDetail.next[0].title
                                        }
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>이전글</div>
                                <div>
                                    <Link to={
                                        readDetail.pre.length <= 0
                                            ? null
                                            : `/community/noticeDetail/${Number(readDetail.pre[0].i_board)}`
                                    }>
                                        {
                                            readDetail.pre.length <= 0
                                                ? "이전글이없습니다."
                                                : readDetail.pre[0].title
                                        }
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </Style.Detail>
    );
};

export default DistributorDetail;