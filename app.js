function getacall(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phoneNumber = document.getElementById('tel').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;

  var userDetails = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      date: date,
      time: time
  };

  // Retrieve existing user details from local storage
  var existingDetails = JSON.parse(localStorage.getItem('userDetails'));

  if (existingDetails) {
      // If there are existing user details, append the new user details
      existingDetails.push(userDetails);
      localStorage.setItem('userDetails', JSON.stringify(existingDetails));
  } else {
      // If there are no existing user details, create a new array with the current user details
      var newDetails = [userDetails];
      localStorage.setItem('userDetails', JSON.stringify(newDetails));
  }

  // Display the user details on the web page
  var userDetailsContainer = document.createElement("div");
  userDetailsContainer.innerHTML = "<h3>User Details:</h3>" +
      "<p>Name: " + name + "</p>" +
      "<p>Email: " + email + "</p>" +
      "<p>Phone Number: " + phoneNumber + "</p>" +
      "<p>Time for Call: " + date + " " + time + "</p>";

  // create edit Button
  var Editbutton =document.createElement("button");
  Editbutton.textContent="Edit";
  Editbutton.addEventListener('click',function(){
    // Set the form values to the stored user details for editing
    document.getElementById('name').value = userDetails.name;
    document.getElementById('email').value = userDetails.email;
    document.getElementById('tel').value = userDetails.phoneNumber;
    document.getElementById('date').value = userDetails.date;
    document.getElementById('time').value = userDetails.time;
    userDetailsContainer.remove(); // Remove the userDetailsContainer from the DOM

      // Retrieve existing user details from local storage
      var storedDetails = JSON.parse(localStorage.getItem('userDetails'));

      // Find the index of the user details to be deleted
      var index = storedDetails.findIndex(function (detail) {
          return detail.name === name && detail.email === email && detail.phoneNumber === phoneNumber;
      });

      if (index !== -1) {
          // Remove the user details from the stored array
          storedDetails.splice(index, 1);
          localStorage.setItem('userDetails', JSON.stringify(storedDetails));
      }

    

  });

  // Create a delete button
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
      userDetailsContainer.remove(); // Remove the userDetailsContainer from the DOM

      // Retrieve existing user details from local storage
      var storedDetails = JSON.parse(localStorage.getItem('userDetails'));

      // Find the index of the user details to be deleted
      var index = storedDetails.findIndex(function (detail) {
          return detail.name === name && detail.email === email && detail.phoneNumber === phoneNumber;
      });

      if (index !== -1) {
          // Remove the user details from the stored array
          storedDetails.splice(index, 1);
          localStorage.setItem('userDetails', JSON.stringify(storedDetails));
      }
  });

  // Append the delete button to the userDetailsContainer
  userDetailsContainer.appendChild(deleteButton);
  userDetailsContainer.appendChild(Editbutton);

  document.body.appendChild(userDetailsContainer);
}