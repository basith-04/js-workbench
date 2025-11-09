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
let str=""
const mainEl=document.getElementById("main-el")
for(let i=0;i<posts.length;i++)
{
    str +=`
        <section class="post">
            <header class="post-header"><img src="${posts[i].avatar}" class="post-profile"><div class="post-header-div">
                <p class="post-header-text">  <span>${posts[i].name}</span> <br> ${posts[i].location}</p>

            </div>
            </header>
            <img src="${posts[i].post}" class="post-img">
            <div class="post-content">
                 <ul>
                <li><button><img src="images/icon-heart.png"></button></li>
                <li><img src="images/icon-comment.png"></li>
                <li><img src="images/icon-dm.png"></li>
            </ul>
            <p class="likes" id="like">${posts[i].likes} likes</p>
            <p class="post-description"><span>${posts[i].username}</span> ${posts[i].comment}</p>
            </div>
           
        </section>
    
    
    `
}
mainEl.innerHTML=str

