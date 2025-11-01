// Hero glow fades on scroll
const header = document.querySelector('.hero h1');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxGlow = 30;
  const newGlow = Math.max(maxGlow - scrollY / 5, 0); 
  header.style.textShadow = `0 0 ${newGlow}px rgba(0,71,171,0.7), 0 0 ${newGlow*2}px rgba(0,71,171,0.5)`;
});

// Custom cursor
const cursor = document.createElement('div');
cursor.id = 'cursor';
document.body.appendChild(cursor);
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Type animation for hero text
const heroText = "Prakhar Mishra";
let index = 0;
const h1 = document.querySelector('.hero h1');
function type() {
  if(index < heroText.length){
    h1.textContent += heroText[index++];
    setTimeout(type, 150);
  }
}
type();

// Modal functions
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');

function showModal(project) {
  let msg = '';
  switch(project) {
    case 'portfolio':
      msg = "This is my portfolio website showcasing my coding skills.";
      break;
    case 'tennis':
      msg = "Check out my tennis videos and highlights for college recruiting.";
      break;
    case 'academics':
      msg = "Here are my academic achievements and goals.";
      break;
    case 'book':
      msg = "COMING SOON!    ";
      break;
  }
  modalText.textContent = msg;
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

// Close modal when clicking outside content
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}
