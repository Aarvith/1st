const incomeInput = document.getElementById('income');
const needsInput = document.getElementById('needs');
const wantsInput = document.getElementById('wants');
const savingsInput = document.getElementById('savings');

let chart = null;

function updateBudget() {
  const income = parseFloat(incomeInput.value) || 0;

  const needs = income * 0.50;
  const wants = income * 0.30;
  const savings = income * 0.20;

  needsInput.value = needs.toFixed(2);
  wantsInput.value = wants.toFixed(2);
  savingsInput.value = savings.toFixed(2);

  updateChart(needs, wants, savings);
}

function updateChart(needs, wants, savings) {
  const ctx = document.getElementById('budgetChart').getContext('2d');

  if (chart) {
    chart.data.datasets[0].data = [needs, wants, savings];
    chart.update();
  } else {
    chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Needs (50%)', 'Wants (30%)', 'Savings (20%)'],
        datasets: [{
          data: [needs, wants, savings],
          backgroundColor: ['#4e73df', '#e74a3b', '#1cc88a'],
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}

incomeInput.addEventListener('input', updateBudget);