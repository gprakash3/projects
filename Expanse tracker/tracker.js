const btn = document.getElementById('submitbtn');
const area = document.getElementById('display');

//adding event on submit btn click
btn.addEventListener('click', (e) => {
    //adding li element
    var data = document.createElement('li');
    //adding text content in li tag
    //adding amount to li tag
    var text1 = document.createElement('span');
    var val1 = document.createTextNode(document.getElementById('amount').value)
    text1.appendChild(val1);
    data.appendChild(text1);
    document.getElementById('amount').value = ''
    //adding -
    data.appendChild(document.createTextNode('-'));
    //adding description
    var text2 = document.createElement('span');
    var val2 = document.createTextNode(document.getElementById('desc').value)
    text2.appendChild(val2);
    data.appendChild(text2);
    document.getElementById('desc').value = '';
    //adding -
    data.appendChild(document.createTextNode('-'));
    //adding category
    var text3 = document.createElement('span');
    var val3 = document.createTextNode(document.getElementById('sel').value)
    text3.appendChild(val3);
    data.appendChild(text3);
    document.getElementById('sel').value='Fuel';


    //adding delete btn to li element
    var del = document.createElement('button');
    del.id = 'delbtn';
    del.innerHTML = 'Delete Expense';
    data.appendChild(del);

    //adding edit btn to li element
    var edit = document.createElement('button');
    edit.id = 'editbtn'
    edit.innerHTML = 'Edit Expense';
    data.appendChild(edit);
    //adding li element to message area.
    area.appendChild(data);

    
     //storing user detail as object
     const expamount=text1.textContent;
     const expdesc=text2.textContent;
     const expcateg=text3.textContent;
  
     //storing user detail as object
        myobj={
         expamount,
         expdesc,
         expcateg
         };
  
  //storing to local value
  myobj_serialized=JSON.stringify(myobj);
  localStorage.setItem(myobj.expdesc,myobj_serialized);

    



    //Adding delete functionality to delete btn
    del.addEventListener('click', deletefunc);
    //defining function deletefunc
    function deletefunc() {
        //deleting data from local storage
        localStorage.removeItem(text2.textContent);
        //to remove whole li tag
        data.remove();

    }

    //adding editbtn functionality
    edit.addEventListener('click', editfunc);
    //defining editfunc functionality
    function editfunc() {
        //console.log('edit btn pressed');
        document.getElementById('amount').value = text1.textContent;
        document.getElementById('desc').value = text2.textContent;
        document.getElementById('sel').value = text3.textContent;
        deletefunc();
    }

})