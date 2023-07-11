//making second list item background color to green
var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';

//making 3rd list item invisible
var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.display='none';

//making 2nd item font color to green
var items=document.querySelectorAll('li')
items[1].style.color='green';

//making alternate odd item background color to green
var odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}

