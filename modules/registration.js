import { sendUserTodo } from "./api.js";
import { getElement } from "./getElementById.js";

export function renderReg ({ renderLogin, getListComponent, renderReg}) {
        const regElement = document.getElementById("appReg")
        const registrationHtml = `
        <div class="container">
                <div class="userRegForm">

                        <input
                        id = "userLogin"
                        type="text"
                        class="userDate"
                        placeholder="login"
                        />

                        <input
                        id = "userName"
                        type="text"
                        class="userDate"
                        placeholder="name"
                        />

                        <input
                        id = "userPassword"
                        type="password"
                        class="userDate"
                        placeholder="password"
                        />

                        <button id="sendBtn" class="userDate userBtn">Зарегистрироваться</button>
                        <button id="goToReg" class="userBtn">Перейти к авторизации</button>

                </div>
                <footer>
                        <button class="userBtn"><a href="index.html" class="reg">Вернуться к комментариям</a></button>
                </footer>
        </div>`

        regElement.innerHTML = registrationHtml;

        const sendUrl = "https://wedev-api.sky.pro/api/user"

        const userLogin = document.getElementById("userLogin");
        const userName = document.getElementById("userLogin");
        const userPassword = document.getElementById("userLogin");
        const sendBtn = document.getElementById("sendBtn");
        const goToReg = document.getElementById("goToReg");
        let token = "";

        goToReg.addEventListener("click", () => {

                renderLogin({ getListComponent, renderReg })

        })

        sendBtn.addEventListener("click", () => {

                if (userLogin.value != '' && userName.value != '' && userPassword.value != '') {

                        sendUserTodo({
                                sendUrl: sendUrl,
                                userLogin: userLogin.value.replaceAll("<", "&lt").replaceAll(">","&gt").replaceAll('"', "&quot;").replaceAll("&", "&amp;"),
                                userName: userName.value.replaceAll("<", "&lt").replaceAll(">","&gt").replaceAll('"', "&quot;").replaceAll("&", "&amp;"),
                                userPassword: userPassword.value
                        })
                        .then((response) => {

                                console.log(response)
                                console.log(response.user.token)
                                alert("Ваш аккаунт успешно создан")
                        })
                        .catch((error) => {

                                alert("Такой пользователь уже зарегистрирован");
                                console.log(error)   

                        })
                } else {
                        alert("Для регистрации необходимо заполнить все поля !")
                }
        })
}