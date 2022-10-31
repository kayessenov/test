


function registration(e){
    e.preventDefault()
    const firstName = $("[name=firstName]").val()
    const lastName = $("[name=lastName]").val()
    const fatherName = $("[name=fatherName]").val()
    const phoneNumber = $("[name=phoneNumber]").val()
    const password = $("[name=password]").val()
    const IIN = $("[name=IIN]").val()
    console.log(firstName)
    $.ajax({url: "/api/user/registration", 
        type: "POST",
        data: {
            firstName, lastName, fatherName, phoneNumber, password, IIN
        },
        error: function(xhr,status,error){
            alert(error)
        },
        
        success: function(result){
            localStorage.setItem('token', result.data.token)
            localStorage.setItem('user', result.data.user)
            document.location = '/home'
         }
    });
};

function login(e){
    e.preventDefault()
    const phoneNumber = $("[name=phoneNumber]").val()
    const password = $("[name=password]").val()
    $.ajax({url: "/api/user/login", 
    type: "POST",
    data: {
        phoneNumber, password
    },
    error: function(xhr,status,error){
        alert(error)
    },
    
    success: function(result){
        localStorage.setItem('token', result.data.token)
        localStorage.setItem('user', result.data.user)

        document.location = '/home'
     }
});
}

(()=> {
    if(['/login', '/registration', '/home'].includes(document.location.pathname)) return
    $.ajax({url: "/api/user/check", 
        type: "POST",
        headers: {
            'Authorization': localStorage.getItem('token'),
            'Content-Type':'application/json'
        },
        error: function(xhr,status,error){
            document.location = '/login'
        }
    });
})()