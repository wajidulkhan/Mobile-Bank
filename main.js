getValueTransection = [];

// Add Money With Function
function getIntValue(id) {
  const idName = document.getElementById(id).value;
  const convertedNumber = parseInt(idName);
  return convertedNumber;
}

function getStringValue(id) {
  const idName = document.getElementById(id).value;
  return idName;
}

function getInnerValue(id) {
  const valueItem = document.getElementById(id).innerText;
  return valueItem;
}

function getToggle(values) {
  const valueClass = document.getElementsByClassName("from");
  for (froms of valueClass) {
    froms.style.display = "none";
  }
  document.getElementById(values).style.display = "block";
}

// use Function

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bankName = getStringValue("Bank-add");
    const accountName = getStringValue("account-add");
    const amountName = getIntValue("Amount-add");
    const pinName = getIntValue("pin-number-addmoney");
    const availableBalance = parseInt(getInnerValue("Balance"));

    const pin = 1234;
    if (accountName.length < 11) {
      alert("Please Vaild Account number");
      return;
    }

    if (pinName != pin) {
      alert("please Enter a valid pin");
      return;
    }
    const totalBalance = availableBalance + amountName;
    document.getElementById("Balance").innerText = totalBalance;
  });

// toggle

// Add money
document.getElementById("add-button").addEventListener("click", function () {
  getToggle("add-money-from");

  const transactionData = {
    tranName: "Add Money",
    Dates: new Date().toLocaleTimeString(),
  };
  console.log(transactionData);
  getValueTransection.push(transactionData);
  console.log(getValueTransection);
});

// Cash Out
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    getToggle("cash-out-money");
  });

// Transaction
document
  .getElementById("Transaction-btn")
  .addEventListener("click", function () {
    getToggle("Transaction");
  });
// cash-out

document
  .getElementById("cash-out-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const amount = parseInt(getInnerValue("Balance"));
    const availableAmount = getIntValue("cash-out-amount");
    if (amount > 0) {
      const totalAmount = amount - availableAmount;
      document.getElementById("Balance").innerText = totalAmount;
    } else {
      alert("Account balance in nill");
    }
  });

// not use funtion

// // Add money
// document.getElementById("add-button").addEventListener("click", function () {
//   console.log("button click");
//   document.getElementById("add-money").style.display = "block";
//   document.getElementById("cash-out-money").style.display = "none";
// });

// // Cash Out
// document
//   .getElementById("cash-out-button")
//   .addEventListener("click", function () {
//     console.log("button click");
//     document.getElementById("cash-out-money").style.display = "block";
//     document.getElementById("add-money").style.display = "none";
//   });

// document
//   .getElementById("add-money-btn")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     const bankName = document.getElementById("Bank-add").value;
//     const accountName = document.getElementById("account-add").value;
//     const amountName = parseInt(document.getElementById("Amount-add").value);
//     const pinName = parseInt(
//       document.getElementById("pin-number-addmoney").value
//     );
//     const availableBalance = parseInt(
//       document.getElementById("Balance").innerText
//     );

//     const pin = 1234;
//     if (accountName.length < 11) {
//       alert("Please Vaild Account number");
//       return;
//     }

//     if (pinName != pin) {
//       alert("please Enter a valid pin");
//       return;
//     }
//     const totalBalance = availableBalance + amountName;
//     document.getElementById("Balance").innerText = totalBalance;
//     console.log(bankName, accountName, amountName, pinName, totalBalance);
//   });

// document
//   .getElementById("cash-out-money-btn")
//   .addEventListener("click", function (e) {
//     e.preventDefault();

//     const amount = parseInt(document.getElementById("Balance").innerText);
//     const availableAmount = parseInt(
//       document.getElementById("cash-out-amount").value
//     );
//     if (amount <= 0) {
//       alert("Account Balance in Zero");
//     }
//     const totalAmount = amount - availableAmount;
//     document.getElementById("Balance").innerText = totalAmount;
//   });
