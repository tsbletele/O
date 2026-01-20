emailjs.init("dq0QDSVCFnn006-30");
const ANNIVERSARY = "2025-09-06";

/* REMOVE PRELOAD */
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

function unlock() {
  const input = document.getElementById("dateInput").value;
  if (input === ANNIVERSARY) {
    switchSection("month1");
  } else {
    document.getElementById("lockError").innerText = "That’s not our date ❤️";
  }
}

function goTo(id) {
  switchSection(id);
}

function switchSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

function sayYes() {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("final").style.opacity = "0.3";
}


function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("final").style.opacity = "1";
}

function runAway() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 70 + "%";
  btn.style.top = Math.random() * 70 + "%";
}

function sendInvitationEmail() {
    const fileInput = "C:\Users\tsble\source\repos\tsbletele\O\assets\Invitation.png";

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        to_email: "grizzlert@gmail.com",
        subject: "SURPRISE!!❤",
        message: "",
        attachment: fileInput
    }).then(() => {
        console.log("Email sent successfully!");
    }).catch(err => {
        console.error("Email failed:", err);
    });
}


/* SCROLL ANIMATION + VIDEO FIX */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reason").forEach(r => {
        const rect = r.getBoundingClientRect();
        const visible = rect.top < window.innerHeight - 120 && rect.bottom > 120;

        if (visible) {
            r.classList.add("show");

            const video = r.querySelector("video");
            if (video && video.paused) {
                video.play().catch(() => { });
            }
        } else {
            r.classList.remove("show");

            const video = r.querySelector("video");
            if (video) {
                video.pause();
            }
        }
    });
});
