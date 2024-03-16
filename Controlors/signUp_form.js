var form = document.getElementById("signUpForm");

document.ready(() =>
{
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
            alert("Welcome !");
        }
        else
        {
            alert("Problem !");
        }

    });
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

    let regexNames = /^[[:print:]]{8,15}$/;
    let regexMailAddress = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[&é~\"#'{(-|è`_ç^à@)°+=¤}¨£^$*µù%,?;.:!§<>€]).{8,15}$/;

    if(firstName.value.length === 0)
    {
        everythingOkay = false;
        errorFirstName.innerHTML = "Le champ est obligatoire...";
    }
    else if(firstName.value !== regexNames)
    {
        everythingOkay = false;
        errorFirstName.innerHTML = "Le prénom entré n'est pas valide. Il ne peut contenir que des caractères et sa taille doit être comprise entre 8 et 15.";
    }

    if(lastName.value.length === 0)
    {
        everythingOkay = false;
        errorLastName.innerHTML = "Le champ est obligatoire...";
    }
    else if(lastName.value !== regexNames)
    {
        everythingOkay = false;
        errorLastName.innerHTML = "Le nom entré n'est pas valide. Il ne peut contenir que des caractères et sa taille doit être comprise entre 8 et 15.";
    }

    if(username.value.length === 0)
    {
        everythingOkay = false;
        errorUsername.innerHTML = "Le champ est obligatoire...";
    }
    else if(username.value !== regexNames)
    {
        everythingOkay = false;
        errorUsername.innerHTML = "Le pseudo entré n'est pas valide. Il ne peut contenir que des caractères et sa taille doit être comprise entre 8 et 15.";
    }

    if(mailAddress.value.length === 0)
    {
        everythingOkay = false;
        errorMailAddress.innerHTML = "Le champ est obligatoire...";
    }
    else if(mailAddress.value !== regexMailAddress)
    {
        everythingOkay = false;
        errorMailAddress.innerHTML = "L'adress mail entrée n'est pas valide. Elle doit être au format RFP.";
    }

    if(userPassword.value.length === 0)
    {
        everythingOkay = false;
        errorPassword.innerHTML = "Le champ est obligatoire...";
    }
    else if(userPassword.value !== regexPassword)
    {
        everythingOkay = false;
        errorPassword.innerHTML = "L'adress mail entrée n'est pas valide. Elle doit être au format RFP.";
    }

    if(passwordConfirmed.value.length === 0)
    {
        everythingOkay = false;
        errorPasswordConfirmed.innerHTML = "Le champ est obligatoire...";
    }
    else if(passwordConfirmed !== userPassword)
    {
        everythingOkay = false;
        errorPasswordConfirmed.innerHTML = "Les deux mots de passe entrés ne correspondent pas !";
    }
}