const ANNIVERSARY = "2025-09-06";

/* REMOVE PRELOAD */
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

function unlock() {
  const input = document.getElementById("dateInput").value;
  if (input === ANNIVERSARY) {
      switchSection("month1");
      playMusic();
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
  sendInvitationEmail();
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
    emailjs.init("dq0QDSVCFnn006-30");
    const img = new Image();
    img.src = "assets/Invitation.png";

    img.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const base64 = canvas.toDataURL("image/png"); // convert to base64

        emailjs.send("service_m1iqsew", "template_a2rv0vc", {
            to_email: "grizzlert@gmail.com",
            subject: "SURPRISE!!❤",
            message: "",
            attachment: base64
        }).then(() => {
            console.log("Email sent successfully!");
        }).catch(err => {
            console.error("Email failed:", err);
        });
    };
}

function playMusic() {
    const music = document.getElementById("bgMusic");
    music.muted = false;
    music.play().catch(err => console.log("Autoplay prevented", err));
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
