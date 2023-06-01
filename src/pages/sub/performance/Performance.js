import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getBoard } from 'api/board.js';

import adminCheck from 'utils/adminCheck'

import Paging from 'components/board/Paging';
import Loading from 'components/loding/Loading';

import * as Style from "assets/styleComponent/performance/common";


const Performance = () => {
    const nav = useNavigate();
    const { boardPage } = useParams();
    const [boardList, setBoardList] = useState(null);

    useEffect(() => {
        const data = {
            boardPage: boardPage,
            boardType: "board_performance"
        }
        getBoard(data, setBoardList);
    }, [nav])


    return (
        boardList === null
            ? <Loading />
            : <Style.Container>
                <div className="wrap">
                    <h2>납품실적</h2>

                    <div className="flexBox">
                        {adminCheck(false) && <Link className='write' to={"/community/write"}>글쓰기</Link>}
                    </div>

                    {
                        boardList.list.length > 0
                            ? boardList.list.map((a, i) => {
                                return (
                                    <Style.Board>
                                        <ul className='title'>
                                            <li>No.</li>
                                            <li>제목</li>
                                            {/* <li>글쓴이</li> */}
                                            <li>작성일</li>
                                            {/* <li>조회수</li> */}
                                        </ul>
                                        <ul key={i} className='list'>
                                            <li>{a.i_board}</li>
                                            <li><Link to={`/pages/PerformanceDetail/${a.i_board}`}>{a.title}</Link></li>
                                            {/* <li>{a.user_id}</li> */}
                                            <li>{a.create_date}</li>
                                            {/* <li>{a.view_up}</li> */}
                                        </ul>
                                    </Style.Board>
                                )
                            })
                            : <Style.NonBoard>
                                <p>등록된 게시글이 없습니다</p>
                            </Style.NonBoard>
                    }


                    <Paging boardPage={boardPage} boardLength={boardList?.count.page_count} url={"/pages/30"} />
                </div>
            </Style.Container>
    );
};


export default Performance;