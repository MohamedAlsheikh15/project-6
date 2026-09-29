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
اول حاجه في شغل الجافاسكربت في الموقع هي عمل تسجيل دخول وتسجيل ع الموقع بالخطوات اللي هنعملها ف صفحات الجافاسكربت التلاته 
1-script: بنعمل فيها الاكواد السابقه وهي فكره ان المستخدم لما يسجل دخول يتلغي عنده كلمة سجل دخول ويوضع مرحب + اسمه
*/
//======================================================lec-2======================================
let allphons = document.getElementById("phons");
let phons = [
    {
        id: 1,
        imgurl: "images/iPhone 15 Pro Max.png",
        name: "iPhone 15 Pro Max",
        price: 70000
    },
    {
        id: 2,
        imgurl: "images/Samsung Galaxy S24 Ultra.png",
        name: "Samsung Galaxy S24 Ultra",
        price: 60000
    },
    {
        id: 3,
        imgurl: "images/Honor Magic6 Pro.png",
        name: "Honor Magic6 Pro",
        price: 50000
    },
    {
        id: 4,
        imgurl: "images/Realme GT 5.png",
        name: "Realme GT 5",
        price: 40000
    },
    {
        id: 5,
        imgurl: "images/Honor 90.png",
        name: "Honor 90",
        price: 35000
    },
    {
        id: 6,
        imgurl: "images/samsung Galaxy A55 5G.png",
        name: "Samsung Galaxy A55 5G",
        price: 30000
    },
    {
        id: 7,
        imgurl: "images/Infinix Note 40 Pro.png",
        name: "Infinix Note 40 Pro",
        price: 25000
    },
    {
        id: 8,
        imgurl: "images/Realme 12+ 5G.png",
        name: "Realme 12+ 5G",
        price: 20000
    },
    {
        id: 9,
        imgurl: "images/Honor X9b.png",
        name: "Honor X9b",
        price: 15000
    },
    {
        id: 10,
        imgurl: "images/Samsung Galaxy A25 5G.png",
        name: "Samsung Galaxy A25 5G",
        price: 12000
    }
]
/*
1-طريقه وضع منتجات في اريي وعرضهم عند فتح الصفحه بدل من كتابة كل عنصر لوحده نعمل اريي وداخله اوبكتس وكل عنصر داخل الاريي عباره عن اوبجكت يحتوي ع 
المنتج رقمه 1
صورته iphone.png
اسمه iPhone 15 Pro Max
سعره 70000
*/
//------------------------------------------------------------------------------------------------------------
function displayPhones() {
    let html = phons.map(function (phone) {
        return `
            <li price="${phone.price}">
                <div class="front f11"><img src="${phone.imgurl}" alt="${phone.name}"></div>
                <div class="back">
                    <h2>${phone.name}</h2>
                      <p> السعر ${phone.price.toLocaleString()} ج.م</p>
                    <p> المميزات: شاشة ، معالج , كاميرا , تقريب بصري </p>
                </div>
                <button onclick="check(${phone.id})"><i class="fa-solid fa-cart-shopping"></i></button>
            </li>
        `;
    }).join("");
    // .join(""); هنا بقوله متخليش فيه بين كل عنصر والتاني مسافات
    allphons.innerHTML = html;
}
displayPhones();
/*
2- عملنا فنكشن تعرض المنتجات دي تاخد المنتجات الموجودة في الـاريي وتعمل منها كود اتشتمل وتعرضها في الصفحة.
*/
// ---------------------------------------------------------------------------------------------------------------
// الجزء التالي جزء مهم مسئول عن لما احدس الصفحه ارجع المنتجات في السله مره اخري لانهم هيختفو 
// ====================================================================================================================================
let num = 0;
let circle = document.getElementById("circle")
let dwncar = document.getElementById("dwn-car")
// ده سطر مهم جدا وترجمته بقوله عرفلي متغير كذا وحطلي فيه اللوكل ستورج دي سوال ؟ لو موجوده اعملهالي اوبجكت ولو مش موجوده اعملهالي فاضيه
let addphons = localStorage.getItem("pphon") ? JSON.parse(localStorage.getItem("pphon")) : [];

// ودي ايضا داله مهمه جدا وهي بتحفظ المنتجات لما اعمل تحديث للصفحه 
if (addphons) {
    // هاتلي عناصر اللوكل استورج لو موجوده واعملي عليها االتالي
    let pton = addphons.map(item => {
        // دي داله لعرض التلفون في قائمه تحت عربة التسوق
        dwncar.innerHTML += `<p>${addphons.indexOf(item) + 1}: ${item.name} :السعر${item.price.toLocaleString()}ج.م</p>`
        // addphons.indexOf(item)+1 : دي مهمه جدا بقوله اعملي ترقيم للمنتجات من خلال الانديكس بتاع الداله لما تعرضهم 
    })
    // هنا بقولو اكتبلي عددهم في لمبة العدد تاني لانهم هيختفو لما اعمل تحديث
    circle.innerHTML = addphons.length;
    num = addphons.length; //هنا بقوله ابدا الترقيم اللي جاي بعد كدا من بعد الرقم الاخير اللي كان في الاري بتاعت اللوكل استورج
}
// ====================================================================================================================================

// ------------------------------------------------------------------------
//find هنا عملنا داله وبعتنالها ايدي المنتج وبواسطه داله فين جبنا العنصر كله من ايديهه
function check(id) {

    // لو المستخدم مسجل دخول 
    if (localStorage.getItem("user")) {
        // هاتلي العنصر اللي معايا الاي دي بتاعه
        let x = phons.find(item => item.id === id)
        // دي لعرض التلفون في قائمه تحت عربة التسوق
        dwncar.innerHTML += `<p>${++num}: ${x.name} :السعر${x.price.toLocaleString()}ج.م</p>`
        // ------------------------
        // هنا بعرض الرقم بتاع المنتج
        circle.innerHTML = num;

        // ----------- طريقه اخري لعرض الرقم باتي بيه من عدد العناصر كتالي-----
        // let cartProductsLength = document.querySelectorAll("#dwn-car p")
        // circle.innerHTML = cartProductsLength.length;
        // -----------------------------------------------------------------------------
        // اظهر القائمه لو ضفت عنصر ف العربه
        dwncar.style.display = "block";
        // بعديها ب1.5 ثانيه اخفيها تاني
        setTimeout(() => {
            dwncar.style.display = "none";
        }, 1500);
        // -----------------------------------------------------------------------------
        // هناخد مقل العناصر من صفحه لصفحه باستخدام اللوكل استورج
        addphons = [...addphons, x]
        localStorage.setItem("pphon", JSON.stringify(addphons))
    } else {
        window.location = "login.html";
    }
}
/*
ده ابليكيشن بسيط لتاكد ان المستخدم مسجل دخول علي الموقع قبل ما يضيف منتج الي العربيه ولو مش مسجل دخول هحوله علي صفحه تسجيل الدخول
*/

// -------------------------------------------------------------------------------------------------------------------------
// هناخد طريقة تسجيل الخروج من الموقع وهي عن طرسق حذف بيانات المستخدم وتحويله لصفحه تسجيل الدخول من جديد
let logoutlink = document.querySelector("#logout-link")
logoutlink.addEventListener("click", function () {
    localStorage.removeItem("pphon");

    setTimeout(() => {
        window.location = "login.html"
    }, 1500);
})
// -------------------------------------------------------------------------------------------------------------------------


