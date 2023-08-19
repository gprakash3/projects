

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

console.log(myobj);
//storing to crud
axios.post('https://crudcrud.com/api/072afa1bbdb542cf80f4a61322cc24be/appointmentData', myobj)
.then((res) => {console.log(res)})
.catch((err) => {console.log(err)});



})

itemlist.addEventListener('click', (ev)=> {
    
    if(ev.target.classList.contains('del')){
       
        //removing that particular line
        var li = ev.target.parentElement;
      itemlist.removeChild(li);
    }



})
