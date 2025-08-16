
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = btn.textContent.includes('❤️') ? '💔 Remove Favorite' : '❤️ Add to Favorites';
    });
  });


  document.querySelectorAll('.rating').forEach(ratingContainer => {
    const stars = ratingContainer.querySelectorAll('.star');
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const ratingValue = parseInt(star.getAttribute('data-rating'));
        stars.forEach(s => {
          s.classList.toggle('active', parseInt(s.getAttribute('data-rating')) <= ratingValue);
        });
      });
    });
  });

  
  document.querySelectorAll('.submit-comment').forEach(btn => {
    btn.addEventListener('click', () => {
      const comment = btn.previousElementSibling.value.trim();
      if (comment) {
        alert('Comment submitted: ' + comment);
        btn.previousElementSibling.value = ''; 
      } else {
        alert('Please write a comment first.');
      }
    });
  });

  const toggleBtn = document.getElementById('toggle-theme');
  const body = document.body;

  // Check saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleBtn.textContent = '☀️ Light Mode';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

