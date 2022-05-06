

let animalerie = [
    {
        name: "Felins",
        ref: "felins",
        especes: [
            {
                name: "Chats",
                ref: "chats",
                liste: [
                    { image: "truc", nom: "fnec", age: "2", description: "blablablsda", prix: 5040 },
                    { image: "trucA", nom: "fnac", age: "1", description: "blagblasbla", prix: 3500 },
                    { image: "trucB", nom: "fnuc", age: "3", description: "blabtrhlabla", prix: 5020 },
                    { image: "trucC", nom: "fnoc", age: "2", description: "blabl,,habla", prix: 5001 }
                ]
            },
            {
                name: "Lions",
                ref: "lions",
                liste: [
                    { image: "truc", nom: "fnec", age: "2", description: "blablablsda", prix: 5040 },
                    { image: "trucA", nom: "fnac", age: "1", description: "blagblasbla", prix: 3500 },
                    { image: "trucB", nom: "fnuc", age: "3", description: "blabtrhlabla", prix: 5020 },
                    { image: "trucC", nom: "fnoc", age: "2", description: "blabl,,habla", prix: 5001 }
                ]
            },
            {
                name: "Chats",
                ref: "chats",
                liste: [
                    { image: "truc", nom: "fnec", age: "2", description: "blablablsda", prix: 5040 },
                    { image: "trucA", nom: "fnac", age: "1", description: "blagblasbla", prix: 3500 },
                    { image: "trucB", nom: "fnuc", age: "3", description: "blabtrhlabla", prix: 5020 },
                    { image: "trucC", nom: "fnoc", age: "2", description: "blabl,,habla", prix: 5001 }
                ]
            }
        ]
    },
    {
        name: "Canins",
        ref: "canins",
        especes: [
            {
                name: "Chiens",
                ref: "chiens",
                liste: [
                    { image: "truc", nom: "fnec", age: "2", description: "blablablsda", prix: 5040 },
                    { image: "trucA", nom: "fnac", age: "1", description: "blagblasbla", prix: 3500 },
                    { image: "trucB", nom: "fnuc", age: "3", description: "blabtrhlabla", prix: 5020 },
                    { image: "trucC", nom: "fnoc", age: "2", description: "blabl,,habla", prix: 5001 }
                ]
            },
            {
                name: "Loups",
                ref: "loups",
                liste: [
                    { image: "truc", nom: "fnec", age: "2", description: "blablablsda", prix: 5040 },
                    { image: "trucA", nom: "fnac", age: "1", description: "blagblasbla", prix: 3500 },
                    { image: "trucB", nom: "fnuc", age: "3", description: "blabtrhlabla", prix: 5020 },
                    { image: "trucC", nom: "fnoc", age: "2", description: "blabl,,habla", prix: 5001 }
                ]
            },
            {
                name: "Renards",
                ref: "renards",
                liste: [
                    { image: "truc", nom: "fnec", age: "2", description: "blablablsda", prix: 5040 },
                    { image: "trucA", nom: "fnac", age: "1", description: "blagblasbla", prix: 3500 },
                    { image: "trucB", nom: "fnuc", age: "3", description: "blabtrhlabla", prix: 5020 },
                    { image: "trucC", nom: "fnoc", age: "2", description: "blabl,,habla", prix: 5001 }
                ]
            }
        ]
    }
]


function AddEspeceInFamille() {
    var newSubMenu = document.createElement('ul');
    newSubMenu.classList.add('dropdown-menu');

    var newSubMenuList = document.createElement('li');
    newSubMenuList.classList.add('dropright-submenu');

    var newSubMenuButton = document.createElement('a');
    newSubMenuButton.href = "#"
    newSubMenuButton.classList.add('dropright-toggle');
    newSubMenuButton.dataToggle = "dropdown"
    newSubMenuButton.role = "button"
    newSubMenuButton.ariaHasPopup = "true"
    newSubMenuButton.ariaExpanded = "false"

    var SubMenuName = document.createElement('span');
    SubMenuName.classList.add('nav-label');
    ////////////////////////cherher le nom
    SubMenuName.id = "espece1"
    ////////////////////////
    SubMenuName.setAttribute("data-espece", "espece")
    SubMenuName.innerHTML = "espece"

    var newSubSubMenu = document.createElement('ul');
    newSubSubMenu.classList.add('dropdown-menu');

    //////////////////////////////dans boucle for
    var newBaby = document.createElement('li');
    var newBabyLink = document.createElement('a');
    newBabyLink.href = "#"
    newBabyLink.innerHTML = "testFinal1"

    var newBaby2 = document.createElement('li');
    var newBabyLink2 = document.createElement('a');
    newBabyLink2.href = "#"
    newBabyLink2.innerHTML = "testFinal2"
    ////////////////////////

    newBaby2.appendChild(newBabyLink2)
    newSubSubMenu.appendChild(newBaby2)
    newBaby.appendChild(newBabyLink)
    newSubSubMenu.appendChild(newBaby)


    newSubMenuButton.appendChild(SubMenuName)
    newSubMenuList.appendChild(newSubMenuButton)
    newSubMenuList.appendChild(newSubSubMenu)
    newSubMenu.appendChild(newSubMenuList)

    return newSubMenu;

}

function AddFamilleInCol() {

    var newDropdownMenu = document.createElement('ul');
    newDropdownMenu.classList.add('dropdown');

    var famille = document.createElement('a');
    famille.classList.add('dropdown-toggle');
    famille.setAttribute("data-toggle", "dropdown");

    famille.ariaRoleDescription = 'button'
    famille.ariaHasPopup = 'true'
    famille.ariaExpanded = 'true'

    var nomFamille = document.createElement('span');
    nomFamille.classList.add('nav-label')
    ////////////////////////cherher le nom
    nomFamille.id = "famille1"
    ////////////////////////
    nomFamille.setAttribute("data-famille", "famille")
    nomFamille.innerHTML = "Famille"

    famille.appendChild(nomFamille)
    newDropdownMenu.appendChild(famille)
    return newDropdownMenu;
}

function AddColMenu() {
    var newColMenu = document.createElement('div');
    newColMenu.classList.add('col');
    newColMenu.classList.add('d-flex');
    newColMenu.classList.add('nav');
    newColMenu.classList.add('navbar-nav');

    return newColMenu
}

document.addEventListener("DOMContentLoaded", () => {
    var menu = document.querySelector('#menu')
    var col = AddColMenu();

    animalerie.forEach(element => {

        console.log(element.name)

    });
    var famille = AddFamilleInCol();
    var espece = AddEspeceInFamille();


    famille.appendChild(espece);
    col.appendChild(famille);
    menu.appendChild(col);

});