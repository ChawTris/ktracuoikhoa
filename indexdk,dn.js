// Function to handle registration form submission
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Check if username is not already registered
    if (!localStorage.getItem(username)) {
        // Save user data to Local Storage
        localStorage.setItem(username, JSON.stringify({ username, password }));
        alert('Đăng ký tài khoản thành công ! Bây giờ bạn đã có thể đăng nhập và đặt dịch vụ.');
    } else {
        alert('Tên đăng nhập đã được sử dụng! Bạn có thể chọn tên khác không??');
    }
});

// Function to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check if username is registered
    if (localStorage.getItem(username)) {
        const storedUser = JSON.parse(localStorage.getItem(username));

        // Check if the entered password matches the stored password
        if (password === storedUser.password) {
            alert('Đăng nhập thành công! Bạn có thể đặt dịch vụ của chúng tôi');
        
        } else {
            alert('Mật khẩu không đúng! Vui lòng nhập lại mật khẩu.');
        }
    } else {
        alert('Tên đăng nhập không đúng! vui lòng nhập lại tên đăng nhập.');
    }
    if (foundUser) {
        window.location.href = "";}
});
