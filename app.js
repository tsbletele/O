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
    fetch("https://script.google.com/macros/s/AKfycbz6jiljDmNZLleg0jiB_ohtDdCwFDzNnH7UJBEX4s4-M8RtVZlYFASV_p3aiDMmPPrt1Q/exec", {
        method: "POST",
        body: JSON.stringify({
            to_email: "grizzlert@gmail.com",
            subject: "SURPRISE!!❤",
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error("Email sending failed:", err));
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
