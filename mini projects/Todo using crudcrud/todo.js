smtbtn=document.getElementById('smtbtn');
area=document.getElementById('display');
var previd;

smtbtn.addEventListener('click' , (e) => {

const task = document.getElementById('comment').value;
const date = document.getElementById('date').value;
// const status = document.getElementById('')

tskdetail = {
    task,
    date
};

axios.get(`https://crudcrud.com/api/569043ed0cac41d885f4d078148a69be/Todo/${previd}`)
.then((response) => {
    console.log(response)
    axios.put(`https://crudcrud.com/api/569043ed0cac41d885f4d078148a69be/Todo/${previd}` ,{
        task : tskdetail.task,
        date : tskdetail.date
    })
    .then((r) => {
        
        console.log('successfully put  ' + r )
        showuser(r.data)
                })
    .catch((e) => console.log('not successful put' + e))
})
.catch((error) => {
    
    console.log(error)
    axios.post('https://crudcrud.com/api/569043ed0cac41d885f4d078148a69be/Todo', tskdetail)
        .then((res) => {
            console.log(res)
            showuser(res.data);
        })
        .catch((error) => console.log(error))

})




console.log(tskdetail);


})


//get all data on screen on page reload
window.addEventListener('DOMContentLoaded' , () => {
    axios.get('https://crudcrud.com/api/569043ed0cac41d885f4d078148a69be/Todo')
    .then((respo) => {

     console.log(respo);
     for(i=0;i<respo.data.length;i++)
     {
        showuser(respo.data[i]);
     }
    })
    .catch((er) => console.log(er));
})





function showuser(obj)
{
    var li= document.createElement('li');
    li.classname='display';
    li.appendChild(document.createTextNode('Task: '))
    li.appendChild(document.createTextNode(obj.task));
    li.appendChild(document.createTextNode('  Date: '));
    li.appendChild(document.createTextNode(obj.date));
    li.appendChild(document.createTextNode('     '));
    
    //getting value of checked radio button.
    const ele= document.getElementsByName('status');
    for(let i=0;i<ele.length;i++)
    {
        if(ele[i].checked)
        {
            li.appendChild(document.createTextNode(ele[i].value));
        }
    }

    //Task done button actions
    var tskdone = document.createElement('button');
    tskdone.innerHTML='Task done';
 
    li.appendChild(tskdone);


    //Edit button actions
    var edtbtn = document.createElement('button');
    edtbtn.innerHTML = 'Edit Task';
    li.appendChild(edtbtn);
    area.appendChild(li);

    
    tskdone.addEventListener('click' , (ev) => {
        axios.delete(`https://crudcrud.com/api/569043ed0cac41d885f4d078148a69be/Todo/${obj._id}`)
        .then((resp) => {
            console.log(resp)
        })
        .catch((err) => console.log(err));
        
        area.removeChild(li);
        
    })

    edtbtn.addEventListener('click', (eve) => {
        previd=obj._id;
        document.getElementById('comment').value=obj.task;
        document.getElementById('date').value=obj.date;
        area.removeChild(li);
    })


}

