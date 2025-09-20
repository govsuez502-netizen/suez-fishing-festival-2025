// التاريخ الجديد: 13 أكتوبر 2025 (نستخدم منتصف الليل لضمان اليوم الصحيح)
const TARGET_DATE = new Date('2025-10-13T00:00:00');

// عرض التاريخ من غير ساعة
const eventDateEl = document.getElementById('event-date');
if (eventDateEl) {
  eventDateEl.textContent = TARGET_DATE.toLocaleDateString('ar-EG', { dateStyle: 'full' });
}

function updateCountdown() {
  const now = new Date();
  const diff = Math.max(0, TARGET_DATE - now);
  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  // تحديث القيم بالـ DOM
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

  // لو انتهى الوقت
  if (diff <= 0) {
    // نوقف المؤقّت ونغير النص
    clearInterval(timerInterval);
    const title = document.querySelector('.countdown-title');
    if (title) title.textContent = "انطلق المهرجان 🎉";
    const timeDisplay = document.getElementById('time-display');
    if (timeDisplay) timeDisplay.style.display = 'none';
  }
}

// بداية وتشغيل
updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);
