let allphons = document.getElementById("phons"); // مكان العرض 
let phons = localStorage.getItem("pphon") //جبنا العناصر من اللوكل 


// داله الرسم 
function displayPhones(item) {
    let html = item.map((phone) => {
        return `
            <li price="${phone.price}">
                <div class="front f11"><img src="${phone.imgurl}" alt="${phone.name}"></div>
                <div class="back">
                    <h2>${phone.name}</h2>
                      <p> السعر ${phone.price.toLocaleString()} ج.م</p>
                    <p> المميزات: شاشة ، معالج , كاميرا , تقريب بصري </p>
                </div>
                
                <button onclick="remove(${item.indexOf(phone)})"><i class="fa-solid fa-x"></i></button>
            </li>
        `;
    }).join("");
    // .join(""); هنا بقوله متخليش فيه بين كل عنصر والتاني مسافات
    allphons.innerHTML = html;
}
if (allphons) {
    // حولنا العناصر لاوبجكت تاني بعد ماكانت استرنج
    let item = JSON.parse(phons)
    displayPhones(item); // نفز داله الرسم

}
// -------------------------------------------------------------------------------------------------------------------------
// هيا بنا نحذف عنصر من السله
function remove(index) {
    // . جلب الـ[] من اللوكل استورج في متغير
    let phones = JSON.parse(localStorage.getItem("pphon"));
    // عمل فيلتر ليرجع بالاريي الاجديده بدون العنصر المحذوف وتخذينها في متغير جديد
    //  وكدا انا معايا العناصر اللي هرسمها واخذنها تاني في اللوكل استورج علشان ده الحل الوحديل للحذف
    let newphones = phones.filter(function (phone) {
        // return : بنعمله في الفلتر بطريقه تخليه يرجع ترو وفولس للعنصر اللي مش عايزة 
        // وهنا مش معناه هيرجع بالداله بترو وفولس ده كدا بيروح للفلتر وبعد كدا الفلتر بيرجع بالاريي كامل 
        return phones.indexOf(phone) !== index;
    });
    // خذن المعلومات الجديده في اللوكل استورج بعد ما حذفنا منها اللي عوزينه
    localStorage.setItem("pphon", JSON.stringify(newphones));
    // ارسم العناصر الجديده 
    displayPhones(newphones);
}
// وسبحان الله كل ده بيحصل في الحال دون ان يظهر انه حدث كل ده هو اللي بيظهر انه بيتحذف عنصر من الصفحه وشكرا 

