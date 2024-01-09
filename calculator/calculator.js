window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const defaultValues = {
    amount: 100000,
    years: 30,
    rate: 3.25
  }
  const loanAmountInput = document.getElementById('loan-amount');
  const loanYearsInput = document.getElementById('loan-years');
  const loanRateInput = document.getElementById('loan-rate');
  loanAmountInput.value = defaultValues.amount;
  loanYearsInput.value = defaultValues.years;
  loanRateInput.value = defaultValues.rate;
  update();
}

function update() {
  const values = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
}

function calculateMonthlyPayment(values) {
  const principal = values.amount;
  const annualInterestRate = values.rate;
  const numberOfPayments = values.years * 12;
  const monthlyInterestRate = (annualInterestRate / 12) / 100;
  const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
  const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
  const monthlyPayment = numerator / denominator;
  return monthlyPayment.toFixed(2);
}

function updateMonthly(monthly) {
  const monthlyPaymentElement = document.getElementById('monthly-payment');
  monthlyPaymentElement.textContent = '$' + monthly;
}
