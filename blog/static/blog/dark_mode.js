document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('darkModeToggle');
  const moonIcon = document.querySelector('.moon');
  const sunIcon = document.querySelector('.sun');

  // Function to switch themes
  function switchTheme(e) {
    if (e.target.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'inline-block';
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      moonIcon.style.display = 'inline-block';
      sunIcon.style.display = 'none';
    }
  }

  // Event listener for the toggle switch
  toggleSwitch.addEventListener('change', switchTheme);

  // Event listener for moon icon
  moonIcon.addEventListener('click', function () {
    toggleSwitch.checked = true; // Set the checkbox to checked when moon is clicked
    switchTheme({ target: toggleSwitch }); // Call switchTheme to update theme
  });

  // Event listener for sun icon
  sunIcon.addEventListener('click', function () {
    toggleSwitch.checked = false; // Set the checkbox to unchecked when sun is clicked
    switchTheme({ target: toggleSwitch }); // Call switchTheme to update theme
  });

  // Check local storage for the theme preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      toggleSwitch.checked = true;
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'inline-block';
    } else {
      document.body.classList.remove('dark-mode');
      moonIcon.style.display = 'inline-block';
      sunIcon.style.display = 'none';
    }
  }
});
