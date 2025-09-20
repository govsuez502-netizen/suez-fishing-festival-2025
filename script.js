// تحديد تاريخ المهرجان
const eventDate = new Date("Oct 13, 2025 00:00:00").getTime();
document.getElementById("event-date").textContent = "الاثنين، ١٣ أكتوبر ٢٠٢٥";

// تحديث العد التنازلي
setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
  }
}, 1000);
