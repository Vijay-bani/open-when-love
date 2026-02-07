const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const modalTitle = document.getElementById("modalTitle");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");
const closeBtn = document.getElementById("closeModal");
const cardsContainer = document.getElementById("cards");

/* Vinita's special Open When cards 💕 */
const openWhenCards = [
    {
        title: "💔 Open when you miss me",
        message: `Hey my beautiful baby jaanu 💕
        
I know the distance can feel heavy sometimes,
but not for a second are you ever far from me.
You live in my thoughts,
in my heart,
in every little moment of my day.

No matter where we are,
I’m always yours 🤍`
    },
    {
        title: "😠 Open when you're angry at me",
        message: `Even when you’re upset with me, my love,
even when words feel hard,
even when I make mistakes…

I’m not going anywhere.
I choose you — not just when it’s easy,
but especially when it’s not 🥺

Be patient with me,
I’m learning, growing,
and loving you better every day.`
    },
    {
        title: "😢 Open when you feel lonely",
        message: `You're never alone, my sweetheart 🤍

You have:
✨ My heart completely
✨ My patience endlessly  
✨ My belief in you infinitely

You carry my heart with you, always 💖`
    },
    {
        title: "🌙 Open when you can't sleep",
        message: `Close your eyes, my sleepyhead 🌟

Slow your breathing…
feel the calm.
Imagine my arms around you,
My fingers gently holding yours.

You’re safe.
You’re loved.
Let your mind rest now.

Sleep peacefully, my love 💤💞`
    },
    {
        title: "❓ Open when you doubt us",
        message: `Baby, love isn’t about perfection.
It’s about choosing each other
even when things feel uncertain.

Through doubts, distance, and challenges,
my choice never changes.

It’s you.
It has always been you.
And it always will be 💫🤍`
    },
    {
        title: "💪 Open when you need motivation",
        message: `Listen up, my baby girl - YOU ARE INCREDIBLE! ✨

You're stronger than your fears,
braver than you realize,
more talented than you know.

I'm SO proud of you, every single day.
Keep shining, superstar! 🌟

You've got this (and I've got you) 💕`
    },
    {
        title: "🎂 Open on your birthday!",
        message: `HAPPY BIRTHDAY TO MY FAVORITE HUMAN! 🎉🎂

Today is YOUR day, beautiful!
Make it magical, eat cake,
dance like nobody's watching!

I'm sending you infinite love! 🥳💝`
    },
    {
        title: "💖 Open just because I love you",
        message: `No reason needed, my pineapple 💕

Just wanted to remind my favorite person:
You're my sunshine, my safe place,
my reason to smile every day.
And my reason to live.

Thank you for being YOU.
I love you more than words... 💖✨`
    }
];

/* Render beautiful cards */
openWhenCards.forEach((card, index) => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = card.title;
    div.style.animationDelay = `${index * 0.1}s`;
    
    div.addEventListener("click", () => {
        modalTitle.textContent = card.title;
        modalText.textContent = card.message;
        modal.classList.add("show");
        createHearts(event);
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
        music.play().catch(() => {
            // Ignore autoplay errors
        });
        musicBtn.textContent = "⏸";
    }
    playing = !playing;
});

/* Floating romantic stickers */
const stickerContainer = document.querySelector(".stickers");
const romanticStickers = ["💕","🌸","💖","🌹","💝","✨","🌷","💗","🎀","🌺","💞","🦋"];
for (let i = 0; i < 15; i++) {
    const span = document.createElement("span");
    span.textContent = romanticStickers[Math.floor(Math.random() * romanticStickers.length)];
    const size = Math.random() * 25 + 20;
    const duration = Math.random() * 15 + 15;
    const delay = Math.random() * 10;
    const left = Math.random() * 100;
    const drift = (Math.random() * 80 - 40);
    
    span.style.fontSize = `${size}px`;
    span.style.left = `${left}%`;
    span.style.animationDuration = `${duration}s`;
    span.style.animationDelay = `${delay}s`;
    span.style.setProperty("--drift", `${drift}px`);
    stickerContainer.appendChild(span);
}

/* Heart explosion effect */
function createHearts(e) {
    const heartsContainer = document.createElement("div");
    heartsContainer.className = "hearts";
    document.body.appendChild(heartsContainer);
    
    const heartTypes = ["💕","💖","💗","💓","💞","💘","💝"];
    const rect = e.currentTarget.getBoundingClientRect();
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.className = "heart";
            heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
            heart.style.left = rect.left + rect.width/2 + (Math.random() - 0.5) * 100 + "px";
            heart.style.top = rect.top + rect.height/2 + "px";
            heartsContainer.appendChild(heart);
            
            setTimeout(() => heart.remove(), 1500);
        }, i * 100);
    }
    
    setTimeout(() => heartsContainer.remove(), 2000);
}

// Add entrance animation to cards
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
});


