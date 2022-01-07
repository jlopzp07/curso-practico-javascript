const numberFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function percentage(totalSpendNecessities, salary) {
  return (totalSpendNecessities * 100) / salary;
}

function finalSalary() {
  const salaryValue = document.getElementById("salary").value;
  const deductionValue = document.getElementById("deductions").value;
  const totalSalary = salaryValue - salaryValue * (deductionValue / 100);
  const answer = document.getElementById("answer");

  if (salaryValue === "") {
    answer.innerText = "You must enter a salary";
  } else if (totalSalary < 0) {
    answer.innerText = "The salary must be higher than the deductions";
  } else {
    answer.innerText = "Your final salary is $ " + totalSalary;
  }
  return totalSalary;
}

function necessities() {
  const rent = document.getElementById("rent").value;
  const food = document.getElementById("food").value;
  const homeBills = document.getElementById("home-bills").value;
  const transport = document.getElementById("transportation").value;
  const totalSpends =
    parseFloat(rent) +
    parseFloat(food) +
    parseFloat(homeBills) +
    parseFloat(transport);

  document.getElementById("necessities-total").value =
    numberFormatter.format(totalSpends);
  const salary = finalSalary();
  const totalPercentage = percentage(totalSpends, salary);
  document.getElementById("necessities-percentage").value =
    parseInt(totalPercentage);
  document.getElementById("total-ideal-percentage-needs").value = 55;
  document.getElementById("total-real-percentage-needs").value = parseInt(totalPercentage);
}

function longTermSavings() {
  const bigPurchases = document.getElementById("big-purchases").value;
  const rainyFund = document.getElementById("rainy-fund").value;
  const vacations = document.getElementById("vacations").value;
  const unexpectedExpenses = document.getElementById(
    "unexpected-expenses"
  ).value;
  const totalSpends =
    parseFloat(bigPurchases) +
    parseFloat(rainyFund) +
    parseFloat(vacations) +
    parseFloat(unexpectedExpenses);
  document.getElementById("long-term-total").value =
    numberFormatter.format(totalSpends);
  const salary = finalSalary();
  const totalPercentage = percentage(totalSpends, salary);
  document.getElementById("long-term-percentage").value =
    parseInt(totalPercentage);
    document.getElementById("total-ideal-percentage-play").value = 10;
    document.getElementById("total-real-percentage-play").value = parseInt(totalPercentage);
}

function play() {
  const spoiling = document.getElementById("spoiling").value;
  const leisure = document.getElementById("leisure").value;
  const totalSpends = parseFloat(spoiling) + parseFloat(leisure);
  document.getElementById("play-total").value =
    numberFormatter.format(totalSpends);
  const salary = finalSalary();
  const totalPercentage = percentage(totalSpends, salary);
  document.getElementById("play-percentage").value = parseInt(totalPercentage);
  document.getElementById("total-ideal-percentage-freedom").value = 10;
  document.getElementById("total-real-percentage-freedom").value = parseInt(totalPercentage);
}

function education() {
  const coaching = document.getElementById("coaching").value;
  const mentoring = document.getElementById("mentoring").value;
  const books = document.getElementById("books").value;
  const courses = document.getElementById("courses").value;
  const totalSpends =
    parseFloat(coaching) +
    parseFloat(mentoring) +
    parseFloat(books) +
    parseFloat(courses);
  document.getElementById("education-total").value =
    numberFormatter.format(totalSpends);
  const salary = finalSalary();
  const totalPercentage = percentage(totalSpends, salary);
  document.getElementById("education-percentage").value =
    parseInt(totalPercentage);
    document.getElementById("total-ideal-percentage-long").value = 10;
    document.getElementById("total-real-percentage-long").value = parseInt(totalPercentage);
}

function financialFreedom() {
  const stocks = document.getElementById("stocks").value;
  const mutualFunds = document.getElementById("mutual-funds").value;
  const realEstate = document.getElementById("real-estate").value;
  const otherInvests = document.getElementById("other-investments").value;
  const totalSpends =
    parseFloat(stocks) +
    parseFloat(mutualFunds) +
    parseFloat(realEstate) +
    parseFloat(otherInvests);
  document.getElementById("financial-freedom-total").value =
    numberFormatter.format(totalSpends);
  const salary = finalSalary();
  const totalPercentage = percentage(totalSpends, salary);
  document.getElementById("financial-freedom-percentage").value =
    parseInt(totalPercentage);
    document.getElementById("total-ideal-percentage-education").value = 10;
    document.getElementById("total-real-percentage-education").value = parseInt(totalPercentage);
}


function give() {
  const charitable = document.getElementById("charitable").value;
  const totalSpends = parseFloat(charitable);
  document.getElementById("charity-total").value =
    numberFormatter.format(totalSpends);
  const salary = finalSalary();
  const totalPercentage = percentage(totalSpends, salary);
  document.getElementById("charity-percentage").value = parseInt(totalPercentage);
  document.getElementById("total-ideal-percentage-give").value = 5;
  document.getElementById("total-real-percentage-give").value = parseInt(totalPercentage);
}