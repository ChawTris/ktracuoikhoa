let login = document.getElementById('login')
login.addEventListener("submit", (e) => {
    e.preventDefault()

    if (localStorage.users) {
        let users = JSON.parse(localStorage.users)

        let email = document.getElementById("email").value.trim();
        let pw = document.getElementById("password").value.trim();

        let foundUser = users.find(user => user.email === email && user.pw === pw);

        if (foundUser) {
            window.location.href = "./index.html";
        } else {
            alert("Xin nhập lại");
        }
    } else {
        alert("Không tìm thấy người dùng.");
    }
});
