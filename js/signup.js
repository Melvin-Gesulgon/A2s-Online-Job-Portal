function saveData() {


    let fName,lName,email,pwd1;
    
    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName").value;
    email = document.getElementById("email").value;
    pwd1 = document.getElementById("pwd1").value;
    // pwd2 = document.getElementById("pwd2").value;
    
    localStorage.setItem("fName",fName)
    localStorage.setItem("lName",lName)
    localStorage.setItem("email",email)
    localStorage.setItem("pwd1",pwd1)
    
    return
    }