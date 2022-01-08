//Total array initialization
const finalTotal = [];

//Formatting all the totals to get a USD currency format
const numberFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

//Initialization of all the totals and percetages
//totals
const valorInicial = 0;
const totalNeeds = document.getElementById("necessities-total");
const totalLongSavings = document.getElementById("long-term-total");
const totalPlay = document.getElementById("play-total");
const totalEducation = document.getElementById("education-total");
const totalFinancialFreedom = document.getElementById(
  "financial-freedom-total"
);
const totalGive = document.getElementById("give-total");

//percentages
const totalNeedsPercentage = document.getElementById("necessities-percentage");
const totalLongSavingsPercentage = document.getElementById(
  "long-term-percentage"
);
const totalPlayPercentage = document.getElementById("play-percentage");
const totalEducationPercentage = document.getElementById(
  "education-percentage"
);
const totalFinancialFreedomPercentage = document.getElementById(
  "financial-freedom-percentage"
);
const totalGivePercentage = document.getElementById("give-percentage");

//giving the value to the inner text of every element that will show a result
//values
totalNeeds.innerText = `$ ${valorInicial}`;
totalLongSavings.innerText = `$ ${valorInicial}`;
totalPlay.innerText = `$ ${valorInicial}`;
totalEducation.innerText = `$ ${valorInicial}`;
totalFinancialFreedom.innerText = `$ ${valorInicial}`;
totalGive.innerText = `$ ${valorInicial}`;

//percentages
totalNeedsPercentage.innerText = `${valorInicial}%`;
totalLongSavingsPercentage.innerText = `${valorInicial}%`;
totalPlayPercentage.innerText = `${valorInicial}%`;
totalEducationPercentage.innerText = `${valorInicial}%`;
totalFinancialFreedomPercentage.innerText = `${valorInicial}%`;
totalGivePercentage.innerText = `${valorInicial}%`;

//function to calculate the percetange depending on the salary
function percentage(totalSpendNecessities, salary) {
  return (totalSpendNecessities * 100) / salary;
}

//function to calculate the final salary if there is any deduction
function finalSalary() {
  const salaryValue = document.getElementById("salary").value;
  const deductionValue = document.getElementById("deductions").value;
  const totalSalary = salaryValue - salaryValue * (deductionValue / 100);
  const answer = document.getElementById("answer");

  if (salaryValue === "") {
    answer.innerText = "You must enter a salary to begin";
  } else if (totalSalary < 0) {
    answer.innerText = "The salary must be higher than the deductions";
  } else {
    answer.innerText = "Your final salary is $ " + totalSalary;
    document.getElementById("initialValue").innerText =
      numberFormatter.format(totalSalary);
    showCalculation();
  }
  return totalSalary;
}

//show all the calculations

function showCalculation() {
  document.getElementById("calculations").style.display = "block";
}

//calculate all the spendings
function total(totalList) {
  const finalValue = totalList.reduce(function (val = 0, newVal) {
    return val + newVal;
  });
  document.getElementById("finalTotal").innerText =
    numberFormatter.format(finalValue);
  document.getElementById("finalTotal-label").style.display = "block";
  document.getElementById("initialValue-label").style.display = "block";
  return finalValue;
}

//calculate necessities

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

  totalNeeds.innerText = numberFormatter.format(totalSpends);
  const salary = finalSalary();
  const totalPercentage = percentage(totalSpends, salary);
  totalNeedsPercentage.innerText = `${parseFloat(totalPercentage).toPrecision(
    2
  )}%`;
  document.getElementById("total-ideal-percentage-needs").value = 55 + " %";
  document.getElementById("total-real-percentage-needs").value =
    parseFloat(totalPercentage).toPrecision(2) + " %";

  if (totalPercentage > 55) {
    document.getElementById(
      "total-real-percentage-needs"
    ).style.backgroundColor = "#440000";
  } else {
    document.getElementById(
      "total-real-percentage-needs"
    ).style.backgroundColor = "#004417";
  }

  finalTotal.push(totalSpends);
}

