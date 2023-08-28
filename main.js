    
    import { getTodos } from "./modules/api.js";
    import { postTodo } from "./modules/api.js";
    import { sTime } from "./modules/commentTime.js";
    import { myTime } from "./modules/commentTime.js";
    import { formHtml } from "./modules/formHtml.js";
    import { surfacing } from "./modules/replyComment.js";
    import { handerLike } from "./modules/likeBtn.js";

    /* ------------------------------------------------------------------
    *
                                getElementById
    *
    __________________________________________________________________ */

    const sendButton = document.getElementById("buttonSend");
    const getListComment = document.getElementById("listComment");
    const getName = document.getElementById("inputGetName");
    const getComment = document.getElementById("inputGetComment");
    const hideSendForm = document.getElementById("hideForm");
    const hideTextForm = document.getElementById("hideText");
    
  /* ------------------------------------------------------------------
  *
                                getListComponent
  *
  __________________________________________________________________ */

  function getListComponent() {

      hideSendForm.style.display = "none";
      hideTextForm.style.display = "flex";

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
          
          console.log(responseData);
          user = appComment;
          render();
          hideTextForm.style.display = "none";
          hideSendForm.style.display = "flex";
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
                getListComment
            })
            
            handerLike({
              user,
              render
            });

            surfacing({
              getComment
            });
  }

    render();


/* ------------------------------------------------------------------
*
                                    SEND
*
__________________________________________________________________ */

const sendBtn = () => {

        hideSendForm.style.display = "none";
        hideTextForm.style.display = "flex";
      
        if (getName.value != '' && getComment.value != '') {
          

            postTodo({
                name: getName.value,
                text: getComment.value,
                date: myTime()
            })
            .then((response) => {
                return getListComponent();
            })
            .then(() => {
                hideTextForm.style.display = "none";
                getName.value = "",
                getComment.value = "";
                hideSendForm.style.display = "flex";
            })
            .catch((error) => {
                if (error.message == 500){
                    console.log(error);
                    hideTextForm.style.display = "none";
                    hideSendForm.style.display = "flex";
                    sendBtn();
                } else if (error.message = 400) {
                    console.log('Type > 2 symbol: ',error);
                    hideTextForm.style.display = "none";
                    hideSendForm.style.display = "flex";
                }
            });
        }
}

sendButton.addEventListener("click", sendBtn);