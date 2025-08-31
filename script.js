// login
document.getElementById("Login").addEventListener("click", function (element) {
  element.preventDefault();
  const privateNumber = 123456;
  const PinNumber = 1234;
  const getMobileNumber = document.getElementById("mobile-number").value;
  const getPinNumber = document.getElementById("pin-number").value;
  const convertMobileNumber = parseInt(getMobileNumber);
  const convertPinNumber = parseInt(getPinNumber);

  if (privateNumber === convertMobileNumber && PinNumber === convertPinNumber) {
    window.location.href = "./main.html";
  } else {
    alert("Invalid number");
  }
});
