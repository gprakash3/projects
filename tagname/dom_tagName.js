// var items=document.getElementsByclassName('li');
// items[2].style.backgroundColor='green';
// for(let i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight='bold';
// }
//code is not working if we don't comment out above lines

var tagitems=document.getElementsByTagName('li');
for(let i=0;i<tagitems.length;i++)
{
    tagitems[i].style.fontWeight='bold';
    tagitems[i].style.backgroundColor='yellow';
}
