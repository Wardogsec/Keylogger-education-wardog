/**
 * script.js — Educational instrumentation (safe)
 *
 * Purpose:
 *  - Demonstrates how JS can observe input events for security training.
 *  - INTENTIONALLY avoids storing or transmitting raw passwords or 2FA codes.
 *
 * Usage:
 *  - Include in your demo HTML: <script src="script.js"></script>
 *  - For exfiltration demos in a closed lab only, see commented "LOCAL TEST" section.
 *
 * IMPORTANT: This file is for authorized, educational use ONLY.
 */

(function () {
  // Helpful small utility — mask values for display so raw secrets are not exposed
  function maskValue(v, showStart = 1, showEnd = 1) {
    if (!v) return '';
    if (v.length <= showStart + showEnd) return '*'.repeat(v.length);
    return v.slice(0, showStart) + '*'.repeat(Math.max(1, v.length - showStart - showEnd)) + v.slice(-showEnd);
  }

  function safeLog(tag, info) {
    console.log(`[Demo] ${tag}:`, info);
  }

  // DOM elements (defensive checks)
  const usernameEl = document.getElementById('username');
  const passwordEl = document.getElementById('password');
  const twoFactorEl = document.getElementById('twoFactorCode');
  const formEl = document.getElementById('loginForm');
  const twoFactorSection = document.getElementById('twoFactorSection');

  if (!formEl) {
    console.warn('[Demo] loginForm element not found. Script exiting.');
    return;
  }

  // Username: log masked value and optionally store a non-sensitive marker in localStorage
  if (usernameEl) {
    usernameEl.addEventListener('input', function (e) {
      const val = e.target.value || '';
      // Masked for display — shows a tiny hint but not full username
      const masked = maskValue(val, 2, 1);
      safeLog('Username input (masked)', masked);

      // Optional: store a non-sensitive presence marker or masked username if you must
      // localStorage.setItem('demo_username_masked', masked); // uncomment only with explicit consent
    });
  }

  // Password: DO NOT store or print the raw password. Only indicate field activity.
  if (passwordEl) {
    passwordEl.addEventListener('input', function () {
      // DO NOT capture or store actual password value.
      localStorage.setItem('demo_password_touched', 'true'); // simple presence marker only
      safeLog('Password input', '<value hidden for safety>');
    });
  }

  // 2FA: Mask as well — do not store the full value
  if (twoFactorEl) {
    twoFactorEl.addEventListener('input', function (e) {
      const val = e.target.value || '';
      const masked = val ? ('***' + (val.length > 2 ? val.slice(-2) : '')) : '';
      // store only masked or presence if necessary
      localStorage.setItem('demo_2fa_masked', masked || '');
      safeLog('2FA input (masked)', masked || '<none>');
    });
  }

  // Form submit behavior (educational): prepare a payload that EXCLUDES sensitive secrets
  formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = usernameEl?.value || '';
    // NOTE: we intentionally do NOT read passwordEl.value here
    const twoFactor = twoFactorEl?.value || '';

    const demoPayload = {
      username_masked: maskValue(username, 2, 1),
      twoFactor_masked: twoFactor ? ('***' + (twoFactor.length > 2 ? twoFactor.slice(-2) : '')) : '',
      note: 'password excluded for safety (educational demo)',
      timestamp: new Date().toISOString(),
    };

    safeLog('Prepared demo payload', demoPayload);

    // ===== LOCAL TESTING ONLY =====
    // If you are running a **closed lab** and want to demonstrate exfiltration,
    // use a LOCAL-only receiver. Keep this commented by default and only enable
    // when you control both client and server on localhost.
    //
    // Example (local-only):
    //
    // fetch('http://127.0.0.1:5501/receive', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(demoPayload)
    // })
    // .then(r => safeLog('Local server response status', r.status))
    // .catch(err => safeLog('Local server error', err.message));
    //
    // ===============================

    // Demo UX: reveal the 2FA field after first submit to show multi-step flows (mirrors some phishing patterns)
    if (twoFactorSection && twoFactorSection.style.display === 'none') {
      twoFactorSection.style.display = 'block';
      twoFactorEl?.focus();
      twoFactorEl?.setAttribute('required', 'true');
    }
  });
})();