//calculate long term savings

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
  totalLongSavings.innerText = numberFormatter.format(totalSpends);
  const salary = finalSalary();
  const totalPercentage = percentage(totalSpends, salary);
  totalLongSavingsPercentage.innerText = `${parseFloat(
    totalPercentage
  ).toPrecision(2)}%`;
  document.getElementById("total-ideal-percentage-long").value = 10 + " %";
  document.getElementById("total-real-percentage-long").value =
    parseFloat(totalPercentage).toPrecision(2) + " %";

  if (totalPercentage < 10) {
    document.getElementById(
      "total-real-percentage-long"
    ).style.backgroundColor = "#440000";
  } else {
    document.getElementById(
      "total-real-percentage-long"
    ).style.backgroundColor = "#004417";
  }

  finalTotal.push(totalSpends);
}

//calculate play

function play() {
  const spoiling = document.getElementById("spoiling").value;
  const leisure = document.getElementById("leisure").value;
  const totalSpends = parseFloat(spoiling) + parseFloat(leisure);
  totalPlay.innerText = numberFormatter.format(totalSpends);
  const salary = finalSalary();
  const totalPercentage = percentage(totalSpends, salary);
  totalPlayPercentage.innerText = `${parseFloat(totalPercentage).toPrecision(
    2
  )}%`;
  document.getElementById("total-ideal-percentage-play").value = 10 + " %";
  document.getElementById("total-real-percentage-play").value =
    parseFloat(totalPercentage).toPrecision(2) + " %";

  if (totalPercentage > 10) {
    document.getElementById(
      "total-real-percentage-play"
    ).style.backgroundColor = "#440000";
  } else {
    document.getElementById(
      "total-real-percentage-play"
    ).style.backgroundColor = "#004417";
  }

  finalTotal.push(totalSpends);
}

//calculate education

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
  totalEducation.innerText = numberFormatter.format(totalSpends);
  const salary = finalSalary();
  const totalPercentage = percentage(totalSpends, salary);
  totalEducationPercentage.innerText = `${parseFloat(
    totalPercentage
  ).toPrecision(2)}%`;
  document.getElementById("total-ideal-percentage-education").value = 10 + " %";
  document.getElementById("total-real-percentage-education").value =
    parseFloat(totalPercentage).toPrecision(2) + " %";

  if (totalPercentage < 10) {
    document.getElementById(
      "total-real-percentage-education"
    ).style.backgroundColor = "#440000";
  } else {
    document.getElementById(
      "total-real-percentage-education"
    ).style.backgroundColor = "#004417";
  }

  finalTotal.push(totalSpends);
}

//calculate financial freedom

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
  totalFinancialFreedom.innerText = numberFormatter.format(totalSpends);
  const salary = finalSalary();
  const totalPercentage = percentage(totalSpends, salary);
  totalFinancialFreedomPercentage.innerText = `${parseFloat(
    totalPercentage
  ).toPrecision(2)}%`;
  document.getElementById("total-ideal-percentage-freedom").value = 10 + " %";
  document.getElementById("total-real-percentage-freedom").value =
    parseFloat(totalPercentage).toPrecision(2) + " %";

  if (totalPercentage < 10) {
    document.getElementById(
      "total-real-percentage-freedom"
    ).style.backgroundColor = "#440000";
  } else {
    document.getElementById(
      "total-real-percentage-freedom"
    ).style.backgroundColor = "#004417";
  }

  finalTotal.push(totalSpends);
}

//calculate give

function give() {
  const charitable = document.getElementById("charitable").value;
  const totalSpends = parseFloat(charitable);
  totalGive.innerText = numberFormatter.format(totalSpends);
  const salary = finalSalary();
  const totalPercentage = percentage(totalSpends, salary);
  totalGivePercentage.innerText = `${parseFloat(totalPercentage).toPrecision(
    2
  )}%`;
  document.getElementById("total-ideal-percentage-give").value = 5 + " %";
  document.getElementById("total-real-percentage-give").value =
    parseFloat(totalPercentage).toPrecision(2) + " %";

  if (totalPercentage < 5) {
    document.getElementById(
      "total-real-percentage-give"
    ).style.backgroundColor = "#440000";
  } else {
    document.getElementById(
      "total-real-percentage-give"
    ).style.backgroundColor = "#004417";
  }

  finalTotal.push(totalSpends);
}
