function getacall(event) {
  // event.preventDefault();
  var name=document.getElementById('name').value 
  var email=document.getElementById('email').value
  var PhoneNumber=document.getElementById('tel').value
  var date=document.getElementById('date').value
  var time=document.getElementById('time').value

  // store user details in local storage 
  localStorage.setItem('name',name)
  localStorage.setItem('email',email)
  localStorage.setItem('PhoneNumber',PhoneNumber)
  localStorage.setItem('date',date)
  localStorage.setItem('time',time)  
}
