document.getElementById("leadForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;
  const errorMsg = document.getElementById("errorMsg");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const phonePattern = /^[0-9]{10}$/;

  if(name === "" || email === "" || phone === "" || course === ""){
    errorMsg.textContent = "All fields are required!";
    return;
  }

  if(!email.match(emailPattern)){
    errorMsg.textContent = "Enter valid email!";
    return;
  }

  if(!phone.match(phonePattern)){
    errorMsg.textContent = "Phone must be 10 digits!";
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.textContent = "Form submitted successfully!";
});
