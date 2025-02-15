// Input vs Selling Price Chart
const inputVsSellingCtx = document.getElementById("input-vs-selling-chart").getContext("2d");
new Chart(inputVsSellingCtx, {
  type: "bar",
  data: {
    labels: ["Input Cost", "Selling Price"],
    datasets: [{
      label: "₹ per kWh",
      data: [4, 10],
      backgroundColor: ["blue", "green"],
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// Cost Breakdown Chart
const costBreakdownCtx = document.getElementById("cost-breakdown-chart").getContext("2d");
new Chart(costBreakdownCtx, {
  type: "pie",
  data: {
    labels: ["Collection", "Storage", "Processing", "Miscellaneous"],
    datasets: [{
      label: "Cost (₹ per liter)",
      data: [1, 1.5, 1.2, 0.3],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#66BB6A"],
    }],
  },
  options: {
    responsive: true,
  },
});

// Order Form Submission
document.getElementById("order-form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Order submitted successfully! We will get back to you soon.");
  event.target.reset();
});
