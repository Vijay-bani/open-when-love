const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");
const closeBtn = document.getElementById("closeModal");
const cardsContainer = document.getElementById("cards");

/* Card data */
const openWhenCards = [
  {
    title: "Open when you miss me",
    message: `I know the distance hurts sometimes.
But please remember this —
not a single day goes by where
you are not in my thoughts.
I’m always with you 💌`
  },
  {
    title: "Open when you’re angry at me",
    message: `Even if you’re mad.
Even if you don’t want to talk.
Even if you feel unheard —
I still choose you.
Every single time 🥺`
  },
  {
    title: "Open when you feel lonely",
    message: `You’re never alone.
You have my heart,
my patience,
and my belief in you 🤍`
  },
  {
    title: "Open when you can’t sleep",
    message: `Close your eyes.
Slow your breathing.
Imagine my hand holding yours.
I’m right there 🌙`
  },
  {
    title: "Open when you doubt us",
    message: `Love isn’t about perfect days.
It’s about choosing each other
even on the messy ones.
And I choose you. Always 💫`
  },
  {
    title: "Open when you need motivation",
    message: `You are stronger than you think,
braver than you feel,
and capable of amazing things.
I’m so proud of you 💪✨`
  }
];

/* Render cards */
openWhenCards.forEach(card => {
  const div = document.createElement("div");
  div.className = "card";
  div.textContent = card.title;

  div.addEventListener("click", () => {
    modalText.textContent = card.message;
    modal.classList.add("show");
  });

  cardsContainer.appendChild(div);
});

/* Close modal */
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

/* Music toggle */
let playing = false;
musicBtn.addEventListener("click", () => {
  if (playing) {
    music.pause();
    musicBtn.textContent = "🎵";
  } else {
    music.play();
    musicBtn.textContent = "⏸";
  }
  playing = !playing;
});

/* Floating stickers (non-overlapping illusion) */
const stickerContainer = document.querySelector(".stickers");
const stickerIcons = ["🍫","🌸","💐","🍓","💝","🌷","🍬"];

for (let i = 0; i < 12; i++) {
  const span = document.createElement("span");
  span.textContent = stickerIcons[Math.floor(Math.random() * stickerIcons.length)];

  const size = Math.random() * 20 + 20;
  const duration = Math.random() * 10 + 12;
  const delay = Math.random() * 10;
  const left = Math.random() * 100;
  const drift = Math.random() * 60 - 30;

  span.style.fontSize = `${size}px`;
  span.style.left = `${left}%`;
  span.style.animationDuration = `${duration}s`;
  span.style.animationDelay = `${delay}s`;
  span.style.setProperty("--drift", `${drift}px`);

  stickerContainer.appendChild(span);
}
