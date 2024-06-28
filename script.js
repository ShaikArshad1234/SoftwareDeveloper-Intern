document.getElementById('add-user-btn').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    // Clear previous error message
    errorMessage.textContent = '';
  
    if (name === '' || email === '') {
      errorMessage.textContent = 'Both name and email are required!';
      return;
    }
  
    if (!validateEmail(email)) {
      errorMessage.textContent = 'Please enter a valid email address!';
      return;
    }
  
    addUserToTable(name, email);
  
    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  });
  
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
  
  function addUserToTable(name, email) {
    const tableBody = document.getElementById('user-table-body');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${name}</td><td>${email}</td><td><button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button></td>`;
    tableBody.appendChild(newRow);
  
    // Add delete functionality to the new delete button
    newRow.querySelector('.delete-btn').addEventListener('click', function() {
      tableBody.removeChild(newRow);
    });
  
    // Add edit functionality to the new edit button
    newRow.querySelector('.edit-btn').addEventListener('click', function() {
      editUser(newRow, name, email);
    });
  }
  
  function editUser(row, name, email) {
    // Populate the form with the existing data
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
  
    // Update the button text to indicate editing mode
    const addButton = document.getElementById('add-user-btn');
    addButton.textContent = 'Update User';
  
    // Remove the row being edited
    row.parentNode.removeChild(row);
  
    // Change the functionality of the add button to update the user
    addButton.removeEventListener('click', addUser);
    addButton.addEventListener('click', function updateHandler() {
      const updatedName = document.getElementById('name').value.trim();
      const updatedEmail = document.getElementById('email').value.trim();
      const errorMessage = document.getElementById('error-message');
  
      // Clear previous error message
      errorMessage.textContent = '';
  
      if (updatedName === '' || updatedEmail === '') {
        errorMessage.textContent = 'Both name and email are required!';
        return;
      }
  
      if (!validateEmail(updatedEmail)) {
        errorMessage.textContent = 'Please enter a valid email address!';
        return;
      }
  
      addUserToTable(updatedName, updatedEmail);
  
      // Clear input fields and reset button text
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      addButton.textContent = 'Add User';
  
      // Reset the add button to its original functionality
      addButton.removeEventListener('click', updateHandler);
      addButton.addEventListener('click', addUser);
    });
  }
  
  function addUser() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    // Clear previous error message
    errorMessage.textContent = '';
  
    if (name === '' || email === '') {
      errorMessage.textContent = 'Both name and email are required!';
      return;
    }
  
    if (!validateEmail(email)) {
      errorMessage.textContent = 'Please enter a valid email address!';
      return;
    }
  
    addUserToTable(name, email);
  
    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  }
  