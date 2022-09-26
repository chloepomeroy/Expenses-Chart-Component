const canvasElement = document.getElementById("chart")

const data = {
  labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], 
  datasets: [
    {
      label: "Spending", 
      data: [18.32, 36.65, 52.36, 31.07, 23.56, 44.50, 26.18],
      backgroundColor: ["#ec775f", "#ec775f", "#76b5bc", "#ec775f", "#ec775f", "#ec775f", "#ec775f"],
      hoverBackgroundColor: ["#ff9b87", "#ff9b87", "#b4dfe5", "#ff9b87", "#ff9b87", "#ff9b87", "#ff9b87"],
      borderRadius: 4,
      borderSkipped: false
    }
  ]
}

//font styling
Chart.defaults.font.size = 12;
Chart.defaults.font.family = "DM Sans";
Chart.defaults.color = "#93867b";

const titleTooltip = (tooltipItems) => {
    return context.dataset.data[context.dataIndex]
}

const tooltipLabel = (tooltipItems) => {
    return ''
}

const config = {
    type: "bar",
    data: data,
    options: {
        scales: {
            y: {
                display: false,
                max: 70
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                caretSize: 0,
                caretPadding: 5,
                yAlign: 'bottom',
                xAlign: 'center',
                backgroundColor: "#382314",
                displayColors: false,
                bodyFont: {size: "12px", family: "DM Sans"},
                bodyAlign: 'center',
                boxPadding: '100px',
                callbacks: {
                    title : () => null,
                    label: function(tooltipItems, data) {
                        return "$" + tooltipItems.parsed.y.toFixed(2);
                    }
                },
            },
        },
        maintainAspectRatio: false
    },
}

const spendingChart = new Chart(canvasElement, config)


