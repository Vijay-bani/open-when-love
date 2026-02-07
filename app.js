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
        title: "💔 Open when you miss me, Vinita",
        message: `Hey my beautiful Vinita 💕
        
I know the distance hurts sometimes,
but every single day you fill my thoughts.
You're my first thought in the morning,
my last at night, and everything in between.

I'm always with you, my love 💌`
    },
    {
        title: "😠 Open when you're angry at me",
        message: `Even when you're mad at me, Vinita,
even when you don't want to talk,
even when I mess up...

I STILL CHOOSE YOU.
Every single time. Every single day 🥺

Forgive me, I'm learning to love you better.`
    },
    {
        title: "😢 Open when you feel lonely",
        message: `You're never alone, my sweet Vinita 🤍

You have:
✨ My heart completely
✨ My patience endlessly  
✨ My belief in you infinitely

I'm right there in every heartbeat 💖`
    },
    {
        title: "🌙 Open when you can't sleep",
        message: `Close your eyes, Vinita 🌟

Breathe slowly...
Feel my hand holding yours tightly.
Hear my voice whispering you're safe.

Sleep well, my love. 
I'm watching over your dreams tonight 💤💕`
    },
    {
        title: "❓ Open when you doubt us",
        message: `Love isn't perfect moments, Vinita.
It's choosing each other through messy ones.

And through every storm, every doubt,
every challenge life throws...

I choose you. Always. Forever 💫

We're unbreakable together 💪💖`
    },
    {
        title: "💪 Open when you need motivation",
        message: `Listen up, Vinita - YOU ARE INCREDIBLE! ✨

You're stronger than your fears,
braver than you realize,
more talented than you know.

I'm SO proud of you, every single day.
Keep shining, superstar! 🌟

You've got this (and I've got you) 💕`
    },
    {
        title: "🎂 Open on your birthday, Vinita!",
        message: `HAPPY BIRTHDAY TO MY FAVORITE HUMAN! 🎉🎂

Today is YOUR day, beautiful!
Make it magical, eat cake,
dance like nobody's watching!

I wish I could celebrate with you...
but know I'm sending you infinite love! 🥳💝`
    },
    {
        title: "💖 Open just because I love you",
        message: `No reason needed, Vinita 💕

Just wanted to remind my favorite person:
You're my sunshine, my safe place,
my reason to smile every day.

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
