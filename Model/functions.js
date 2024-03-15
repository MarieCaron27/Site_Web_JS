const regexNames = new RegExp("^[[:print:]]$");
const regexMail = new RegExp("^(([^<>()[\\]\\.,;:\\s@\"]+(\\.[^<>()[\\]\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$");
const regexPwd = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[&é~\"#'{(-|è`_ç^à@)°+=¤}¨£^$*µù%,?;.:!§<>€]).{8,15}$");

function verifyNames(name)
{
    const valueName = name.value.trim();
    let errorName = document.querySelector("#errorNameSignUp");

    if (valueName === "") 
    {
        errorName.innerHTML = "Le champs ne peut être vide !";
    } 
    else if(valueName !== regexNames)
    {
        errorName.innerHTML = "Le champ que vous avez entré est invalide. Il ne peut contenir uniquement des caractères imprimables.";
    }
    else
    {
        errorName.innerHTML = "";
    }
}


function verifyMail(mail)
{
    const valueMail = mail.value.trim();
    let errorMail = document.querySelector("#errorMailSignUp");

    if(valueMail === "")
    {
        errorMail.innerHTML = "Le champs ne peut être vide !";
    }
    else if(valueMail !== regexMail)
    {
        errorMail.innerHTML = "L'adresse mail entrée est incorrecte. Elle doit être au format RFP.";
    }
    else
    {
        errorMail.innerHTML = "";
    }
}

function verifyPassword(password)
{
    const valuePwd = password.value.trim();
    let errorPwd = document.querySelector("#errorPwdSignUp");
        
    if(valuePwd === "")
    {
        errorPwd.innerHTML = "Le champs ne peut être vide !";
    }
    else if(valuePwd !== regexPwd)
    {
        errorPwd.innerHTML = "Le mot de passe que vous avez entré est invalide. Il ne contenir uniquement des caractères imprimables dont une majuscule, une minuscule et un caractères spécial. Sa taille doit être comprise entre 8 et 15 caractères.";
    }
    else
    {
        errorPwd.innerHTML = "";
    }
}