// Hamburger Menu Toggle
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Charts
const usersCtx = document.getElementById('usersChart').getContext('2d');
const projectsCtx = document.getElementById('projectsChart').getContext('2d');

const usersChart = new Chart(usersCtx, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
        datasets: [{
            label: 'Active Users',
            data: [50, 70, 100, 120, 130, 110, 120],
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderColor: 'rgba(255,255,255,1)',
            borderWidth: 2,
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: '#fff' } }
        },
        scales: {
            x: { ticks: { color: '#fff' } },
            y: { ticks: { color: '#fff' } }
        }
    }
});

const projectsChart = new Chart(projectsCtx, {
    type: 'bar',
    data: {
        labels: ['Website','Portfolio','E-Commerce','Dashboard','App'],
        datasets: [{
            label: 'Projects Completed',
            data: [5,3,4,2,1],
            backgroundColor: 'rgba(255,255,255,0.6)',
            borderColor: 'rgba(255,255,255,1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: '#fff' } }
        },
        scales: {
            x: { ticks: { color: '#fff' } },
            y: { ticks: { color: '#fff' } }
        }
    }
});

// Tools interaction
const tools = document.querySelectorAll('.tool-card');

tools.forEach(tool => {
  tool.addEventListener('click', () => {
    alert(`You clicked: ${tool.querySelector('p').textContent}`);
  });
});
