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


    itemlist.appendChild(li);


    //storing user detail as object
 myobj={
    name: document.getElementById('aname').value,
    email: document.getElementById('aemail').value,
    Phone_number: document.getElementById('num').value
};

myobj_serialized=JSON.stringify(myobj);
localStorage.setItem(document.getElementById('aemail').value,myobj_serialized);
})