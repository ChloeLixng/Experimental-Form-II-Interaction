document.addEventListener("DOMContentLoaded", () => {
  const speakers = document.querySelectorAll('.event');

  speakers.forEach(speaker => {
    const info = speaker.querySelector('.info');
    let speed = 0.5; 

    if (speaker.id === 'vanessa-dion-fletcher') {
      speed = 0.3; // Slow scroll speed for Vanessa
    } else if (speaker.id === 'kelsey-pugh') {
      speed = 0.7; // Moderate scroll speed for Kelsey
    } else if (speaker.id === 'anna-stielau') {
      speed = 1.0; // Fast scroll speed for Anna
    }

   
    info.addEventListener('scroll', () => {
      const scrollAmount = info.scrollTop * speed;
      info.style.transform = `translateY(-${scrollAmount}px)`;
    });
  });
});