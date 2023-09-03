import { sendUserTodo } from "./api.js";
import { getElement } from "./getElementById.js";

export function renderReg ({ renderLogin, getListComponent, renderReg}) {

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

        getElement().regElement.innerHTML = registrationHtml;

        const sendUrl = "https://wedev-api.sky.pro/api/user"

        let token = "";

        getElement().goToReg.addEventListener("click", () => {

                renderLogin({ getListComponent, renderReg })

        })

        getElement().sendBtn.addEventListener("click", () => {

                if (getElement().userLogin.value != '' && getElement().userName.value != '' && getElement().userPassword.value != '') {

                        sendUserTodo({
                                sendUrl: sendUrl,
                                userLogin: getElement().userLogin.value.replaceAll("<", "&lt").replaceAll(">","&gt").replaceAll('"', "&quot;").replaceAll("&", "&amp;"),
                                userName: getElement().userName.value.replaceAll("<", "&lt").replaceAll(">","&gt").replaceAll('"', "&quot;").replaceAll("&", "&amp;"),
                                userPassword: getElement().userPassword.value
                        })
                        .then((response) => {

                                console.log(response)
                                console.log(response.user.token)
                                alert("Ваш аккаунт успешно создан")
                        })
                        .then(() => {
                                renderReg({ renderLogin,
                                            renderReg,
                                            getListComponent 
                                          });
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