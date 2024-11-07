function saveTransaction() {
    const itemName = document.getElementById('itemName').value;

    if (!itemName) {
        alert("Please enter an item name.");
        return;
    }

    const warehouseStockIn = parseInt(document.getElementById('warehouseStockIn').value) || 0;
    const storeStockIn = parseInt(document.getElementById('storeStockIn').value) || 0;
    const stockOutWarehouse = parseInt(document.getElementById('stockOutWarehouse').value) || 0;
    const stockOutStore = parseInt(document.getElementById('stockOutStore').value) || 0;

    const totalStockOut = stockOutWarehouse + stockOutStore;
    const remainingStockWarehouse = warehouseStockIn - stockOutWarehouse;
    const remainingStockStore = storeStockIn - stockOutStore;

    // Create a transaction object
    const transaction = {
        item: itemName,
        warehouseStock: warehouseStockIn,
        storeStock: storeStockIn,
        stockOut: totalStockOut,
        remainingStockWarehouse: remainingStockWarehouse,
        remainingStockStore: remainingStockStore
    };

    // Retrieve current transactions from localStorage or initialize an empty array if none exist
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction); // Add the new transaction to the array

    // Save the updated transactions array back to localStorage
    localStorage.setItem('transactions', JSON.stringify(transactions));

    // Clear input fields
    document.getElementById('itemName').value = '';
    document.getElementById('warehouseStockIn').value = 0;
    document.getElementById('storeStockIn').value = 0;
    document.getElementById('stockOutWarehouse').value = 0;
    document.getElementById('stockOutStore').value = 0;

    // Update the display of transactions
    displayTransactions();
}

// Function to load and display transactions from localStorage
function displayTransactions() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const transactionTableBody = document.getElementById('transactionTableBody');
    transactionTableBody.innerHTML = ''; // Clear existing rows

    // Populate the table with each transaction
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.item}</td>
            <td>${transaction.warehouseStock}</td>
            <td>${transaction.storeStock}</td>
            <td>${transaction.stockOut}</td>
            <td>${transaction.remainingStockWarehouse}</td>
            <td>${transaction.remainingStockStore}</td>
        `;
        transactionTableBody.appendChild(row);
    });
}

// Initial load of transactions when the page is loaded
document.addEventListener('DOMContentLoaded', displayTransactions);
