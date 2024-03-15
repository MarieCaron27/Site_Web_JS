/*const form = document.querySelector("#signUpForm");

// Fonction de validation des champs de formulaire
function validerChamps(firstName,lastName,username,mailAddress,password,passwordConfirmed) 
{
    firstName.addEventListener("input",verifyNames(firstName));
    lastName.addEventListener("input",verifyNames(lastName));​
    username.addEventListener("input",verifyNames(username));
    mailAddress.addEventListener("input", verifyMail(mailAddress));​
    password.addEventListener("input", verifyPassword(password));
    passwordConfirmed.addEventListener("input", verifyPassword(passwordConfirmed));
    
    if(errorName !== "" || errorMail !== "" || errorPwd !== "") 
    {
        return false;
    }
    else if(password.value.trim() !== passwordConfirmed.value.trim())
    {
        errorPwdConfirmed = "Les deux mots de passe entrés ne correspondent pas."
    } 
    else
    {
        return true;
    }
}

// Écouteur d'événements de soumission de formulaire
form.addEventListener("submit", (event) => 
{
    // On empêche le comportement par défaut (rechargement de la page)
    event.preventDefault();

    const firstName = document.getElementById("firstNameSignUp");
    const lastName = document.getElementById("lastNameSignUp");
    const username = document.getElementById("usernameSignUp");
    const mailAddress = document.getElementById("mailSignUp");
    const password = document.getElementById("passwordSignUp");
    const passwordConfirmed = document.getElementById("passwordConfirmedSignUp");

    // On valide les champs avant de soumettre le formulaire
    if (validerChamps(firstName,lastName,username,mailAdress,password,passwordConfirmed) === true) 
    {
        alert("Bienvenue !");
    }
});*/

alert("I'm here 0")
const form = document.querySelector("#signUpForm");
alert("I'm here");

function validerChamps(firstName, lastName, username, mailAddress, password, passwordConfirmed) 
{
    alert("I'm here3");

    let errorPwdConfirmed = document.querySelector("#errorPwdConfirmed");
    let errorName = document.querySelector("#errorNameSignUp");
    let errorMail = document.querySelector("#errorMailSignUp");
    let errorPwd = document.querySelector("#errorPwdSignUp");

    firstName.addEventListener("input", () => verifyNames(firstName));
    lastName.addEventListener("input", () => verifyNames(lastName));
    username.addEventListener("input", () => verifyNames(username));
    mailAddress.addEventListener("input", () => verifyMail(mailAddress));
    password.addEventListener("input", () => verifyPassword(password));
    passwordConfirmed.addEventListener("input", () => verifyPassword(passwordConfirmed));

    if (errorName.innerHTML !== "" || errorMail.innerHTML !== "" || errorPwd.innerHTML !== "") 
    {
        return false;
    } 
    else if (password.value.trim() !== passwordConfirmed.value.trim()) 
    {
        alert("I'm here4");
        errorPwdConfirmed.innerHTML = "Les deux mots de passe entrés ne correspondent pas.";
        return false;
        
    } 
    else 
    {
        alert("I'm here4");
        return true;
    }
}

form.addEventListener("submit", (event) => 
{
    alert("I'm here1");
    event.preventDefault();

    const firstName = document.getElementById("firstNameSignUp");
    const lastName = document.getElementById("lastNameSignUp");
    const username = document.getElementById("usernameSignUp");
    const mailAddress = document.getElementById("mailSignUp");
    const password = document.getElementById("passwordSignUp");
    const passwordConfirmed = document.getElementById("passwordConfirmedSignUp");

    if (validerChamps(firstName, lastName, username, mailAddress, password, passwordConfirmed) === true) 
    {
        window.location.href = "./View/logInForm.html";
    }

    alert("I'm 2");
});
