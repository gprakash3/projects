 //initializing values
 
 const nameInput = document.querySelector('#name');
 const emailInput = document.querySelector('#email');
 const msg = document.querySelector('.msg');
 const userList = document.querySelector('#users');

     //on click, mourseover and mouseout action
     const btn=document.querySelector('.btn');
     btn.addEventListener('click', (e) => {
         e.preventDefault();
        
          
if(nameInput.value === '' || emailInput.value === '') {
 msg.innerHTML = 'Please enter all fields';
} else {
 
 //storing entered detail to local storage
//  localStorage.setItem('name',nameInput.value);
//  localStorage.setItem('email',emailInput.value); 
 

//storing user detail as object
 myobj={
    name: nameInput.value,
    email: emailInput.value
};

myobj_serialized=JSON.stringify(myobj);
localStorage.setItem('myobj',myobj_serialized);

}
 
 nameInput.value='';
 emailInput.value = '';

})