function addnewWorkField() {

    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("workEField");
    newnode.setAttribute("row", 3);
    newnode.classList.add("mt-2");
    newnode.setAttribute("placeholder", "Enter here");


    let weOb = document.getElementById("workE");
    let weAddButtonOb = document.getElementById("WeAddButton");

    weOb.insertBefore(newnode, weAddButtonOb);
}


function addnewskillField() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("skillField");
    newnode.setAttribute("row", 3);
    newnode.setAttribute("column", 60);
    newnode.classList.add("mt-2");
    newnode.setAttribute("placeholder", "Enter here");


    let skill = document.getElementById("skills");
    let skillAdd = document.getElementById("skillAddButton");

    skill.insertBefore(newnode, skillAdd);

}

function addnewEducationField() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("EqField");
    newnode.setAttribute("row", 3);
    newnode.setAttribute("column", 60);
    newnode.classList.add("mt-2");
    newnode.setAttribute("placeholder", "Enter here");


    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newnode, aqAddButtonOb);

}



function generateCV() {
    let name = document.getElementById("nameField").value;
    let namet1 = document.getElementById("namet1");
    let namet2 = document.getElementById("namet2");

    namet1.innerHTML = name;
    namet2.innerHTML = name;

    document.getElementById("role").innerHTML = document.getElementById("job").value;


    let contact = document.getElementById("contactField").value;
    let contact1 = document.getElementById("contact1");

    contact1.innerHTML = contact;


    let address = document.getElementById("addressField").value;
    let address1 = document.getElementById("addresst1");

    address1.innerHTML = address;

    let linkedIN = document.getElementById("linkedField").value;
    let linked = document.getElementById("link1");

    linked.innerHTML = linkedIN;


    let github = document.getElementById("gitField").value;
    let git = document.getElementById("link2");

    git.innerHTML = github;


    let insta = document.getElementById("instaField").value;
    let insta1 = document.getElementById("link3");

    insta1.innerHTML = insta;


    let objField = document.getElementById("objectiveField").value;
    let obj1 = document.getElementById("objt1");

    obj1.innerHTML = objField;


    let wes = document.getElementsByClassName("workEField");
    let str = '';

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("workt1").innerHTML = str;



    let aq = document.getElementsByClassName("EqField");
    let str1 = '';

    for (let e of aq) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("academict1").innerHTML = str1;


    let skills = document.getElementsByClassName("skillField");
    let str3 = '';

    for (let e of skills) {
        str3 = str3 + `<li> ${e.value} </li>`;
    }

    document.getElementById("skill").innerHTML = str3;

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";


    let profilePic = document.getElementById("profile-pic");
    console.log(profilePic);
    let inputFile = document.getElementById("input-file");
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
    
}


function printCV(){
    window.print();
}