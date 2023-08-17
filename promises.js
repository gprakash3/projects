//creating empty object
const posts = [];

//create createPost() which add POST in posts
function createPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST'});
            resolve()
        }, 1000)
    }) 
}

//create deletePost()  - will delete last post
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 4000)
    })
}

//initializing user
const user={
    username:"ram",
    lastactivitytime:'17 Aug'
}

//updating last activity time
const updateLastUserActivityTime = 
     new Promise ((resolve,reject) => {
        setTimeout( () => {
            user.lastactivitytime=new Date();
            resolve(user.lastactivitytime);
        },2000)
    });

//calling promise all for craetepost and update user activity time
    Promise.all([createPost(), updateLastUserActivityTime]).then(([createPostresoves, updadatelastactivityresoves])=>{
        console.log('post created');
        console.log(posts[posts.length-1]);
        console.log(updadatelastactivityresoves);
    })
    .catch(err => console.log(err));

    //callling promise all for deletePost() and update user activity time
 Promise.all([deletePost(), updateLastUserActivityTime]).then(([createPostresoves, updadatelastactivityresoves])=>{
        console.log('post deleted');
        console.log(posts[posts.length-1]);
        console.log(updadatelastactivityresoves);
    })
    .catch(err => console.log(err));
    
    // //callling promise all for deletePost() and update user activity time
    Promise.all([deletePost(), updateLastUserActivityTime]).then(([createPostresoves, updadatelastactivityresoves])=>{
        console.log('post deleted');
        console.log(posts[posts.length-1]);
        console.log(updadatelastactivityresoves);
    })
    .catch(err => console.log(err));



