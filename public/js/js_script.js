createMenu(menu);

var myButton = document.getElementById("orderButton");
myButton.addEventListener("click", orderDone);

function createMenu(menu) {
    var elem = document.getElementById("menu");
    for (i in menu) {
        //Creates a containing div
        var container = document.createElement("div");
        container.classList.add("burger");

        //Adds name of burger as a heading
        var listHead = document.createElement("h3");
        var listHeadText = document.createTextNode(menu[i].name);

//Adds an image of the burger
        var burgerImage = document.createElement("img");
        burgerImage.src = menu[i].img;
        burgerImage.setAttribute("width", "200px");

        //Creates list for information about the burger
        var listCont = document.createElement("ul");

        //Adds information about the burger
        var typeList = document.createElement("li");
        var typeText = document.createTextNode(menu[i].info);
        typeList.appendChild(typeText);
        listCont.appendChild(typeList);

        //Adds information about calories
        var kcalList = document.createElement("li");
        var kcalText = document.createTextNode(menu[i].kCal + "kcal");
        kcalList.appendChild(kcalText);
        listCont.appendChild(kcalList);


        //Adds information about gluten
        if (menu[i].gluten) {
            var glutenList = document.createElement("li");
            var glutenText = document.createTextNode("Contains gluten");
            glutenList.appendChild(glutenText);
            listCont.appendChild(glutenList);
        }
        //Adds information about lactose
        if (menu[i].lactose) {
            var lactoseList = document.createElement("li");
            var lactoseText = document.createTextNode("Contains dairy products");
            lactoseList.appendChild(lactoseText);
            listCont.appendChild(lactoseList);
        }

        listHead.appendChild(listHeadText);
        listCont.appendChild(listHead);

        container.appendChild(listHead);
        container.appendChild(burgerImage);
        container.appendChild(listCont);

        elem.appendChild(container);
    }
}

function orderDone(){
    console.log("Order has been placed!");
}