function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (username === "") {
    alert("Silakan isi kolom Username.");
    return false;
  }
  if (!isValidEmail(email)) {
    alert("Silakan isi alamat email yang valid.");
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(email);
}
