    
    import { getTodos } from "./modules/api.js";
    import { postTodo } from "./modules/api.js";
    import { sTime } from "./modules/commentTime.js";
    import { myTime } from "./modules/commentTime.js";
    import { formHtml } from "./modules/formHtml.js";
    import { surfacing } from "./modules/replyComment.js";
    import { handerLike } from "./modules/likeBtn.js";
    import { getElement } from "./modules/getElementById.js";
    import { renderLogin } from "./modules/author.js";
    import { renderReg } from "./modules/registration.js";

  /* ------------------------------------------------------------------
  *
                                getListComponent
  *
  __________________________________________________________________ */

  const getComment = document.getElementById("inputGetComment");


  function getListComponent() {

    getElement().hideSendForm.style.display = "none";
    getElement().hideTextForm.style.display = "flex";

      getTodos().then((responseData) => {
        
          const appComment = responseData.comments.map((comment) => {
 
          return {

                  name: comment.author.name,
                  date: sTime({

                            date: comment.date

                        }),
                  text: comment.text,
                  likes: comment.likes,
                  isLiked: false,
              }
          })
          
          //console.log(responseData);
          user = appComment;
          render();
          getElement().hideTextForm.style.display = "none";
      })
      .catch((error) => {
        alert("Кажется, у вас сломался интернет, попробуйте позже");
        console.log(error);
      });

  }
  
  getListComponent();

 

  let user = [];

/* ------------------------------------------------------------------
*
                                 RENDER
*
__________________________________________________________________ */


function render() {

            formHtml({
              user,
              getListComment: getElement().getListComment
            })
            
            handerLike({
              user,
              render
            });

            surfacing({
              getComment: getElement().getComment
            });
  }

  getElement().authorUser.addEventListener("click", () => {

      listComment.style.display = "none";
      authorText.style.display = "none";
      renderLogin({ getListComponent,
                    renderReg
                 });
      
  })  



  getElement().btnReg.addEventListener("click", () => {
      listComment.style.display = "none";
      authorText.style.display = "none";
      btnReg.style.display = "none";
      renderReg({ renderLogin,
                  renderReg,
                  getListComponent });
  })

/* ------------------------------------------------------------------
*
                                    SEND
*
__________________________________________________________________ */

const sendBtn = () => {

        getElement().hideSendForm.style.display = "none";
        getElement().hideTextForm.style.display = "flex";
      
        if (getElement().getName.value != '' && getElement().getComment.value != '') {
          

            postTodo({
                name: getElement().getName.value,
                text: getElement().getComment.value,
                date: myTime()
            })
            .then((response) => {
                return getListComponent();
            })
            .then(() => {
                getElement().hideTextForm.style.display = "none";
                getElement().getName.value = "",
                getElement().getComment.value = "";
                getElement().hideSendForm.style.display = "flex";
            })
            .catch((error) => {
                if (error.message == 500){
                    console.log(error);
                    getElement().hideTextForm.style.display = "none";
                    getElement().hideSendForm.style.display = "flex";
                    /* sendBtn(); */
                } else if (error.message = 400) {
                    console.log('Type > 2 symbol: ',error);
                    getElement().hideTextForm.style.display = "none";
                    getElement().hideSendForm.style.display = "flex";
                }
            });
        }
}

getElement().sendButton.addEventListener("click", sendBtn);