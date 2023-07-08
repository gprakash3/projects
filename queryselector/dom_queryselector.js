
var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';


var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.display='none';

var items=document.querySelectorAll('li')
items[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}

