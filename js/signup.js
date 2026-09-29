// عرفنا متغيرات ومسكنا اماكن اللي المستخدم بيدخل بيانته فيها علشان نخدها ونخذنها بعد كدا 
let usernameInput = document.getElementById("username");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirm-password");
let signupForm = document.getElementById("sign_up");

signupForm.addEventListener("click", function (e) {
    e.preventDefault();
    if (usernameInput.value === "" || emailInput.value === "" || passwordInput.value === "" || confirmPasswordInput.value === "") {
        alert("Please fill in all fields.");
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match.");
    } else {
        localStorage.setItem("user", usernameInput.value);
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("password", passwordInput.value);

        setTimeout(function () {
            window.location.href = "login.html";
        }, 1000);

    }
});

/*
هنا عملتله كود ياكد انه مفيش مكان فاضي اثناء تسجيل بياناته وكمان يشوف كلمه السر مطابقه ولا لا وبعدها لو كله تمام يحفظهم ويحوله ع صفحة تسجيل الدخول 
*/