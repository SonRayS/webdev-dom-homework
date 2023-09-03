import { getElement } from "./getElementById.js";
import { sendTodo, setToken, token} from "./api.js";
import { saveUserToLocalStorage } from "./localStorage.js";
import { removeUserStorage } from "./localStorage.js";

export function renderLogin ({ getListComponent, renderReg }) {

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

        getElement().appElement.innerHTML = loginHtml;

        const sendDate = "https://wedev-api.sky.pro/api/user/login";

        btnReg.addEventListener("click", () => {
                app.style.display = "none";
                renderReg({ renderLogin });
        })
       

        getElement().sendUserDate.addEventListener("click", () => {

                if(getElement().sendUserLogin.value != '' && getElement().sendUserPassword != '') {

                        
                        sendTodo({

                                url: sendDate,
                                login: getElement().sendUserLogin.value,
                                password: getElement().sendUserPassword.value,
                                userForm: getElement().userRegForm,
                                userHideForm: getElement().userHideForm

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

                                return response;

                        })
                        .then((response) => {

                                const user = response;
                                saveUserToLocalStorage(user);
                                getElement().outBtn.style.display = "flex";
                                getElement().outBtn.addEventListener("click", () => {
                                  removeUserStorage(user);
                                })

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

