

let animalerie = [
    {
        name: "Felins",
        ref: "felins",
        especes: [
            {
                name: "Chats",
                ref: "chats",
                liste: [
                    { ref: 0, image: "truc", nom: "fnec", age: "2", description: "blablablsda", prix: 5040 },
                    { ref: 1, image: "trucA", nom: "fnac", age: "1", description: "blagblasbla", prix: 3500 },
                    { ref: 2, image: "trucB", nom: "fnuc", age: "3", description: "blabtrhlabla", prix: 5020 },
                    { ref: 3, image: "trucC", nom: "fnoc", age: "2", description: "blabl,,habla", prix: 5001 }
                ]
            },
            {
                name: "Lions",
                ref: "lions",
                liste: [
                    { ref: 0, image: "truc", nom: "fnec", age: "2", description: "blablablsda", prix: 5040 },
                    { ref: 1, image: "trucA", nom: "fnac", age: "1", description: "blagblasbla", prix: 3500 },
                    { ref: 2, image: "trucB", nom: "fnuc", age: "3", description: "blabtrhlabla", prix: 5020 },
                    { ref: 3, image: "trucC", nom: "fnoc", age: "2", description: "blabl,,habla", prix: 5001 }
                ]
            },
            {
                name: "Panthères",
                ref: "panthere",
                liste: [
                    { ref: 0, image: "truc", nom: "fnec", age: "2", description: "blablablsda", prix: 5040 },
                    { ref: 1, image: "trucA", nom: "fnac", age: "1", description: "blagblasbla", prix: 3500 },
                    { ref: 2, image: "trucB", nom: "fnuc", age: "3", description: "blabtrhlabla", prix: 5020 },
                    { ref: 3, image: "trucC", nom: "fnoc", age: "2", description: "blabl,,habla", prix: 5001 }
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
                    { ref: 0, image: "truc", nom: "fnec", age: "2", description: "blablablsda", prix: 5040 },
                    { ref: 1, image: "trucA", nom: "fnac", age: "1", description: "blagblasbla", prix: 3500 },
                    { ref: 2, image: "trucB", nom: "fnuc", age: "3", description: "blabtrhlabla", prix: 5020 },
                    { ref: 3, image: "trucC", nom: "fnoc", age: "2", description: "blabl,,habla", prix: 5001 }
                ]
            },
            {
                name: "Loups",
                ref: "loups",
                liste: [
                    { ref: 0, image: "truc", nom: "fnec", age: "2", description: "blablablsda", prix: 5040 },
                    { ref: 1, image: "trucA", nom: "fnac", age: "1", description: "blagblasbla", prix: 3500 },
                    { ref: 2, image: "trucB", nom: "fnuc", age: "3", description: "blabtrhlabla", prix: 5020 },
                    { ref: 3, image: "trucC", nom: "fnoc", age: "2", description: "blabl,,habla", prix: 5001 }
                ]
            },
            {
                name: "Renards",
                ref: "renards",
                liste: [
                    { ref: 0, image: "truc", nom: "fnec", age: "2", description: "blablablsda", prix: 5040 },
                    { ref: 1, image: "trucA", nom: "fnac", age: "1", description: "blagblasbla", prix: 3500 },
                    { ref: 2, image: "trucB", nom: "fnuc", age: "3", description: "blabtrhlabla", prix: 5020 },
                    { ref: 3, image: "trucC", nom: "fnoc", age: "2", description: "blabl,,habla", prix: 5001 }
                ]
            }
        ]
    }
]

function AddRowInFamille() {
    var newSubMenu = document.createElement('ul');
    newSubMenu.classList.add('dropdown-menu');

    return newSubMenu
}

function AddEspeceInRow(espece) {
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
    SubMenuName.id = espece.ref
    SubMenuName.setAttribute("data-espece", "espece")
    SubMenuName.innerHTML = espece.name

    var newSubSubMenu = document.createElement('ul');
    newSubSubMenu.classList.add('dropdown-menu');

    espece.liste.forEach(produit => {

        var newBaby = document.createElement('li');
        var newBabyLink = document.createElement('a');
        newBabyLink.href = "#"
        newBabyLink.innerHTML = produit.nom
        newBabyLink.id = produit.ref
        newBaby.appendChild(newBabyLink)
        newSubSubMenu.appendChild(newBaby)
    });

    newSubMenuButton.appendChild(SubMenuName)
    newSubMenuList.appendChild(newSubMenuButton)
    newSubMenuList.appendChild(newSubSubMenu)
    return newSubMenuList;
}

function AddFamilleInCol(familyName, familyRef) {
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
    nomFamille.id = familyName
    nomFamille.setAttribute("data-famille", "famille")
    nomFamille.innerHTML = familyRef

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

    animalerie.forEach(familleX => {
        let col = AddColMenu();//cree une colone
        menu.appendChild(col); //met la colone dans le menu
        let famille = AddFamilleInCol(familleX.name, familleX.ref);//met la famille dans la colonne
        let row = AddRowInFamille()//cree une ligne 
        familleX.especes.forEach(especeX => {
            let espece = AddEspeceInRow(especeX);// cree une espece (et les Babies)
            row.appendChild(espece);
            famille.appendChild(row)
        });
        col.appendChild(famille);
    });

    //var test1 = [ref: 0, image: "truc", nom: "fnec", age: "2", description: "blablablsda", prix: 50040]

    //displayInfos(test1)



});


function displayInfos(test) {
    console.log(test.image)
    document.querySelector("#image").innerHTML = test.image
    document.querySelector("#nom").innerHTML = test.nom
    document.querySelector("#age").innerHTML = test.age
    document.querySelector("#description").innerHTML = test.description
    document.querySelector("#prix").innerHTML = test.prix


}