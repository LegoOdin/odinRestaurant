function menuPage() {
    const content = document.getElementById("content");

    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    const pageTitle = document.createElement("h2");
    pageTitle.textContent = "Menu";
    content.appendChild(pageTitle);

    class menuItem {
        constructor(itemName, itemDesc,itemPrice, itemVeg){
            this.itemName=itemName;
            this.itemDesc=itemDesc;
            this.itemPrice=itemPrice;
            this.itemVeg=itemVeg;
        }
    }

    class fullMenu {
        constructor(){
            this.menu = [];
        }
        newMenuItem(itemName, itemDesc,itemPrice, itemVeg){
            let item = new menuItem(itemName, itemDesc,itemPrice, itemVeg);
            this.menu.push(item);
        }
    }

    let hotDogMenu = new fullMenu();
    hotDogMenu.newMenuItem("Beefy Boy", "Crafted with premium beef, this dog boasts a deep, smoky flavor and a satisfying snap. A timeless favorite.", 19.99, false);
    hotDogMenu.newMenuItem("Der Deutsche", "Taste of Berlin. Spicy bratwurst, tangy kraut, and a mustard punch. Street food, elevated.", 19.99, false);
    hotDogMenu.newMenuItem("Veggie Dog", "Flavor-packed, plant-based sausage, grilled to smoky perfection. Crafted with a blend of vegetables and spices, it delivers the classic hot dog experience, minus the meat.", 15.99, true);
    hotDogMenu.newMenuItem("OG Dog", "Classic sausage, bun, and your favorite condiments. Pure and delicious.", 12.99, false);
    hotDogMenu.newMenuItem("American", "American classic, this grilled sausage delivers a burst of savory flavor in every bite. A quick, delicious, and undeniably satisfying meal, perfect for any occasion.", 15.99, false);
    hotDogMenu.newMenuItem("That's a Burger", "Satisfying blend of seasoned ground meat, a perfectly toasted bun, and a symphony of fresh toppings. A culinary staple that delivers comfort and flavor in every bite.", 19.99, false);


    hotDogMenu.menu.map(createMenuItem)

    function createMenuItem(item){

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("itemCont");
        
        
        const itemTitle = document.createElement("h3")

        if(item.itemVeg){
            itemTitle.textContent = item.itemName + " (V)";
        } else {
            itemTitle.textContent = item.itemName;
        }
        itemContainer.appendChild(itemTitle);

        const itemDescrition = document.createElement("p");
        itemDescrition.textContent = item.itemDesc;
        itemContainer.appendChild(itemDescrition);

        const itemPrice = document.createElement("p");
        itemPrice.textContent = "$" + item.itemPrice;
        itemContainer.appendChild(itemPrice);

        content.appendChild(itemContainer);
    }

}
export default menuPage;