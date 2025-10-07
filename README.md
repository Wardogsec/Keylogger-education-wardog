# 🧠 Keylogger Simulation (Educational)

> ⚠️ This repository contains a **harmless keylogger simulation** intended for **security education, browser behavior analysis, and defense training**.  
> It must **not** be used on systems, websites, or users without explicit permission.

---

## 📝 Overview

This HTML file demonstrates how malicious JavaScript could be injected into a webpage to **capture keystrokes in real time**.  
The demo is designed to help:
- 🧑‍💻 Developers recognize risky patterns in client-side code.
- 🧠 Security teams understand how attackers might log form inputs.
- 🛡️ Blue teams test browser protections and security headers (e.g., CSP).

The script logs input from designated fields **to the browser console only**, and does not transmit data externally.

---

## ⚡ Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/Wardogsec/Keylogger-education-wardog.git
   cd educational-keylogger-demo
Open the HTML file in a browser:

bash
Copy code
firefox educational_keylogger_demo.html
or

bash
Copy code
google-chrome educational_keylogger_demo.html
Open the browser’s Developer Console (F12) to observe keystroke events in real time.

🧱 File Structure
bash
Copy code
educational-keylogger-demo/
├── educational_keylogger_demo.html   # Standalone HTML demo
└── README.md                         # Documentation and usage notes
🛡️ Defensive Takeaways
Content Security Policy (CSP) can prevent unauthorized script injection.

Validate and sanitize user input to reduce injection opportunities.

Monitor for unusual JavaScript events in critical pages (e.g., login forms).

Use browser extensions or developer tools to inspect unexpected scripts.

⚖️ Legal Disclaimer
This code is for authorized security training and research only.
Deploying or using keyloggers without proper consent is illegal in many jurisdictions. The author(s) and contributors are not responsible for any misuse.

📚 Resources
OWASP Keylogger Article

Content Security Policy (CSP) Guide

Browser DevTools Guide

Made for educational awareness 🧠🛡️
