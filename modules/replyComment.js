/* ------------------------------------------------------------------

                                 surfacing
                                 
__________________________________________________________________ */

export function surfacing({ getComment }) {
    const comments = document.querySelectorAll(".comment");

    for (const el of comments) {
        el.addEventListener("click", () => {
            const commentName = el.dataset.name;
            const commentText = el.dataset.comment;
            getComment.value = `> ${commentText}
                ${commentName},`;
        });
    }
}
