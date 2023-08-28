export function getTodos() {

      return fetch("https://wedev-api.sky.pro/api/v1/illia-hryn/comments", {
          method: "GET",
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
        body: JSON.stringify({
            name: name.replaceAll("<", "&lt").replaceAll(">","&gt").replaceAll('"', "&quot;").replaceAll("&", "&amp;"),
            text: text.replaceAll("<", "&lt").replaceAll(">","&gt").replaceAll('"', "&quot;").replaceAll("&", "&amp;"),
            date: date,
            forceError: true
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