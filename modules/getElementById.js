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
        const appElement = document.getElementById("app");
        const sendUserLogin = document.getElementById("sendUserLogin");
        const sendUserPassword = document.getElementById("sendUserPassword");
        const sendUserDate = document.getElementById("sendUserDate");
        const userRegForm = document.getElementById("userRegForm");
        const userHideForm = document.getElementById("userHideForm");
        const regElement = document.getElementById("appReg");
        const userLogin = document.getElementById("userLogin");
        const userName = document.getElementById("userLogin");
        const userPassword = document.getElementById("userLogin");
        const sendBtn = document.getElementById("sendBtn");
        const goToReg = document.getElementById("goToReg");
        const outBtn = document.getElementById("outBtn");


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
                appReg: appReg,
                appElement: appElement,
                sendUserLogin: sendUserLogin,
                sendUserPassword: sendUserPassword,
                sendUserDate: sendUserDate,
                userRegForm: userRegForm,
                userHideForm: userHideForm,
                regElement: regElement,
                userLogin: userLogin,
                userName: userName,
                userPassword: userPassword,
                sendBtn: sendBtn,
                goToReg: goToReg,
                outBtn: outBtn
        }
        
        return module
}