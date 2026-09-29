// عرفنا متغيرات ومسكنا اماكن اللي المستخدم بيدخل بيانته فيها علشان نخدها ونخذنها بعد كدا 
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");

let loginForm = document.getElementById("login_button");

loginForm.addEventListener("click", function (e) {
    e.preventDefault();
    if (usernameInput.value === "" || passwordInput.value === "") {
        alert("Please fill in all fields.");
    } else {
        let storedUsername = localStorage.getItem("user");
        let storedPassword = localStorage.getItem("password");

        if (
            usernameInput.value.trim() === storedUsername &&
            passwordInput.value === storedPassword
        ) {
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password.");
        }
    }
});
/*
هنا اتاكدنا ان المستخدم دخل اسم المستخدم وكلمه السر وخدناهم منه وقارناهم بالي في اللوكل ستورج وبعد كدا سمحناله بالدخول للصفحه الرئسيه 
*/
