// تحديد عنصر الشاشة
const display = document.getElementById('display');

// 1. وظيفة إضافة الأرقام والعمليات للشاشة
function addToDisplay(input) {
    // منع تكرار العمليات الحسابية المتتالية (مثلاً ++ أو */)
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];
    
    if (operators.includes(input) && operators.includes(lastChar)) {
        // إذا كان آخر حرف عملية والمدخل الجديد عملية، استبدل القديمة بالجديدة
        display.value = display.value.slice(0, -1) + input;
    } else {
        display.value += input;
    }
}

// 2. وظيفة مسح الشاشة بالكامل (AC)
function clearDisplay() {
    display.value = "";
}

// 3. وظيفة مسح آخر رقم فقط (Backspace)
function backspace() {
    display.value = display.value.slice(0, -1);
}

// 4. وظيفة الحساب النهائي (=)
function calculate() {
    try {
        // eval تقوم بتحويل النص المكتوب إلى عملية حسابية حقيقية
        // مثال: "5+5" تصبح 10
        if (display.value !== "") {
            display.value = eval(display.value);
        }
    } catch (error) {
        // في حال إدخال عملية غير منطقية مثل "5++"
        display.value = "Error";
        setTimeout(clearDisplay, 1500); // مسح الخطأ بعد ثانية ونصف
    }
}