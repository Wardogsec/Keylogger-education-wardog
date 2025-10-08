# 🧠 Keylogger Simulation (Educational)

> ⚠️ This repository contains a **harmless keylogger simulation** intended for **security education, browser behavior analysis, and defense training**.  
> ❌ It must **not** be used on systems, websites, or users without **explicit permission**.

---

## 📝 Overview

This project demonstrates how malicious JavaScript can be embedded in a webpage to **capture keystrokes in real time**.  
It is intended **strictly for educational and defensive purposes**, helping:

- 🧑‍💻 **Developers** recognize risky client-side code patterns.  
- 🧠 **Security teams** understand attacker behavior.  
- 🛡️ **Blue teams** test browser protections, Content Security Policy (CSP), and event monitoring.

👉 The script logs keystrokes to the **browser console** and saves them to `localStorage`.  
A sample `fetch` request shows how attackers might exfiltrate data, but this is configured to use `http://127.0.0.1:5501/receive` for **local testing only**.

---

## ⚡ Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/Wardogsec/Keylogger-education-wardog.git
   cd Keylogger-education-wardog
   ```

2. **Open the HTML file in your browser**
   ```bash
   firefox educational_keylogger_demo.html
   ```
   or
   ```bash
   google-chrome educational_keylogger_demo.html
   ```

3. **Open Developer Tools** (F12) to view real-time keystroke logs in the browser console.

---

## 📁 File Structure

```bash
Keylogger-education-wardog/
├── educational_keylogger_demo.html   # Standalone HTML keylogger demo (educational)
└── README.md                         # Documentation and legal notes
```

💡 **File Format Note:**  
This demo is saved as a single `.html` file (not `.js`) to mimic how a malicious script might be injected directly into a webpage. This makes it easy to run locally for demonstration purposes.

---

## 🛡️ Defensive Takeaways

- **Content Security Policy (CSP)** — Strong CSP headers can block unauthorized scripts.  
- **Input Validation** — Validate and sanitize both client-side and server-side inputs.  
- **Script Monitoring** — Watch for unexpected JavaScript events on critical pages like logins.  
- **Browser Tools** — Use DevTools and security extensions to inspect loaded scripts.

---

## ⚖️ Legal Disclaimer

This project is for **authorized security training and research only**.  
Using or deploying keyloggers without proper consent is **illegal** in many jurisdictions.  
The authors and contributors assume **no liability for misuse**.

---

## 📚 Resources

- [OWASP Keylogger Article](https://owasp.org)  
- [Content Security Policy (CSP) Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)  
- [Chrome DevTools Guide](https://developer.chrome.com/docs/devtools/)  

---

🧠 **Made for educational awareness** 🛡️
