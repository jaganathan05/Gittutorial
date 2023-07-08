function getacall(event) {
  event.preventDefault();
  var name=document.getElementById('name').value 
  var email=document.getElementById('email').value
  var PhoneNumber=document.getElementById('tel').value
  var date=document.getElementById('date').value
  var time=document.getElementById('time').value

  // // store user details in local storage 
  // localStorage.setItem('name',name)
  // localStorage.setItem('email',email)
  // localStorage.setItem('PhoneNumber',PhoneNumber)
  // localStorage.setItem('date',date)
  // localStorage.setItem('time',time)  
  

  // create a object for details 
  var userDetails = {
    name: name,
    email: email,
    phoneNumber: PhoneNumber,
    date: date,
    time: time
  };
  // Store user details object in local storage
  localStorage.setItem('user', JSON.stringify(userDetails));
  //console.log(localStorage);

  // Retrieve existing user details from local storage
  var existingDetails = localStorage.getItem('userDetails');

  if (existingDetails) {

  // If there are existing user details, parse and update the array
  existingDetails = JSON.parse(existingDetails);
  existingDetails.push(userDetails);
  localStorage.setItem('userDetails', JSON.stringify(existingDetails));
  
} else {

  // If there are no existing user details, create a new array with the current user details
  var newDetails = [userDetails];
  localStorage.setItem('userDetails', JSON.stringify(newDetails));
  
}

  // Retrieve and log the stored user details
  var storedUser = JSON.parse(localStorage.getItem('user'));
  console.log(storedUser);
}