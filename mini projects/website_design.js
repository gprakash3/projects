//display data on sidebar once data entered.    
const btn=document.getElementById('submitbtn'); 
btn.addEventListener('click', (e)=>
    {
    e.preventDefault();
    const cont=document.getElementById('container2');
    
    //creating data addition
    var newele=document.createElement('li');

    newele.appendChild(document.createTextNode("data are collected are:"));
    newele.appendChild(document.createTextNode(document.getElementById('username').value));
    newele.appendChild(document.createTextNode(document.getElementById('pnr').value));

    //adding remove btn
    var newbtn=document.createElement('button');
    newbtn.appendChild(document.createTextNode('clear data'));
    //adding newly created elements to container
    cont.appendChild(newele);
    cont.appendChild(newbtn);

    newbtn.addEventListener('click', () => {
        cont.removeChild(newele);
        cont.removeChild(newbtn);
    })
       
    })

    //to open box to write when click on report btn
    //report
   const rptbtn=document.getElementById('report');

    rptbtn.addEventListener('click',(re)=> {
        re.preventDefault();
        console.log('clicked');
        const cont=document.getElementById('container2');
        var newbox=document.createElement('input');
        newbox.type='text';
        newbox.id='newbox1';
        

        cont.appendChild(newbox);

        var newbtn=document.createElement('button');
        newbtn.appendChild(document.createTextNode('submit'));
        cont.appendChild(newbtn);
        //if clicked on submit then box will be cleared.
        newbtn.addEventListener('click',(se) => {
            se.preventDefault();
            cont.removeChild(newbox);
            cont.removeChild(newbtn);
             var msg=document.createElement('p');
             msg.id='info1';
             msg.appendChild(document.createTextNode('report sent to concerned authority'));
             cont.appendChild(msg);
            
             function abc(){
                cont.removeChild(msg)
             }
             setTimeout(abc ,3000 );

        })

    })

    //to refesh page on click of reset btn
    const rstbtn=document.getElementById('rst');
    rstbtn.addEventListener('click', (re)=> {
        re.preventDefault();
        rstbtn.onclick = function() {
        location.reload(true);
    }
    })


//Adding emergency contact functionality
    const emebtn=document.getElementById('emergency');
    emebtn.addEventListener('click', (re) => {
        re.preventDefault();
        console.log('emergency pressed');
        const cont=document.getElementById('container2');
    
    //creating data addition
    var newele=document.createElement('li');
    newele.appendChild(document.createTextNode("These are important numbers:"));
    cont.appendChild(newele);
    var newele1=document.createElement('li');
    newele1.appendChild(document.createTextNode("police : 182 "));
    cont.appendChild(newele1);
    var newele2=document.createElement('li');
    newele2.appendChild(document.createTextNode("complain : 1800111321"));
    cont.appendChild(newele2);
    var newele3=document.createElement('li');
    newele3.appendChild(document.createTextNode("All help : 139"));
    cont.appendChild(newele3);
    //adding remove btn
    var newbtn=document.createElement('button');
    newbtn.appendChild(document.createTextNode('clear data'));
    //adding newly created elements to container
    cont.appendChild(newbtn);
    newbtn.addEventListener('click', () => {
        cont.removeChild(newele);
        cont.removeChild(newele1);
        cont.removeChild(newele2);
        cont.removeChild(newele3)
        cont.removeChild(newbtn);
        cont.removeChild(newbtn1);
    })
     //adding call btn
     var newbtn1=document.createElement('button');
     newbtn1.appendChild(document.createTextNode('call'));
     newbtn1.id='call';
     //adding newly created elements to container
     cont.appendChild(newbtn1);
    newbtn1.addEventListener('click', () => {
        newbtn.click();
        cont.removeChild(newbtn1);
        //Adding message
        var msg=document.createElement('p');
             msg.id='info1';
             msg.appendChild(document.createTextNode('USE YOUR PHONE YOU \' IDIOT\' .'));
             cont.appendChild(msg);
            
             function abc(){
                cont.removeChild(msg)
             }
             setTimeout(abc ,2500 );

    })

    })



