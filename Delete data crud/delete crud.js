
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
    //displaying submitted element to screen
    showuseronscreen(myobj);
    //storing to crud crud
    axios.post('https://crudcrud.com/api/e0b7690f8443493abb208e4f27eb7ce0/appointmentData', myobj)
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) });

}

//just refreshing so that no request is sent to crud.
window.addEventListener("DOMContentLoaded", () => {
    axios
        .get('https://crudcrud.com/api/e0b7690f8443493abb208e4f27eb7ce0/appointmentData')
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



    //removing data from crud and screen on clicking delete button
    delbtn.onclick = () => {
        var result;
        //getting array of object based on fileter email=email of selected element
        axios.get('https://crudcrud.com/api/e0b7690f8443493abb208e4f27eb7ce0/appointmentData', {
            params: { email: `${myobj.email}` },
        })
            .then((res) => {
                
                //storing ID of selected element from crudcrud
                result = res.data[0]._id;
                //deleting selected element from crudcrud using ID
                axios.delete(`https://crudcrud.com/api/e0b7690f8443493abb208e4f27eb7ce0/appointmentData/${result}`)
                .then(resp => console.log(resp))
            .catch(error => console.log(error));
                
            })
            .catch(err => console.log(err));
        itemlist.removeChild(li);
    }

}

