// =======================================================
// FEATURES 1 & 3: Loop-Rendered Data with Category Filter
// =======================================================

// 1. Full menu dataset with explicit 'name' and 'category' keys
const menuItems = [
    { name: "Maasai Choma Platter", category: "main", detail: "Slow-roasted premium goat meat served with kachumbari and ugali.", price: "KSh 1,800" },
    { name: "Crispy Garlic Bruschetta", category: "appetizer", detail: "Toasted bread topped with tomatoes, garlic, and fresh basil.", price: "KSh 500" },
    { name: "Serengeti Sunset Cake", category: "dessert", detail: "Rich layered chocolate fudge cake topped with a wild berry reduction.", price: "KSh 600" },
    { name: "Prime Herb-Crusted Ribeye", category: "main", detail: "Juicy grilled steak served with garlic mashed potatoes.", price: "KSh 2,200" },
    { name: "Spicy Glazed Wings", category: "appetizer", detail: "Chicken wings tossed in our signature hot honey glaze.", price: "KSh 750" },
    { name: "Vanilla Bean Crème Brûlée", category: "dessert", detail: "Classic rich custard base topped with a layer of hardened caramelized sugar.", price: "KSh 550" }
];

const itemsContainer = document.getElementById('dynamic-services-container');
const filterButtons = document.querySelectorAll('.filter-btn');

// 2. Core function to display items based on a chosen filter selection
function displayMenu(categoryFilter) {
    // Clear out whatever is currently visible in the container
    itemsContainer.innerHTML = "";

    menuItems.forEach(item => {
        // Condition: Show item if filter is 'all' OR if it matches the item's category exactly
        if (categoryFilter === "all" || item.category === categoryFilter) {
            const card = document.createElement('div');
            card.className = 'menu-card';
            
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.detail}</p>
                <p><strong>${item.price}</strong></p>
            `;
            itemsContainer.appendChild(card);
        }
    });
}

// 3. Add click event listener triggers to each filter button
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.getAttribute('data-category');
        displayMenu(selectedCategory);
    });
});

// Run this immediately on page load so all menu items display initially!
displayMenu("all");
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
