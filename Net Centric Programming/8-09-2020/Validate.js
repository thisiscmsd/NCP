function Validate() {
    var letters = /^[A-Za-z\s]+$/;
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("cpass").value;
    var captcha="E5KXCN"
    var arr=[31,28,31,30,31,30,31,31,30,30,30,31]
    if(document.getElementById("fname").value=="")
    {
        alert("Name cannot be empty");
        setTimeout(function() {document.getElementById('fname').focus();}, 0);
        return false;
    }
    if(!document.getElementById("lname").value.match(letters) )
    {
        alert("Name should contain anly alphabets");
        setTimeout(function() {document.getElementById('lname').focus();}, 0);
        return false;

    }
    if (password=="" || confirmPassword=="")
    {
        alert("Password cannot be empty");
        setTimeout(function() {document.getElementById('pass').focus();}, 0);
        return false;
    }
    if (password.length < 6)
    {
        alert("Password must be minimum 6 characters");
        setTimeout(function() {document.getElementById('pass').focus();}, 0);
        return false;
    }
    if (password != confirmPassword) {
    alert("Passwords do not match.");
    setTimeout(function() {document.getElementById('cpass').focus();}, 0);
    return false;
    }
    if(document.getElementById("month").value==2 )
    {
    if( document.getElementById("year").value % 4 ==0 )
    {
        if(document.getElementById("day").value>29)
        {
            alert("invalid day for month.");
            setTimeout(function() {document.getElementById('day').focus();}, 0);
            return false;
        }
    }
    else{
        if(document.getElementById("day").value> 28 )
        {
        alert("invalid day for month.");
        setTimeout(function() {document.getElementById('day').focus();}, 0);
        return false;
        }
        }
    }
    if(document.getElementById("day").value > arr[document.getElementById("month").value-1] && document.getElementById("month").value!=2 )
    {
    alert("invalid day for month.");
    setTimeout(function() {document.getElementById('day').focus();}, 0);
    return false;
    }
    if(!document.getElementById("cap").value.match(captcha))
    {
    alert("please match pattern in box");
    setTimeout(function() {document.getElementById('cap').focus();}, 0);
    return false;
    }
return true;
}