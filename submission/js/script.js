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