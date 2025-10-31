// Fade hero "Prakhar Mishra" glow on scroll
const header = document.querySelector('.hero h1');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxGlow = 30; // max glow radius
  const newGlow = Math.max(maxGlow - scrollY / 5, 0); 
  header.style.textShadow = `0 0 ${newGlow}px rgba(0,71,171,0.7), 0 0 ${newGlow*2}px rgba(0,71,171,0.5)`;
});


// Example function for project button
function showMessage() {
  alert("More details about this project coming soon!");
}
