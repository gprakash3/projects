
let itemlist = document.getElementById('line');
function savetolocal(event) {
    event.preventDefault();
    //  console.log(document.getElementById('aname').value);
    //  console.log(document.getElementById('aemail').value);
    //  console.log(document.getElementById('num').value);

    const username = event.target.aname.value;
    const email = event.target.aemail.value;
    const phonenumber = event.target.num.value;

    //storing user detail as object
    myobj = {
        username,
        email,
        phonenumber
    };

    //storing to crud crud
    axios.post('https://crudcrud.com/api/072afa1bbdb542cf80f4a61322cc24be/appointmentData', myobj)
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) });

    //storing to local value
    myobj_serialized = JSON.stringify(myobj);
    localStorage.setItem(myobj.email, myobj_serialized);
    showuseronscreen(myobj);
}

window.addEventListener("DOMContentLoaded", () => {
    axios
        .get('https://crudcrud.com/api/072afa1bbdb542cf80f4a61322cc24be/appointmentData')
        .then((res) => {
            console.log(res);
            for (let i = 0; i < res.data.length; i++) {
                showuseronscreen(res.data[i]);
            }
        })
        .catch(err => console.log(err));

})
function showuseronscreen(myobj) {
    var li = document.createElement('li');
    li.className = 'newline';
   
    li.appendChild(document.createTextNode(myobj.username));
    li.appendChild(document.createTextNode(' - '));
   
    li.appendChild(document.createTextNode(myobj.email));
    li.appendChild(document.createTextNode(' - '));
    
    li.appendChild(document.createTextNode(myobj.phonenumber));


    //add delete button in new li
    var delbtn = document.createElement('button');
    delbtn.className = 'del';
    //adding content delete in delbtn
    delbtn.appendChild(document.createTextNode('DELETE'));
    li.appendChild(delbtn);
    itemlist.appendChild(li);



    //removing data from local storage on clicking delete button
    delbtn.onclick = () => {
        // console.log(event.target.aemail.value);
        localStorage.removeItem(myobj.email);
        itemlist.removeChild(li);
    }

}

