//To store crud id of object clicked to edit
var result;
const forms = document.getElementById('forms');
let itemlist = document.getElementById('line');
function savetocrud(event) {
    event.preventDefault();

    const username = event.target.aname.value;
    const email = event.target.aemail.value;
    const phonenumber = event.target.num.value;

    //storing user detail as object
    myobj = {
        username,
        email,
        phonenumber
    };
    //serching for object in crudcrud having id of edited element
    axios.get(`https://crudcrud.com/api/2d29f37c95ef4388bd875b4be2da80a5/appointmentData/${result}`)
        .then(response => {
            //if id match in crudcrud the perform put operation
            if (response.data._id === `${result}`) {
                axios.put(`https://crudcrud.com/api/2d29f37c95ef4388bd875b4be2da80a5/appointmentData/${result}`, {
                    username: `${myobj.username}`,
                    email: `${myobj.email}`,
                    phonenumber: `${myobj.phonenumber}`
                })
                    .then(resp => {
                        const newobj = {
                            username: myobj.username,
                            email: myobj.email,
                            phonenumber: myobj.phonenumber

                        }
                        showuseronscreen(newobj);
                        result = '';
                        console.log(resp + ' put is successful')
                    })
                    .catch(error => console.log(error + 'put unsuccessful'));
            }
            

        })
        .catch(error => {
            //post operation will perform if new elements are created
            axios.post('https://crudcrud.com/api/2d29f37c95ef4388bd875b4be2da80a5/appointmentData', myobj)
                .then((res) => {
                    showuseronscreen(res.data);
                    console.log(res + ' post successful')
                })
                .catch((err) => { console.log(err + ' post unsuccessful') })


            console.log(error + ' get action not executed')
        })

    //displaying submitted element to screen

}

//just refreshing so that request is sent to crud.
window.addEventListener("DOMContentLoaded", () => {
    axios
        .get('https://crudcrud.com/api/2d29f37c95ef4388bd875b4be2da80a5/appointmentData')
        .then((res) => {
            console.log(res);
            for (let i = 0; i < res.data.length; i++) {
                showuseronscreen(res.data[i]);
            }
        })
        .catch(err => console.log(err));
})
function showuseronscreen(user) {
    var li = document.createElement('li');
    li.className = 'newline';

    li.appendChild(document.createTextNode(user.username));
    li.appendChild(document.createTextNode(' - '));

    li.appendChild(document.createTextNode(user.email));
    li.appendChild(document.createTextNode(' - '));

    li.appendChild(document.createTextNode(user.phonenumber));


    //add delete button in new li
    var delbtn = document.createElement('button');
    delbtn.className = 'del';
    //adding content delete in delbtn
    delbtn.appendChild(document.createTextNode('DELETE'));
    li.appendChild(delbtn);

    //appendig edit btn
    var editbtn = document.createElement('button');
    editbtn.className = 'edit';
    editbtn.appendChild(document.createTextNode('EDIT'));
    //appending created element to li.
    li.appendChild(editbtn);
    itemlist.appendChild(li);


    //removing data from crud and screen on clicking delete button
    delbtn.onclick = () => {

        axios.delete(`https://crudcrud.com/api/2d29f37c95ef4388bd875b4be2da80a5/appointmentData/${user._id}`)
            .then(resp => console.log(resp))
            .catch(error => console.log(error));

        itemlist.removeChild(li);
    }

    editbtn.onclick = () => {
        //copying values to input for editing.
        document.getElementById('aname').value = user.username;
        document.getElementById('aemail').value = user.email;
        document.getElementById('num').value = user.phonenumber;
        //storing id of user in result so that it can be used to find the object in crudcrud to put operation
        result = user._id;
        itemlist.removeChild(li);




    }

}


