/*var form = document.getElementById("signUpForm");


form.addEventListener("submit",(event)=>
{
    event.preventDefault();

    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var username = document.getElementById("username");
    var mailAddress = document.getElementById("mailAddress");
    var userPassword = document.getElementById("userPassword");
    var passwordConfirmed = document.getElementById("passwordConfirmed");

    if(validateFields(firstName,lastName,username,mailAddress,userPassword,passwordConfirmed) === true)
    {
        console.log("Welcome !");
    }
    else
    {
        console.log("Problem !");
    }

});

function validateFields(firstName,lastName,username,mailAddress,userPassword,passwordConfirmed)
{
    var everythingOkay = true;

    var errorFirstName = document.getElementById("errorFirstName");
    var errorLastName = document.getElementById("errorLastName");
    var errorUsername = document.getElementById("errorUsername");
    var errorMailAddress = document.getElementById("errorMailAddress");
    var errorPassword = document.getElementById("errorPassword");
    var errorPasswordConfirmed = document.getElementById("errorPasswordConfirmed");

    errorFirstName.innerHTML = "";
    errorLastName.innerHTML = "";
    errorUsername.innerHTML = "";
    errorMailAddress.innerHTML = "";
    errorPassword.innerHTML = "";
    errorPasswordConfirmed.innerHTML = "";

    let regexNames = /^[a-zA-Z]{2,20}$/;
    let regexUsername = /^([a-zA-Z0-9-]{4,})$/;
    let regexMailAddress = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[&é~\"#'{(-|è`_ç^à@)°+=¤}¨£^$*µù%,?;.:!§<>€]).{8,}$/;

    if(firstName.value.length === 0)
    {
        everythingOkay = false;
        errorFirstName.innerHTML = "Le champ est obligatoire...";
    }
    else if(!regexNames.test(firstName.value.trim()))
    {
        everythingOkay = false;
        errorFirstName.innerHTML = "Le prénom entré n'est pas valide. Il ne peut contenir que des caractères";
    }

    if(lastName.value.length === 0)
    {
        everythingOkay = false;
        errorLastName.innerHTML = "Le champ est obligatoire...";
    }
    else if(!regexNames.test(lastName.value.trim()))
    {
        everythingOkay = false;
        errorLastName.innerHTML = "Le nom entré n'est pas valide. Il ne peut contenir que des caractères.";
    }

    if(username.value.length === 0)
    {
        everythingOkay = false;
        errorUsername.innerHTML = "Le champ est obligatoire...";
    }
    else if(!regexUsername.test(username.value.trim()))
    {
        everythingOkay = false;
        errorUsername.innerHTML = "Le pseudo entré n'est pas valide. Il doit contenir au moins 4 caractères ou 4 chiffres.";
    }

    if(mailAddress.value.length === 0)
    {
        everythingOkay = false;
        errorMailAddress.innerHTML = "Le champ est obligatoire...";
    }
    else if(!regexMailAddress.test(mailAddress.value.trim()))
    {
        everythingOkay = false;
        errorMailAddress.innerHTML = "L'adress mail entrée n'est pas valide. Elle doit être au format RFP.";
    }

    if(userPassword.value.length === 0)
    {
        everythingOkay = false;
        errorPassword.innerHTML = "Le champ est obligatoire...";
    }
    else if(!regexPassword.test(userPassword.value.trim()))
    {
        everythingOkay = false;
        errorPassword.innerHTML = "Le mot de passe entré n'est pas valide. Il doit contenir au moins 8 caractères dont une majuscule, un chiffre et un caractère spécial.";
    }

    if(passwordConfirmed.value.length === 0)
    {
        everythingOkay = false;
        errorPasswordConfirmed.innerHTML = "Le champ est obligatoire...";
    }
    else if(passwordConfirmed.value.trim() !== userPassword.value.trim())
    {
        everythingOkay = false;
        errorPasswordConfirmed.innerHTML = "Les deux mots de passe entrés ne correspondent pas !";
    }

    return everythingOkay;
}*/

exports.register = (req,res) =>
{
    console.log(req.body);
    res.send("Form submitted");
}