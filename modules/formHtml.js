export function formHtml({user, getListComment}) {
  const result = user.map((el, index) => {
    return `<li class="comment" data-index="${index}" data-comment="${el.text}" data-name="${el.name}">
            <div class="comment-header">
              <div>${el.name}</div>
              <div>${el.date}</div>
            </div>
            <div class="comment-body">
              <div class="comment-text data-index="${index}" data-comment="${el.text}" data-name="${el.name}">
                ${el.text}
              </div>
            </div>
            <div class="comment-footer">
              <div class="likes">
                <span data-cost="${el.likes}" class="likes-counter" ${el.like}>${el.likes}</span>
                <button data-index="${index}" data-active="${el.isLiked}" class="like-button ${el.like}"></button>
              </div>
            </div>
          </li>
        `}).join('');
        
        getListComment.innerHTML = result;
}