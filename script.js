/* ================= START WEBSITE ================= */

function start() {
  const intro = document.getElementById("intro");

  const main = document.getElementById("main");

  intro.classList.add("hide");

  setTimeout(() => {
    main.classList.remove("hidden");
  }, 700);

  startHearts();
}

/* ================= OPEN LETTER ================= */

function openLetter() {
  const envelope = document.getElementById("envelope");

  const letter = document.getElementById("letter");

  const text = document.getElementById("tapText");

  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {
    setTimeout(() => {
      letter.classList.add("show");

      text.innerHTML = "A letter straight from my heart ❤️";

      letter.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 600);
  }
}

/* ================= OPEN GIFT ================= */

function openGift() {
  const gift = document.getElementById("giftMessage");

  gift.style.display = "block";

  heartExplosion();

  setTimeout(() => {
    gift.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, 200);
}

/* ================= FLOATING HEARTS ================= */

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");

    heart.className = "heart";

    const heartList = ["❤️", "💗", "💕", "💖", "💓", "💘"];

    heart.innerHTML = heartList[Math.floor(Math.random() * heartList.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = 15 + Math.random() * 25 + "px";

    heart.style.animationDuration = 4 + Math.random() * 5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 9000);
  }, 700);
}

/* ================= HEART EXPLOSION ================= */

function heartExplosion() {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");

    heart.className = "heart";

    const list = ["❤️", "💕", "💗", "💖", "💘", "✨"];

    heart.innerHTML = list[Math.floor(Math.random() * list.length)];

    heart.style.left = "50vw";

    heart.style.bottom = "40vh";

    heart.style.fontSize = 15 + Math.random() * 30 + "px";

    heart.style.animationDuration = 2 + Math.random() * 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
