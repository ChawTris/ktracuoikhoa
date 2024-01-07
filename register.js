let register = document.querySelector("#register")
register.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById('email')
    let pw = document.getElementById("password")

    let lowerCaseLetter = /[a-z]/g
    let upperCaseLetter = /[A-Z]/g
    let numbers = /[0-9]/g

    if (email.value.trim().length == 0 && pw.value.trim().length == 0) {
        alert("Vui lòng nhập email & mật khẩu")
    }
        else if (email.value.trim().length == 0) {
        alert("Nhập lại email")
    }
        else if (pw.value.trim().length == 0) {
        alert("Nhập lại mật khẩu")
    }
        else if (pw.value.trim().length < 8) {
        alert("Mật khẩu phải có ít nhất 8 kí tự")
    }  
        else if (!pw.value.trim().match(lowerCaseLetter)) {
            alert("Password must  contain a lowercase letter")
    }
        else if (!pw.value.trim().match(upperCaseLetter)) {
        alert("Password must  contain a uppercase letter")
    }
        else if (!pw.value.trim().match(numbers)) {
        alert("Password must  contain a number or special character")
    }
        else {
            if(localStorage.users) {
                let users = JSON.parse(localStorage.users)
                users.push({
                    email: email.value.trim(),
                    pw: pw.value.trim()
                })
                localStorage.setItem("users", JSON.stringify(users))
            } else {
                localStorage.setItem("users",
                JSON.stringify(
                [
                    {
                      email: email.value.trim(),
                      pw: pw.value.trim()
                    }
                ]));
            }
            location.replace("./indexdn.html")
    }

})