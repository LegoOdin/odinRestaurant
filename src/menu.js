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
    hotDogMenu.newMenuItem("Beefy Boy", "", 19.99, false);
    hotDogMenu.newMenuItem("Da Deutch", "", 19.99, false);
    hotDogMenu.newMenuItem("Veggie Dog", "", 15.99, true);
    hotDogMenu.newMenuItem("OG Dog", "", 12.99, false);
    hotDogMenu.newMenuItem("American", "", 15.99, false);
    hotDogMenu.newMenuItem("That's a Burger", "", 19.99, false);





    hotDogMenu.menu.map(createMenuItem)

    function createMenuItem(item){

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("itemCont");
        
        
        const itemTitle = document.createElement("h3")
        itemTitle.textContent = item;
        
        itemContainer.appendChild(itemTitle);

        content.appendChild(itemContainer);


    }

}
export default menuPage;