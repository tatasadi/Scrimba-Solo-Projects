const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsEl = document.querySelector(".posts");

renderPosts();

function renderPosts(){
    postsEl.innerHTML = "";
    let allPostEl = "";
    for(let i=0; i < posts.length; i++){
        let post = posts[i];

        const postEl = `<section class="post">
                <div class="container">
                    <div class="post-header">
                        <img class="avatar post-avatar" src="${post.avatar}" />
                        <div>
                            <div class="post-name bold">${post.name}</div>
                            <div class="post-location">${post.location}</div>
                        </div>
                    </div>
                    <img class="post-image" src="${post.post}" ondblclick="like(${i})" />
                    <div class="post-footer">
                        <div class="post-actions">
                            <img class="icon-heart" src="images/icon-heart.png" onclick="like(${i})"/>
                            <img class="icon-comment" src="images/icon-comment.png" />
                            <img class="icon-dm" src="images/icon-dm.png" />
                        </div>
                        <div class="post-likes-container bold">
                            <span class="post-likes">${post.likes}</span> likes
                        </div>
                        <div class="post-comments">
                            <div class="post-comment-container">
                                <span class="post-username bold">${post.username}</span>
                                <span class="post-comment">${post.comment}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`
        
        allPostEl += postEl;    
    }

    postsEl.innerHTML = allPostEl;
}

function like(postIndex){
    posts[postIndex].likes += 1;
    renderPosts(); 
}



