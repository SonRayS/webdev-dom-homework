export let token;

export function setToken(newToken) {
    token = newToken;
}

export function getTodos() {

   

      return fetch("https://wedev-api.sky.pro/api/v1/illia-hryn/comments", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          }
      })
      .then((response) => {
          if (response.status === 500) {
              alert("error, try later...");
              return Promise.reject("Server is down");
          } else {
              return response.json();
          }
      })        
}

export function postTodo({name, text, date}) {

    return fetch("https://wedev-api.sky.pro/api/v1/illia-hryn/comments", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            name: name.replaceAll("<", "&lt").replaceAll(">","&gt").replaceAll('"', "&quot;").replaceAll("&", "&amp;"),
            text: text.replaceAll("<", "&lt").replaceAll(">","&gt").replaceAll('"', "&quot;").replaceAll("&", "&amp;"),
            date: date,
            /* forceError: true */
        }),
    })
    .then((response) => {
    
            if (response.status === 500) {
                alert("server is down");
                throw new Error("500");
            } else {
                return response;
            }
    })
    .then((response) => {

        if (response.status === 400) {
            alert("Имя и комментарий должны быть не короче 3 символов");
            throw new Error("error input");
        } else {
            return response;
        }
    })
}

export function sendTodo({url, login, password, userForm, userHideForm}) {

    return fetch(url, ({

        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
                "login": login,
                "password": password
        })
    }))
    .then((response) => {
        
        if (response.status === 400){
                
                throw new Error ("Неправильный логин или пароль");

        } else {

                return response;

        }
    })
    .then((response) => {

        console.log(response);
        return response.json();
        
    })
    .then((response) => {

        console.log(response);
        return response;
        
    })
}

export function sendUserTodo({sendUrl, userLogin, userName, userPassword}) {

        return fetch(sendUrl, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
                "login": userLogin,
                "name": userName,
                "password": userPassword
            }),
        })
        .then((response) => {
            
            if (response.status === 400){
                    
                    console.log("error_______")
                    throw new Error ("Такой пользователь уже зарегистрирован");


            } else {

                    console.log(response);
                    return response.json();

            }
            
        })
}