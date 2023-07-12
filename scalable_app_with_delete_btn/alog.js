const itemlist=document.getElementById('line');

const btn=document.getElementById('submitbtn');
btn.addEventListener('click', (e)=>
{
    e.preventDefault();
    console.log(document.getElementById('aname').value);
    console.log(document.getElementById('aemail').value);
    console.log(document.getElementById('num').value);

    //adding line which contain name, email and phone number
    var li=document.createElement('li');
    li.className='newline';
    li.appendChild(document.createTextNode(document.getElementById('aname').value));
    li.appendChild(document.createTextNode(' - '));
    li.appendChild(document.createTextNode(document.getElementById('aemail').value));
    li.appendChild(document.createTextNode(' - '));
    li.appendChild(document.createTextNode(document.getElementById('num').value));

    //add delete button in new li
    var delbtn=document.createElement('button');
    delbtn.className='del';
    //adding content delete in delbtn
    delbtn.appendChild(document.createTextNode('DELETE'));
    li.appendChild(delbtn);

    itemlist.appendChild(li);


    //storing user detail as object
 myobj={
    name: document.getElementById('aname').value,
    email: document.getElementById('aemail').value,
    Phone_number: document.getElementById('num').value
};

//adding data to local storage as object with key Email.
myobj_serialized=JSON.stringify(myobj);
localStorage.setItem(document.getElementById('aemail').value,myobj_serialized);


})

itemlist.addEventListener('click', (ev)=> {
    // ev.target.classList.contains('del');
    if(ev.target.classList.contains('del')){
    



       // localStorage.removeItem(key);
        //removing that particular line
        var li = ev.target.parentElement;
      itemlist.removeChild(li);
    }



})
