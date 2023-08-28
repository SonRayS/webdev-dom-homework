export function getElement() {

        const sendButton = document.getElementById("buttonSend");
        const getListComment = document.getElementById("listComment");
        const getName = document.getElementById("inputGetName");
        const getComment = document.getElementById("inputGetComment");
        const hideSendForm = document.getElementById("hideForm");
        const hideTextForm = document.getElementById("hideText");
        const comments = document.querySelectorAll(".comment");
        const authorUser = document.getElementById("authorUser");
        const btnReg = document.getElementById("btnReg");
        const appReg = document.getElementById("appReg");

        const module = {
                sendButton: sendButton,
                getListComment: getListComment,
                getName: getName,
                getComment: getComment,
                hideSendForm: hideSendForm,
                hideTextForm: hideTextForm,
                comments: comments,
                authorUser: authorUser,
                btnReg: btnReg,
                appReg: appReg
        }
        
        return module
}