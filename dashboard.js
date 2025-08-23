// Hamburger Menu
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Charts
const projectsCtx = document.getElementById('projectsChart').getContext('2d');
const projectsChart = new Chart(projectsCtx, {
  type: 'doughnut',
  data: {
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [{
      label: 'Projects',
      data: [7, 5, 3],
      backgroundColor: ['#00d1b2','#ffdd57','#ff3860'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { color: '#fff' } }
    }
  }
});

const messagesCtx = document.getElementById('messagesChart').getContext('2d');
const messagesChart = new Chart(messagesCtx, {
  type: 'line',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      label: 'Messages',
      data: [2,5,3,6,4,7,5],
      fill: false,
      borderColor: '#00d1b2',
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

// Sidebar toggle
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click',()=>{sidebar.classList.toggle('active');});

// Chart.js
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx,{type:'bar',data:{labels:['P1','P2','P3','P4'],datasets:[{label:'Progress %',data:[75,50,90,60],backgroundColor:'rgba(0,74,173,0.7)',borderColor:'rgba(0,74,173,1)',borderWidth:1}]},options:{responsive:true,scales:{y:{beginAtZero:true,max:100}}}});

// Firebase auth check
firebase.auth().onAuthStateChanged(user=>{
  if(!user){window.location.href='login.html';} 
  else{document.getElementById('user-name').textContent = user.email;}
});

// Logout
document.getElementById('logout-btn').addEventListener('click',()=>{
  firebase.auth().signOut().then(()=>{window.location.href='login.html';});
});

