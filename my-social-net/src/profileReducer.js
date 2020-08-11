const profileReducer = (state, action) => {
    if (action.type === "ADD-POST") {
        let newId = state.posts.length + 1;
        let newLikes = 0;
        let newPost = {
            id: newId,
            text: action.newText,
            likes: newLikes,
            likeClick: 0
        };
        state.posts.push(newPost);
    } else if (action.type === "ADD-LIKE") {
        for (let k of state.posts) {
            if (k.text == action.clickPost.text) {
                if (k.likeClick == 0) {
                    k.likes += 1;
                    k.likeClick = 1;
                } else {
                    k.likes -= 1;
                    k.likeClick = 0;
                }
            }
        }
    }
return state;
}

export default profileReducer;