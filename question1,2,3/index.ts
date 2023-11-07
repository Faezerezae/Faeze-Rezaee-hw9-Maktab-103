//question 1
//تابعی بنویسید که یک تابع را برمی گرداند. تابع برگشتی
//باید ویژگی را به یک شی خاص اضافه کند.
//سعی کنید شی کاربر را از تابع برگشتی برگردانید.
//از این کلمه کلیدی برای تنظیم ویژگی در تابع برگشتی استفاده کنید

type T = {
  name?: string;
};

const setterGenerator = function <T>(property: keyof T) {
  return function (this: T, value: T[keyof T]): T {
    this[property] = value;
    return this;
  };
};

const user: T = {};
const nameSetter = setterGenerator<typeof user>("name");

nameSetter.call(user, "Jack");

console.log(user); // { name: 'Jack' }
//question 2
//تابعی بنویسید که یک نوع عنصر و یک تابع فراخوانی را می گیرد.
//تابع باید عنصر مربوطه را ایجاد کند، آن را به dom اضافه کند (در هر کجا) سپس مرجع را به callback ارسال کند
function elemCreator(elementType: string, callback: any) {
  const element = document.createElement(elementType);
  document.body.appendChild(element);
  callback(element);
}

const callback = function (elem: any) {
  elem.style.backgroundColor = "red";
  elem.innerHTML = "Faeze";
};

elemCreator("div", callback);

//question 3
//تابعی بنویسید که از محدوده بسته برای شمارش یک متغیر استفاده کند.
//شما نباید هیچ متغیری را به جز شمارنده در محدوده جهانی اعلام کنید

function counterMaker() {
  let count = 0;

  return function (step = 0) {
    count += step;
    return count;
  };
}

const counter = counterMaker();

console.log(counter()); // 0
console.log(counter()); // 0
console.log(counter(1)); // 1
console.log(counter()); // 1
console.log(counter(3)); // 4
console.log(counter(7)); // 11
console.log(counter(-5)); // 6
