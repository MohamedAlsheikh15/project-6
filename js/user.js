let userLink = document.getElementById("user-link");
let loginLink = document.getElementById("login-link");
let signupLink = document.getElementById("signup-link");
// هنا بقوله لو المستخدم موجود يعني لو روحت لللوكل ستورج ولقيت يوزر نفز التالي
if (localStorage.getItem("user")) {
    let user = localStorage.getItem("user");
    //login+signup اظهرلي اسم اايوزر واخفيلي كلمة 
    userLink.textContent = "Welcome: " + user;
    loginLink.style.display = "none";
    signupLink.style.display = "none";
}
/* 
فكره الصفحه لما يكون عندينا اكواد مشتركه بين كل صفحات الاتش تي ام ال.
 بدل ما نكررها في كل ملفات الجافاسكربت نعملها في ملف مشترك ونربطه بكل صفحات الات تي ام ال 
*/
