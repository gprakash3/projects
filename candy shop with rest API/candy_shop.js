var result;
const btn = document.getElementById('submitbtn');
const area = document.getElementById('display');
const area2=document.getElementById('display2');

//adding event on submit btn click
btn.addEventListener('click', (e) => { 

    
     //storing user detail as object
     const cname=document.getElementById('name').value;
     const cdesc=document.getElementById('desc').value;
     const cprice=document.getElementById('price').value;
     const cquantity=document.getElementById('quantity').value;

    
     //storing user detail as object
        myobj={
        cname,
        cdesc,
        cprice,
        cquantity
         };

         console.log(myobj);
        //  showuser(myobj);

         //post operation will perform if new elements are created
            axios.post('https://crudcrud.com/api/21a2f137e7c04af080a37b473d3bca0f/storage', myobj)
                .then((res) => {
                    showuser(res.data);
                    console.log(res + ' post successful')
                })
                .catch((err) => { console.log(err + ' post unsuccessful') })
        

})

//data on screen on reload page
window.addEventListener("DOMContentLoaded", () => {
    axios
        .get('https://crudcrud.com/api/21a2f137e7c04af080a37b473d3bca0f/storage')
        .then((res) => {
            console.log(res);
            for (let i = 0; i < res.data.length; i++) {
                showuser(res.data[i]);
            }
        })
        .catch(err => console.log(err));
})

function showuser(user){
    var li = document.createElement('li');
    li.className = 'newline';

    li.appendChild(document.createTextNode(user.cname));
    li.appendChild(document.createTextNode(' - '));

    li.appendChild(document.createTextNode(user.cdesc));
    li.appendChild(document.createTextNode(' - '));

    li.appendChild(document.createTextNode(user.cprice));
    li.appendChild(document.createTextNode(' - '));

    li.appendChild(document.createTextNode(user.cquantity));


    //add buy1 button in new li
    var buy1 = document.createElement('button');
    //adding content BUY1 in btn
    buy1.appendChild(document.createTextNode('BUY1'));
    li.appendChild(buy1);

    //add buy2 button in new li
    var buy2 = document.createElement('button');
    //adding content BUY2 btn
    buy2.appendChild(document.createTextNode('BUY2'));
    li.appendChild(buy2);

    //add buy3 button in new li
    var buy3 = document.createElement('button');
    //adding content BUY3 btn
    buy3.appendChild(document.createTextNode('BUY3'));
    li.appendChild(buy3);

    
    area.appendChild(li);

//adding functionality to buy1 btn
buy1.onclick = () => {
    area.removeChild(li);
    if(user.cquantity>1)
    {
    user.cquantity=user.cquantity - 1;
    updateoncrud(user._id,user);
    }
    else if(user.cquantity==1)
    {
        deleteoncrud(user._id);
    }
    else if(user.cquantity==0)
    {
        area2.innerHTML='Not available';
        setTimeout(() => {
            area2.innerHTML='';
        },750);
    }
}


buy2.onclick = () => {
    area.removeChild(li);
    if(user.cquantity==0)
    {
        area2.innerHTML='Not available';
        setTimeout(() => {
            area2.innerHTML='';
        },750);
    }
    else if(user.cquantity==1)
    {
        showuser(user);
        area2.innerHTML='Only 1 chocolate available';
        setTimeout(() => {
            area2.innerHTML='';
        },750);
    }

    else if(user.cquantity==2)
    {
        deleteoncrud(user._id);
    }

    else 
    {
        user.cquantity=user.cquantity - 2;
        updateoncrud(user._id,user);
    }
}


buy3.onclick = () => {
    area.removeChild(li);
    if(user.cquantity==0)
    {
        area2.innerHTML='Not available';
        setTimeout(() => {
            area2.innerHTML='';
        },750);
    }
    else if(user.cquantity==1 || user.cquantity==2)
    {
        showuser(user);
        area2.innerHTML='Less than 3 chocolate available';
        setTimeout(() => {
            area2.innerHTML='';
        },750);
    }
    else if(user.cquantity==3)
    {
        deleteoncrud(user._id);
    }
    else 
    {
        user.cquantity=user.cquantity - 3;
        updateoncrud(user._id,user);
    }
}

}



//update data on crud on buying from store
function updateoncrud(result,newdata)
{
             axios.get(`https://crudcrud.com/api/21a2f137e7c04af080a37b473d3bca0f/storage/${result}`)
        .then(response => {
            //if id match in crudcrud the perform put operation
            if (response.data._id === `${result}`) {
                axios.put(`https://crudcrud.com/api/21a2f137e7c04af080a37b473d3bca0f/storage/${result}`, {
                    cname: `${newdata.cname}`,
                    cdesc: `${newdata.cdesc}`,
                    cprice: `${newdata.cprice}`,
                    cquantity: `${newdata.cquantity}`
                })
                    .then(resp => {
                        const newobj = {
                            _id:`${newdata._id}`,
                            cname: `${newdata.cname}`,
                            cdesc: `${newdata.cdesc}`,
                            cprice: `${newdata.cprice}`,
                            cquantity: `${newdata.cquantity}`
                        }
                        showuser(newobj);
                        // showuser(resp.data);
                        // result = '';
                        console.log(resp + ' put is successful')
                    })
                    .catch(error => console.log(error + 'put unsuccessful'));
            }
            

        })
        .catch(error => {
                    console.log(error + ' get action not executed')
        })
}

//Delete data on crud if product is empty
function deleteoncrud(id)
{
    axios.delete(`https://crudcrud.com/api/21a2f137e7c04af080a37b473d3bca0f/storage/${id}`)
            .then(resp => console.log(resp))
            .catch(error => console.log(error));

        
}
