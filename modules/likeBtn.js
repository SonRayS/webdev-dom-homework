export function handerLike({user, render}) {

        const btn = document.querySelectorAll(".like-button");
    
        for (const el of btn) {
    
            el.addEventListener('click', (event) => {
    
                  event.stopPropagation();
                    
                  const index = el.dataset.index;
    
                  if (user[index].isLiked === false) {
                    ++user[index].likes
                    user[index].isLiked = true 
                    user[index].like = '-active-like'
                  } else {
                    --user[index].likes
                    user[index].isLiked = false
                    user[index].like = ''
                  }
                    
              render();
    
            })
        }
    }