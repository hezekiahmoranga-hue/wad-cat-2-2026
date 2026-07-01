// FEATURE 1: Loop-rendered dynamic content (Resort Menu Specials)
const dynamicItems = [
    { name: "Maasai Choma Platter", detail: "Slow-roasted premium goat meat served with kachumbari and ugali.", price: "KSh 1,800" },
    { name: "Mara Safari Mocktail", detail: "A refreshing blend of passion fruit, mint, mango juice, and ginger ale.", price: "KSh 450" },
    { name: "Serengeti Sunset Cake", detail: "Rich layered chocolate fudge cake topped with a wild berry reduction.", price: "KSh 600" }
];

const itemsContainer = document.getElementById('dynamic-services-container');

// Loop through the array and render each menu item dynamically
dynamicItems.forEach(item => {
    // Create a new div element for each menu item card
    const card = document.createElement('div');
    card.className = 'menu-card'; // Keeps your existing CSS styling intact!
    
    // Set the inside content (Crucial: item.name is explicitly present)
    card.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.detail}</p>
        <p><strong>${item.price}</strong></p>
    `;
    
    // Add this card into your main HTML menu section
    itemsContainer.appendChild(card);
});
// FEATURE 2: Simple Form Validation
const resortForm = document.getElementById('resort-form');
const formFeedback = document.getElementById('form-feedback');

resortForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stops the page from refreshing
    
    // Grab text from input boxes
    const name = document.getElementById('guest-name').value;
    const email = document.getElementById('guest-email').value;
    const message = document.getElementById('guest-message').value;

    // 1. Check if any fields are empty
    if (name === "" || email === "" || message === "") {
        formFeedback.textContent = "Please fill out all fields.";
        formFeedback.style.color = "red";
    } 
    // 2. Check if the email looks like a real email (contains '@')
    else if (!email.includes("@")) {
        formFeedback.textContent = "Please enter a valid email address.";
        formFeedback.style.color = "red";
    } 
    // 3. Success!
    else {
        formFeedback.textContent = "Thank you! Your inquiry was sent successfully.";
        formFeedback.style.color = "green";
        resortForm.reset(); // Clears the form inputs
    }
});