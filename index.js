const TelegramBot = require("node-telegram-bot-api");

// 🔐 MASUKKAN TOKEN BOT TELEGRAMMU DI SINI
const TOKEN = "8402442497:AAGeS9IQdAEoJoWx_GFt9YGD2W_YEngBJ7M"; 

// 🧑‍💻 GANTI DENGAN CHAT ID ADMINMU
const ADMIN_CHAT_ID = "6519343084"; 

// 🔧 Inisialisasi bot
const bot = new TelegramBot(TOKEN, { polling: true });

/* ===========================
   COMMAND: /normaldm
   =========================== */
bot.onText(/\/dmmole/, (ctx) => {
  const list = [
    { name: "5 DM", price: 1410 },
    { name: "5+5 DM", price: 1410 },
    { name: "11+1 DM", price: 3290 },
    { name: "11+11 DM", price: 3290 },
    { name: "17+2 DM", price: 5170 },
    { name: "17+17 DM", price: 5170 },
    { name: "25+3 DM", price: 7520 },
    { name: "25+25 DM", price: 7520 },
    { name: "40+4 DM", price: 11280 },
    { name: "53+6 DM", price: 15040 },
    { name: "77+8 DM", price: 21620 },
    { name: "154+16 DM", price: 43240 },
    { name: "217+23 DM", price: 61100 },
    { name: "256+40 DM", price: 75200 },
    { name: "367+41 DM", price: 103400 },
    { name: "503+65 DM", price: 141000 },
    { name: "774+101 DM", price: 216200 },
    { name: "1708+302 DM", price: 470000 },
    { name: "4003+827 DM", price: 1128000 },
  ];

  let msg = "💎 *Daftar Harga Diamond ML (Normal)* 💎\n\n";
  list.forEach((item, i) => {
    msg += `${i + 1}. ${item.name} — Rp${item.price.toLocaleString()}\n`;
  });
  bot.sendMessage(ctx.chat.id, msg, { parse_mode: "Markdown" });
});

/* ===========================
   COMMAND: /dobeldm
   =========================== */
bot.onText(/\/dobeldm/, (ctx) => {
  bot.sendMessage(
    ctx.chat.id,
    "💎 *Daftar Harga Double DM Mobile Legends* 💎\n\nSama seperti daftar normal, namun pengiriman dua kali lipat DM.",
    { parse_mode: "Markdown" }
  );
});

/* ===========================
   COMMAND: /starlight
   =========================== */
bot.onText(/\/starlight/, (ctx) => {
  bot.sendMessage(
    ctx.chat.id,
    "🌟 *ST★RLIGHT MEMBERSHIP* 🌟\n\n• Basic — Rp149.000\n• Premium — Rp299.000",
    { parse_mode: "Markdown" }
  );
});

/* ===========================
   COMMAND: /wdp
   =========================== */
bot.onText(/\/wdp/, (ctx) => {
  bot.sendMessage(
    ctx.chat.id,
    "⚔️ *Weekly Diamond Pass (WDP)* ⚔️\n\n💰 Harga: Rp29.000",
    { parse_mode: "Markdown" }
  );
});

/* ===========================
   COMMAND: /promo
   =========================== */
bot.onText(/\/promo/, (ctx) => {
  bot.sendMessage(
    ctx.chat.id,
    "🎉 *PROMO SPESIAL BULAN INI!* 🎉\n\n• Cashback 5% untuk pembelian di atas Rp100.000\n• Bonus Starlight Basic untuk pembelian 4003+827 DM\n\nSegera order sebelum promo berakhir! 🚀",
    { parse_mode: "Markdown" }
  );
});

/* ===========================
   COMMAND: /epep (Free Fire)
   =========================== */
bot.onText(/\/epep/, (ctx) => {
  const diamondList = [
    { name: "5 DM", price: 1000 },
    { name: "12 DM", price: 2000 },
    { name: "50+5 DM", price: 8000 },
    { name: "70+8 DM", price: 10000 },
    { name: "140+14 DM", price: 20000 },
    { name: "355+36 DM", price: 50000 },
    { name: "720+72 DM", price: 100000 },
    { name: "1450+146 DM", price: 200000 },
    { name: "2180+218 DM", price: 300000 },
    { name: "3640+364 DM", price: 500000 },
    { name: "7290+730 DM", price: 1000000 },
    { name: "36500+3650 DM", price: 5000000 },
    { name: "73100+7310 DM", price: 10000000 },
  ];

  const membershipList = [
    { name: "Membership Mingguan", price: 24000 },
    { name: "Membership Bulanan", price: 72000 },
    { name: "BP Card", price: 38000 },
  ];

  let message = "🔥 *Daftar Harga Diamond Free Fire (EPEP)* 🔥\n\n";
  message += "💎 *Diamond List:*\n";
  diamondList.forEach((item, i) => {
    message += `${i + 1}. ${item.name} — Rp${item.price.toLocaleString()}\n`;
  });

  message += "\n🎟️ *Membership & BP Card (Beda Supplier):*\n";
  membershipList.forEach((item) => {
    message += `${item.name} — Rp${item.price.toLocaleString()} 🟡\n`;
  });

  bot.sendMessage(ctx.chat.id, message, { parse_mode: "Markdown" });
});

/* ===========================
   COMMAND: /pay
   =========================== */
bot.onText(/\/pay/, (ctx) => {
  const qrisImageUrl = "https://i.ibb.co/qmWn7tH/qris-example.jpg"; // ganti dgn QRIS kamu
  bot.sendPhoto(ctx.chat.id, qrisImageUrl, {
    caption: "📸 *Scan QRIS untuk melakukan pembayaran.*\n\nSetelah bayar, kirim bukti dengan caption *.pay*",
    parse_mode: "Markdown",
  });
});

/* ===========================
   COMMAND: /format
   =========================== */
bot.onText(/\/format/, (ctx) => {
  const text = `
🧾 *Format Pemesanan Diamond:*

🆔 ID Game:  
📦 Pesanan:  
📱 Nomor WhatsApp:  
✉️ Email:  

Kirim format ini ke chat, lalu bukti pembayaran (.pay) ke bot ini ya!
`;
  bot.sendMessage(ctx.chat.id, text, { parse_mode: "Markdown" });
});

/* ===========================
   FITUR: Bukti Pembayaran (.pay)
   =========================== */
bot.on("photo", async (msg) => {
  const chatId = msg.chat.id;
  const caption = msg.caption ? msg.caption.toLowerCase().trim() : "";

  if (caption === ".pay") {
    const fileId = msg.photo[msg.photo.length - 1].file_id;
    const user =
      msg.from.username
        ? `@${msg.from.username}`
        : `${msg.from.first_name} ${msg.from.last_name || ""}`;

    await bot.sendPhoto(ADMIN_CHAT_ID, fileId, {
      caption: `📥 *Bukti Pembayaran Masuk*\n\n👤 Dari: ${user}\n🆔 Chat ID: ${chatId}`,
      parse_mode: "Markdown",
    });

    bot.sendMessage(
      chatId,
      "✅ Bukti pembayaran kamu sudah dikirim ke admin!\nMohon tunggu konfirmasi pesanan ya 🙏"
    );
  } else {
    bot.sendMessage(
      chatId,
      "⚠️ Untuk mengirim bukti pembayaran, kirim *foto* dengan caption *.pay*."
    );
  }
});

/* ===========================
   Jalankan bot
   =========================== */
console.log("🤖 Bot jualan diamond aktif!");
