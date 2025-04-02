let total = 0;
let salary = 0;

function updateBalance() {
    salary = parseFloat(document.getElementById("salary").value) || 0;
    document.getElementById("balance").textContent = (salary - total).toFixed(2);
}

function addCategory() {
    let newCategory = document.getElementById("new-category").value.trim();
    if (newCategory === "") {
        alert("Please enter a valid category");
        return;
    }
    let categorySelect = document.getElementById("category");
    let option = document.createElement("option");
    option.value = newCategory;
    option.textContent = newCategory;
    categorySelect.appendChild(option);
    document.getElementById("new-category").value = "";
}

function addExpense() {
    let category = document.getElementById("category").value;
    let amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    total += amount;
    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("balance").textContent = (salary - total).toFixed(2);
    
    let expenseList = document.getElementById("expense-list");
    let entry = document.createElement("p");
    entry.textContent = `${category}: $${amount.toFixed(2)}`;
    expenseList.appendChild(entry);
    
    document.getElementById("amount").value = "";
}