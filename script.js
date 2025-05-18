// Function to display details about a ceramic piece when clicked
function viewCeramicDetails(ceramicName) {
    let ceramicDetails = "";

    if (ceramicName === 'Ceramic Vase') {
        ceramicDetails = `
            <h3>Ceramic Vase</h3>
            <p>This beautifully crafted vase blends modern design with rustic charm. Handcrafted with care, it adds elegance to any room.</p>
        `;
    } else if (ceramicName === 'Pottery Mug') {
        ceramicDetails = `
            <h3>Pottery Mug</h3>
            <p>This handcrafted mug is perfect for your morning coffee or tea. Made with high-quality ceramic, it provides both style and durability.</p>
        `;
    } else if (ceramicName === 'Ceramic Bowl') {
        ceramicDetails = `
            <h3>Ceramic Bowl</h3>
            <p>A versatile bowl perfect for soups, salads, and desserts. The handmade bowl brings a rustic, natural feel to your dining table.</p>
        `;
    }

    // Display the details in a popup (alert box)
    alert(ceramicDetails);
}

// Optional: Smooth scrolling functionality (if not already included in HTML)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll-to-top button functionality (optional)
const topBtn = document.createElement('button');
topBtn.id = 'topBtn';
topBtn.title = 'Back to top';
topBtn.textContent = '↑';
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});

// Scroll to top action
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});