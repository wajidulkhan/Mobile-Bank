document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bankName = document.getElementById("Bank-add").value;
    const accountName = document.getElementById("account-add").value;
    const amountName = parseInt(document.getElementById("Amount-add").value);
    const pinName = document.getElementById("pin-number-addmoney").value;
    const availableBalance = parseInt(
      document.getElementById("Balance").innerText
    );
    const totalBalance = availableBalance + amountName;
    document.getElementById("Balance").innerText = totalBalance;
    console.log(bankName, accountName, amountName, pinName, totalBalance);
  });
