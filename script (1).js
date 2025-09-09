// تحقق مما إذا كان الوضع الداكن مفعلًا من قبل
let isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
    document.body.classList.add('dark-mode'); // إضافة الكلاس للوضع الداكن
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode; // تغيير الحالة
    document.body.classList.toggle('dark-mode', isDarkMode); // تفعيل أو تعطيل الوضع الداكن
    
    // إضافة الكلاس للheader والشريط السفلي
    document.querySelector('header').classList.toggle('dark-mode', isDarkMode);
    document.querySelector('.bottom-bar').classList.toggle('dark-mode', isDarkMode);
    document.querySelector('.chat-window').classList.toggle('dark-mode', isDarkMode);
    
    // تخزين الحالة في localStorage
    localStorage.setItem('darkMode', isDarkMode);
}

function goBack() {
    window.history.back(); // العودة إلى الصفحة السابقة
}

function goToCamera() {
    // هنا يمكن إضافة الكود للانتقال إلى صفحة الكاميرا
}

function goToHome() {
    window.location.href = 'C:/Users/mo/Desktop/ConnectHub/seting.app/index.html'; // الانتقال إلى الصفحة الرئيسية
}

function goToChat() {
    window.location.href = 'file:///C:/Users/mo/Desktop/ConnectHub/mediacod/messages/messages.html'; // الانتقال إلى صفحة الرسائل
}
