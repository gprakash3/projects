let itemlist=document.getElementById('line');
function savetolocal(event)
{
    event.preventDefault();
    //  console.log(document.getElementById('aname').value);
    //  console.log(document.getElementById('aemail').value);
    //  console.log(document.getElementById('num').value);
    
   const username=event.target.aname.value;
   const email=event.target.aemail.value;
   const phonenumber=event.target.num.value;

   //storing user detail as object
 myobj={
  username,
  email,
  phonenumber
};

//storing to local value
myobj_serialized=JSON.stringify(myobj);
localStorage.setItem(myobj.email,myobj_serialized);
showuseronscreen(myobj);
}
  function showuseronscreen(myobj)
  {
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
    //adding edit btn and content in edit button
    var editbtn=document.createElement('button');
    editbtn.className='edit';
    editbtn.appendChild(document.createTextNode('EDIT'));
    //appending created element to li.
    li.appendChild(delbtn);
    li.appendChild(editbtn);
    //appending li to itemlist.
    itemlist.appendChild(li);
  


//removing data from local storage on clicking delete button
delbtn.onclick = () => {
   // console.log(event.target.aemail.value);
    localStorage.removeItem(myobj.email);
    itemlist.removeChild(li);
}
 editbtn.onclick = () => {
  //copting values to input for editing.
  document.getElementById('aname').value=myobj.username;
  document.getElementById('aemail').value=myobj.email;
  document.getElementById('num').value=myobj.phonenumber;

  //deleting data from local storage as well from screen
  localStorage.removeItem(myobj.email);
  itemlist.removeChild(li);
 
}

  }







