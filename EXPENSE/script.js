let incomeTotal = 0;
let materialTotal = 0;
let toolTotal = 0;
let firingTotal = 0;
let shippingTotal = 0;
let expenseTotal = 0;

function submitIncome() {
    const incomeAmount = document.getElementById('income-amount');
    const amount = parseFloat(incomeAmount.value.trim());

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid class amount.');
        return;
    }

    const description = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    incomeTotal += amount;
    expenseTotal += amount;
    addTransaction(description, 'Class', amount);  // 'Class' is considered as Income
    updateSummary();

    incomeAmount.value = '';
}

function addMaterial() {
    const materialAmount = document.getElementById('material-amount');
    const amount = parseFloat(materialAmount.value.trim());

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid material amount.');
        return;
    }

    const description = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    materialTotal += amount;
    expenseTotal -= amount;  
    addTransaction(description, 'Material', amount);  // 'Material' is considered as Expense
    updateSummary();

    materialAmount.value = '';
}

function addTool() {
    const toolAmount = document.getElementById('tool-amount');
    const amount = parseFloat(toolAmount.value.trim());

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid tool amount.');
        return;
    }

    const description = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    toolTotal += amount;
    expenseTotal -= amount;  
    addTransaction(description, 'Tool', amount);  // 'Tool' is considered as Expense
    updateSummary();

    toolAmount.value = '';
}

function addFiringCost() {
    const firingAmount = document.getElementById('firing-amount');
    const amount = parseFloat(firingAmount.value.trim());

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid firing cost amount.');
        return;
    }

    const description = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    firingTotal += amount;
    expenseTotal -= amount;  
    addTransaction(description, 'Firing Cost', amount);  // 'Firing Cost' is considered as Expense
    updateSummary();

    firingAmount.value = '';
}

function addShippingCost() {
    const shippingAmount = document.getElementById('shipping-amount');
    const amount = parseFloat(shippingAmount.value.trim());

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid shipping amount.');
        return;
    }

    const description = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    shippingTotal += amount;
    expenseTotal -= amount;  
    addTransaction(description, 'Shipping', amount);  // 'Shipping' is considered as Expense
    updateSummary();

    shippingAmount.value = '';
}

function addTransaction(description, type, amount) {
    const row = document.createElement('tr');

    // If it's a "Class" transaction, we mark it as "Income" in the Type column
    const transactionType = type === 'Class' ? 'Income' : 'Expense';

    row.innerHTML = `
        <td>${description}</td>
        <td>${type}</td>
        <td>${amount.toFixed(2)}</td>
        <td>${transactionType}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    document.getElementById('expense-history').appendChild(row);

    row.querySelector('.delete-btn').addEventListener('click', function () {
        row.remove();
        if (type === 'Material') {
            materialTotal -= amount;
        } else if (type === 'Tool') {
            toolTotal -= amount;
        } else if (type === 'Firing Cost') {
            firingTotal -= amount;
        } else if (type === 'Shipping') {
            shippingTotal -= amount;
        } else if (type === 'Class') {
            incomeTotal -= amount;
        }
        expenseTotal += amount; 
        updateSummary();
    });
}

function updateSummary() {
    document.getElementById('total-materials').textContent = materialTotal.toFixed(2);
    document.getElementById('total-tools').textContent = toolTotal.toFixed(2);
    document.getElementById('total-firing').textContent = firingTotal.toFixed(2);
    document.getElementById('total-shipping').textContent = shippingTotal.toFixed(2);
    document.getElementById('total-expenses').textContent = expenseTotal.toFixed(2);

    const totalExpensesElement = document.getElementById('total-expenses');
    if (expenseTotal >= 0) {
        totalExpensesElement.style.color = 'green';
    } else {
        totalExpensesElement.style.color = 'red';
    }
}

function clearAll() {
    document.getElementById('expense-history').innerHTML = '';
    incomeTotal = 0;
    materialTotal = 0;
    toolTotal = 0;
    firingTotal = 0;
    shippingTotal = 0;
    expenseTotal = 0;
    updateSummary();
}
