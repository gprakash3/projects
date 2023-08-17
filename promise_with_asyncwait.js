//creating empty object
const posts = [];

//creating async function
const createdelete = async () => {
    //creating create promise
    const create = new Promise((resolve, reject) => {
         setTimeout( () => {
            posts.push({title: 'POST'});
            resolve(posts[posts.length-1].title+' :-post created by create()');
        }, 1000)
    });
    //creating deleted promise
     const deleted = new Promise((resolve, reject) => {
         setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement.title +' : post deleted by deleted()');
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1500)
    });
    
 
    //initializing empty object to return
    const arrayobj = [];
    let obj = await create;
    let obj1 = await deleted;
   //storing resolve value from create and deleted.
    arrayobj.push(obj);
    arrayobj.push(obj1);
   //storing value of create and deleted in cre and del
    let [cre, del] = await Promise.all([create,deleted]);
    console.log('post created and deleted');
    console.log('printed inside of async func : '+`${cre} , ${del}`)
    return arrayobj;
}
//printing value returned from async function.
createdelete().then((c) => console.log('printed from output returned by async function : ' + `${c}`));
console.log('action completed');
