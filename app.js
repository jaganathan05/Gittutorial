var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// del event
itemList.addEventListener('click', handleItemClick);

// filter event
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Add delete button
  var deleteBtn = document.createElement('button');
  // Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Add edit button
  var editBtn = document.createElement('button');
  // Add classes to edit button
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append delete button to li
  li.appendChild(deleteBtn);

  // Append edit button to li
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

function handleItemClick(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure you want to delete this item?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
  if (e.target.classList.contains('edit')) {
    // Handle edit functionality here
    console.log('Edit button clicked');
  }
}

// filter items
function filterItems(e) {
  // Convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get li elements
  var items = itemList.getElementsByTagName('li');

  // Convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
