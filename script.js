// ===============================
// CHUYỂN TRANG
// ===============================

function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    const selected = document.getElementById(sectionId);

    if (selected) {
        selected.classList.remove("hidden");
    }

    // Đổi tiêu đề
    const titles = {
        dashboard: "Tổng quan học tập",
        courses: "Môn học",
        tasks: "Bài tập",
        schedule: "Lịch học",
        statistics: "Thống kê"
    };

    document.getElementById("pageTitle").textContent =
        titles[sectionId] || "Dashboard";

    // Active menu
    document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
    });

    event.currentTarget.classList.add("active");
}


// ===============================
// THÊM LỊCH HỌC
// ===============================

function addSchedule() {

    const subject = prompt("Nhập tên môn học:");

    if (!subject) {
        return;
    }

    const time = prompt("Nhập thời gian:");

    if (!time) {
        return;
    }

    const schedule = document.querySelector(".schedule");

    const newSchedule = document.createElement("div");

    newSchedule.className = "schedule-item";

    newSchedule.innerHTML = `
        <div class="time">
            <strong>${time}</strong>
            <span>--</span>
        </div>

        <div class="schedule-line blue-line"></div>

        <div class="schedule-content">
            <h4>${subject}</h4>
            <span>📚 Lịch học mới</span>
        </div>

        <span class="status upcoming">Mới</span>
    `;

    schedule.appendChild(newSchedule);

    alert("Đã thêm lịch học!");
}


// ===============================
// LỊCH TUẦN
// ===============================

function changeWeek(direction) {

    if (direction > 0) {
        alert("Đã chuyển sang tuần tiếp theo.");
    } else {
        alert("Đã quay lại tuần trước.");
    }
}


// ===============================
// THÔNG BÁO
// ===============================

document.querySelector(".notification").addEventListener("click", function () {

    alert(
        "🔔 Thông báo\n\n" +
        "• Bài tập Python còn 2 ngày\n" +
        "• Database có deadline trong 4 ngày\n" +
        "• Bạn đang đạt 78% tiến độ học tập!"
    );

});


// ===============================
// HIỆU ỨNG KHI LOAD
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(
        ".stat-card, .card, .course-card, .task"
    );

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(10px)";

        setTimeout(() => {

            card.style.transition = "all 0.4s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 60);

    });

});
