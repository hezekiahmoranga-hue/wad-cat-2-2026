

// 1. Full menu dataset 
var menuItems = [
    { name: "Maasai Choma Platter", category: "main", detail: "Slow-roasted premium goat meat served with kachumbari and ugali.", price: "KSh 1,800" },
    { name: "Crispy Garlic Bruschetta", category: "appetizer", detail: "Toasted bread topped with tomatoes, garlic, and fresh basil.", price: "KSh 500" },
    { name: "Serengeti Sunset Cake", category: "dessert", detail: "Rich layered chocolate fudge cake topped with a wild berry reduction.", price: "KSh 600" },
    { name: "Prime Herb-Crusted Ribeye", category: "main", detail: "Juicy grilled steak served with garlic mashed potatoes.", price: "KSh 2,200" },
    { name: "Spicy Glazed Wings", category: "appetizer", detail: "Chicken wings tossed in our signature hot honey glaze.", price: "KSh 750" },
    { name: "Vanilla Bean Crème Brûlée", category: "dessert", detail: "Classic rich custard base topped with a layer of hardened caramelized sugar.", price: "KSh 550" }
];

var itemsContainer = document.getElementById('dynamic-services-container');
var filterButtons = document.querySelectorAll('.filter-btn');

// 2. Core function using a standard for-loop and string concatenation
function displayMenu(categoryFilter) {
    // Clear out whatever is currently visible
    itemsContainer.innerHTML = "";

   
    for (var i = 0; i < menuItems.length; i++) {
        var item = menuItems[i];

        // Check if filter matches
        if (categoryFilter === "all" || item.category === categoryFilter) {
            var card = document.createElement('div');
            card.className = 'menu-card';
            
            
            card.innerHTML = '<h3>' + item.name + '</h3>' +
                             '<p>' + item.detail + '</p>' +
                             '<p><strong>' + item.price + '</strong></p>';
                             
            itemsContainer.appendChild(card);
        }
    }
}

// 3. Add click events using a standard loop and standard function syntax
for (var i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click', function() {
        var selectedCategory = this.getAttribute('data-category');
        displayMenu(selectedCategory);
    });
}

// Run immediately on page load
displayMenu("all");


// =======================================================
// FEATURE 2: Simple Form Validation
// =======================================================
var resortForm = document.getElementById('resort-form');
var formFeedback = document.getElementById('form-feedback');

resortForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stops page refresh
    
    var name = document.getElementById('guest-name').value;
    var email = document.getElementById('guest-email').value;
    var message = document.getElementById('guest-message').value;

    // Check fields
    if (name === "" || email === "" || message === "") {
        formFeedback.textContent = "Please fill out all fields.";
        formFeedback.style.color = "red";
    } 
    // Check email
    else if (email.indexOf("@") === -1) { 
        formFeedback.textContent = "Please enter a valid email address.";
        formFeedback.style.color = "red";
    } 
    // Success
    else {
        formFeedback.textContent = "Thank you! Your inquiry was sent successfully.";
        formFeedback.style.color = "green";
        resortForm.reset(); 
    }
});


// =======================================================
// FEATURE 4: Minimalist Theme Switcher
// =======================================================
var toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', function() {
   
    if (document.body.style.backgroundColor === "rgb(51, 51, 51)") {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
    } else {
        document.body.style.backgroundColor = "#333333";
        document.body.style.color = "#ffffff";
    }
});


// =======================================================
// FEATURE 5: Minimalist Calculator
// =======================================================
var nightsInput = document.getElementById('stay-nights');
var resultText = document.getElementById('calc-result');

nightsInput.addEventListener('input', function() {
    var nights = nightsInput.value;
    var total = nights * 7500;
    
    // Update text
    resultText.textContent = "KSh " + total;
});