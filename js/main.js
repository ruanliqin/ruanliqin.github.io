/**
 * Subtle typing line under hero
 */
(function () {
  var el = document.getElementById("typing-target");
  if (!el) return;

  var messages = [
    "肝胆外科 · 肿瘤免疫 · 临床转化研究",
    "Hepatobiliary surgery · oncology · Jiangxi, CN",
    "Building evidence at the bedside and in the lab.",
  ];
  var msgIndex = 0;
  var charIndex = 0;
  var deleting = false;
  var pauseEnd = 0;

  function tick(now) {
    if (now < pauseEnd) {
      requestAnimationFrame(tick);
      return;
    }

    var full = messages[msgIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = full.slice(0, charIndex);
      if (charIndex >= full.length) {
        deleting = true;
        pauseEnd = now + 2600;
      }
    } else {
      charIndex--;
      el.textContent = full.slice(0, Math.max(0, charIndex));
      if (charIndex <= 0) {
        deleting = false;
        msgIndex = (msgIndex + 1) % messages.length;
        pauseEnd = now + 500;
      }
    }
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
