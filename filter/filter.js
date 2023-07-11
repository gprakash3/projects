var form1 = document.getElementById('addForm');
var form2=document.getElementById('descrip');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form1.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();
// Get input value
var newItem1 = document.getElementById('item').value;
var newItem2 =document.getElementById('descrip').value;
// Create new li element
var li = document.createElement('li');
// Add class
li.className = 'list-group-item';
// Add text node with input value

li.appendChild(document.createTextNode(newItem1));
li.appendChild(document.createTextNode(' '));
li.appendChild(document.createTextNode(newItem2));


// Create del button element
var deleteBtn = document.createElement('button');

// Add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

// Append text node
deleteBtn.appendChild(document.createTextNode('X'));

// Append button to li
li.appendChild(deleteBtn);

// Append li to list
itemList.appendChild(li);

var editbtn = document.createElement('button');
editbtn.className='btn btn-secondary btn-sm float-right';
editbtn.appendChild(document.createTextNode('EDIT'));
li.appendChild(editbtn);
itemList.appendChild(li);
 
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    //-------------------------
    console.log(item.childNodes);
    //--------------------------
     itemName2=item.firstChild.nextSibling.nextSibling.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
      
    } else {
      item.style.display = 'none';
    }
  });

  
}