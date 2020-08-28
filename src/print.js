function calculateTotalOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetail(invoice, outstanding) {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
}

function generateDetail(invoice, outstanding) {
  let result = '***********************\n**** Customer Owes ****\n***********************\n';
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${outstanding}\n`;
  result += `amount: ${invoice.dueDate.toLocaleDateString()}`;
  return result;
}

function printOwing (invoice) {
  let outstanding = 0;
  let result;

  outstanding = calculateTotalOutstanding(invoice);

  recordDueDate(invoice);

  printDetail(invoice, outstanding);
  result = generateDetail(invoice, outstanding);
  return result;
}
module.exports ={
  printOwing,
}