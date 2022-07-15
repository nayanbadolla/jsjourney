// grade calculator

//print("Welcome to your Grade Calculator")

// expense tracker

var account={
    income:0,
    expense:0,
    source:"",
    purpose:"",
    balance:0
}

function addIncome (income, source) {
    account.income=account.income+income
    account.balance=account.balance+income
    console.log("Income")
    console.log(`Income: ${income}`)
    console.log(`Source: ${source}`)
    console.log(`Balance: ${account.balance}`)
}

function addExpense (expense, purpose) 
{
    account.expense=account.expense+expense
    account.balance=account.balance-expense
    console.log("Expenses")
    console.log(`Expenses: ${expense}`)
    console.log(`Purpose: ${purpose}`)
    console.log(`Balance: ${account.balance}`)
}

var resetAccount=function () {
    account.balance=0
    account.income=0
    account.expense=0
    console.log("Reset")
    console.log(`Balance: ${account.balance}`)
    console.log(`Income: ${account.income}`)
    console.log(`Expenses: ${account.expense}`)
}

// function accountSummary (Account) {
//     console.log("Account Info")
//     console.log(`Balance: ${Account.balance}`)
//     console.log(`Income: ${Account.income}`)
//     console.log(`Expenses: ${Account.expense}`)
// }  

function accountSummary () {
    console.log("Account Info")
    console.log(`Balance: ${account.balance}`)
    console.log(`Income: ${account.income}`)
    console.log(`Expenses: ${account.expense}`)
}   

//accountSummary(account)
accountSummary()
addIncome(5000,"January")
addExpense(30,"coffee")
accountSummary()
addIncome(2000,"Freelance")
addExpense(500,"Sushi")
accountSummary()
resetAccount()