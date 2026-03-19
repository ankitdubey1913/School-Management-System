// Global Scripts for EduManage

document.addEventListener('DOMContentLoaded', () => {
  // Login Form Logic
  const loginForm = document.getElementById('loginForm');
  const roleTabs = document.querySelectorAll('.role-tab');
  
  // Set role from URL query param if present
  const urlParams = new URLSearchParams(window.location.search);
  const requestedRole = urlParams.get('role');
  let selectedRole = 'student';

  if (roleTabs.length > 0) {
    if (requestedRole && ['student', 'teacher', 'admin'].includes(requestedRole)) {
      roleTabs.forEach(t => t.classList.remove('active'));
      const activeTab = document.querySelector(`.role-tab[data-role="${requestedRole}"]`);
      if (activeTab) activeTab.classList.add('active');
      selectedRole = requestedRole;
    }

    roleTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        roleTabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        selectedRole = e.target.dataset.role;
      });
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const password = document.getElementById('password').value;
      const errorMsg = document.getElementById('loginError');
      
      if (password === 'demo123') {
        // Redirect to appropriate dashboard based on role
        if (selectedRole === 'student') window.location.href = 'student-dashboard.html';
        if (selectedRole === 'teacher') window.location.href = 'teacher-dashboard.html';
        if (selectedRole === 'admin') window.location.href = 'admin-dashboard.html';
      } else {
        errorMsg.style.display = 'block';
      }
    });
  }

  // Dashboard Sidebar Navigation (Placeholder functionality for demo)
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (this.getAttribute('href') === 'login.html') return; // let it navigate out
      
      sidebarLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      // In a real SPA, this would swap main content. 
      // Since this is HTML templates, we might just stay on the page.
    });
  });
});

// For Student Dashboard Tabs (Demo purpose)
function showTab(tabName) {
  console.log(`Switching to ${tabName} tab (Content swap simulation)`);
  // In a real application, you'd toggle visibility of sections based on this.
}
