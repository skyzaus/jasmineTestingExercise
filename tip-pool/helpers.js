let serverTable = document.querySelector('#serverTable');
let paymentTable = document.querySelector('#paymentTable');

// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr) {
  let newTd = document.createElement('td');
  newTd.classList.add('deleteBtn');
  newTd.innerText = 'X';
  tr.append(newTd);
}

serverTable.addEventListener('click', (e) => {
  if ((e.target.class = 'deleteBtn')) {
    e.target.parentElement.remove();
    delete allServers[e.target.parentElement.id];
    updateServerTable();
  }
});

paymentTable.addEventListener('click', (e) => {
  if ((e.target.class = 'deleteBtn')) {
    e.target.parentElement.remove();
    paymentId -= 1;
    delete allPayments[e.target.parentElement.id];
    updateSummary();
  }
});
