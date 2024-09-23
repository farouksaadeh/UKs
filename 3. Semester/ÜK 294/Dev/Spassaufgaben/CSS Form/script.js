document.addEventListener('mousemove', function(e) {
    const mouseFollow = document.getElementById('mouseFollow');
    mouseFollow.style.left = `${e.clientX}px`;
    mouseFollow.style.top = `${e.clientY}px`;
  });
  