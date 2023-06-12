import axios from "./axios";
import { handleApiError, handleConnectionError } from "./handleError";

// 게시글 가져오기
const getBoard = async (data, success) => {
    try {
        const res = await axios.post("/board/sel_board", data);
        handleConnectionError(res.data);
        success(res.data);
    } catch (error) {
        handleApiError(error);
    }
}

// 게시글 내용 가져오기
const getDetailBoard = async (data, success) => {
    try {
        const res = await axios.post("/board/detail_board", data);
        handleConnectionError(res.data);
        success(res.data);
    } catch (error) {
        handleApiError(error);
    };
}

// 게시글 작성
const addBoard = async (data) => {
    try {
        const res = await axios.post("/editor/ins_editor_data", data);
        handleConnectionError(res.data);
        if (res.data.result === "success") {
            alert("등록완료");
            switch (data.type) {
                case "product":
                    window.location.replace("/admin/product/1");
                    break;
                case "board_performance":
                    window.location.replace(`/pages/30/1`);
                    break;
                case "board_agency":
                    window.location.replace(`/pages/40/1`);
                    break;
                case "board_distributor":
                    window.location.replace(`/pages/50/1`);
                    break;
                case "review":
                    window.location.replace(`/community/${data.type}/all/1`);
                    break;

                default:
                    window.location.replace(`/community/${data.type}/1`);
                    break;
            }
        } else if (res.data.result === "fail") {
            alert("알 수 없는 에러로 등록실패 했습니다.");
        }
    } catch (error) {
        handleApiError(error);
    }
}

// 게시글 삭제
const deleteBoard = async (data) => {
    try {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            const res = await axios.post("/board/del_board", data);
            handleConnectionError(res.data);
            alert("삭제되었습니다.");
            switch (data.type) {
                case "product":
                    window.location.replace("/admin/product/1");
                    break;
                case "board_performance":
                    window.location.replace(`/pages/30/1`);
                    break;
                case "board_agency":
                    window.location.replace(`/pages/40/1`);
                    break;
                case "board_distributor":
                    window.location.replace(`/pages/50/1`);
                    break;
                case "review":
                    window.location.replace(`/community/${data.type}/all/1`);
                    break;

                default:
                    window.location.replace(`/community/${data.type}/1`);
                    break;
            }
        }
    } catch (error) {
        handleApiError(error);
    }
}

//문의
const sendInquiry = async (data) => {
    try {
        const res = await axios.post("/board/send_mailer", data);
        handleConnectionError(res.data);
        // console.log(res);
        alert("문의메일이 전송되었습니다.");
        window.location.replace(`/pages/60`);
    } catch (error) {
        handleApiError(error);
    }
}
export { getBoard, getDetailBoard, addBoard, deleteBoard, sendInquiry };