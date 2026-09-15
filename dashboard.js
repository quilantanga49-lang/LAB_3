// Dashboard Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'index.html';
        return;
    }

    // Get user data
    const username = localStorage.getItem('username') || 'User';
    const loginTime = localStorage.getItem('loginTime');

    // Update username display
    document.getElementById('navUsername').textContent = username;

    // Get time-based greeting
    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) {
            return 'Good Morning';
        } else if (hour < 17) {
            return 'Good Afternoon';
        } else {
            return 'Good Evening';
        }
    }

    // Update greeting
    document.getElementById('greeting').textContent = getGreeting();

    // Display current date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    document.getElementById('dateDisplay').textContent = currentDate;

    // Statistics data for Student Portal
    const stats = [
        { title: 'Overall GPA', value: '3.85' },
        { title: 'Current Courses', value: '6' },
        { title: 'Pending Tasks', value: '12' },
        { title: 'Attendance', value: '94%' }
    ];

    // Update statistics
    function updateStatistics() {
        stats.forEach(function(stat, index) {
            const titleElement = document.getElementById(`stat${index + 1}-title`);
            const valueElement = document.getElementById(`stat${index + 1}-value`);
            
            if (titleElement && valueElement) {
                titleElement.textContent = stat.title;
                valueElement.textContent = stat.value;
            }
        });
    }

    // Activity data
    const activities = [
        { activity: 'Assignment Submitted', course: 'Web Development', date: 'Today', status: 'Completed', statusClass: 'success' },
        { activity: 'Quiz Attempted', course: 'System Analysis', date: 'Yesterday', status: 'Graded', statusClass: 'primary' },
        { activity: 'Project Proposal', course: 'System Integration Analysis', date: '2 days ago', status: 'Pending', statusClass: 'warning' },
        { activity: 'Lab Report', course: 'Computer Networks', date: '3 days ago', status: 'Completed', statusClass: 'success' },
        { activity: 'Research Paper', course: 'Database Systems', date: '4 days ago', status: 'In Review', statusClass: 'info' }
    ];

    // Populate activity table
    function populateActivityTable() {
        const tableBody = document.getElementById('activityTable');
        tableBody.innerHTML = '';
        
        activities.forEach(function(item) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.activity}</td>
                <td>${item.course}</td>
                <td>${item.date}</td>
                <td><span class="badge bg-${item.statusClass}">${item.status}</span></td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Handle logout
    document.getElementById('navLogout').addEventListener('click', function(e) {
        e.preventDefault();
        
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('loginTime');
        
        window.location.href = 'index.html';
    });

  
    // Initialize dashboard
    updateStatistics();
    populateActivityTable();

    // Simulate real-time updates (optional)
    setInterval(function() {
        const timeElement = document.getElementById('dateDisplay');
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        timeElement.textContent = currentDate + ' | ' + timeString;
    }, 60000);
});