import { getElement } from "./getElementById.js";
import { sendTodo, setToken, token} from "./api.js";

export function renderLogin ({ getListComponent, renderReg }) {
        const appElement = document.getElementById("app");
        const loginHtml = `
        <div class="container">
                <div class="userRegForm" id="userRegForm">

                        <input
                        id = "sendUserLogin"
                        type="text"
                        class="userDate"
                        placeholder="login"
                        />

                        <input
                        id = "sendUserPassword"
                        type="password"
                        class="userDate"
                        placeholder="password"
                        />


                <button id="sendUserDate" class="userDate userBtn">Войти</button>


                </div>
        </div>`;

        appElement.innerHTML = loginHtml;

        const sendUserLogin = document.getElementById("sendUserLogin");
        const sendUserPassword = document.getElementById("sendUserPassword");
        const sendUserDate = document.getElementById("sendUserDate");
        const userRegForm = document.getElementById("userRegForm");
        const userHideForm = document.getElementById("userHideForm");

        const sendDate = "https://wedev-api.sky.pro/api/user/login";

        btnReg.addEventListener("click", () => {
                app.style.display = "none";
                renderReg({ renderLogin });
        })
       

        sendUserDate.addEventListener("click", () => {

                if(sendUserLogin.value != '' && sendUserPassword != '') {

                        
                        sendTodo({

                                url: sendDate,
                                login: sendUserLogin.value,
                                password: sendUserPassword.value,
                                userForm: userRegForm,
                                userHideForm: userHideForm

                        })
                        .then((response) => {

                                setToken(response.user.token);
                                console.log(token);
                                return response;
                        })
                        .then((response) => {

                                app.style.display = "none";
                                getElement().btnReg.style.display = "none";
                                getElement().appReg.style.display = "none";
                                listComment.style.display = "flex";
                                getElement().getName.classList.add("error");
                                getElement().getName.value = response.user.name;
                                getListComponent(); 
                                getElement().hideSendForm.style.display = "flex";

                        })
                        .catch((error) => {
                               
                                alert("Неправильный логин или пароль");
                                console.log(error)   

                        })

                } else {

                        console.log('вы не заполнили все поля !')

                }
        })
}


