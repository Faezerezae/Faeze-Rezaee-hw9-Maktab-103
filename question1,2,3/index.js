"use strict";
//question 1
//تابعی بنویسید که یک تابع را برمی گرداند. تابع برگشتی
//باید ویژگی را به یک شی خاص اضافه کند.
//سعی کنید شی کاربر را از تابع برگشتی برگردانید.
//از این کلمه کلیدی برای تنظیم ویژگی در تابع برگشتی استفاده کنید
function setterGenerator(property) {
    return function (value) {
        user[property] = value;
    };
}
const user = {};
const nameSetter = setterGenerator("name");
nameSetter("Jack");
console.log(user); // { name: 'Jack' }


//question 2
//تابعی بنویسید که یک نوع عنصر و یک تابع فراخوانی را می گیرد.
//تابع باید عنصر مربوطه را ایجاد کند، آن را به dom اضافه کند (در هر کجا) سپس مرجع را به callback ارسال کند
function elemCreator(elementType, callback) {
    const element = document.createElement(elementType);
    document.body.appendChild(element);
    callback(element);
}
const callback = function (elem) {
    elem.style.backgroundColor = 'red';
    elem.innerHTML = "Faeze";
};
elemCreator('div', callback);