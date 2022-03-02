 function validate()
 {
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if(username.length>=8&&password.length>=8)
    {
        alert('login')
        
    }
    else{
        alert('failed')
        
    }
 }


