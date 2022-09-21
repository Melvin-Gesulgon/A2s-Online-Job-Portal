// function goToSite(){
//     window.location.replace("hello.html");
// }


function checkData(event) {
    // event.preventDefault();
    var enterEmail = document.getElementById('e').value;
    var enterPwd = document.getElementById('pw').value;

    // get data from local storage

    var getEmail = localStorage.getItem('email');
    var getPwd = localStorage.getItem('pwd1');

    // function goToSite()
    // {
    //     // window.location.replace("hello.html");
    //     window.location.href = "hello.html";
    // }

    if(enterEmail == getEmail)
    {
        if(enterPwd == getPwd)
        {
        

        // window.location.href ="hello.html";
        window.location.assign("./find_talent/companyprofile_account.html");
        // 
        // goToSite();
        // return false;
         }    
        else
        {
            alert("Wrong set of credentials entered.");
            return false;
        }
}
else
{
    alert("Invalid details!")
    return false;
}
    return
}


function goToSite(){
    window.location.replace("hello.html");
}