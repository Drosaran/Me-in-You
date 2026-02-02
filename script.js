(function () {
  'use strict';

  // ===== NOTIFICATION: Choose one (or leave both empty to disable) =====
  // Option A — Formspree (limited free submissions, emails you)
  const FORMSPREE_ENDPOINT = '';
  // Option B — Google Sheet via Apps Script (unlimited, stores in a spreadsheet)
  // See google-sheet-setup.md for step-by-step. Paste your Web app URL here:
  const GOOGLE_SCRIPT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyxvlNWdAxRbYecofllLGhXjfbpRRr1JV3hiD7A4B0unPFZ_PQ2GqHin555jmYUksFH/exec';

  const steps = document.querySelectorAll('.step');
  const choiceBtns = document.querySelectorAll('.choice-btn[data-next]');
  const choiceLinks = document.querySelectorAll('.choice-link');
  const backBtns = document.querySelectorAll('.back-btn');

  function getCurrentStepId() {
    const active = document.querySelector('.step.active');
    return active ? active.id : '';
  }

  function ensureSingleStepVisible() {
    var all = document.querySelectorAll('.step');
    var activeEl = document.querySelector('.step.active');
    if (!all.length) return;
    all.forEach(function (el) {
      el.style.display = el === activeEl ? 'block' : 'none';
    });
  }

  function goToStep(stepId, fromStepId) {
    steps.forEach(function (step) {
      step.classList.remove('active');
      if (step.id === stepId) {
        if (fromStepId) step.dataset.prev = fromStepId;
        step.classList.add('active');
        step.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    var current = document.querySelector('.step.active');
    var backBtn = current ? current.querySelector('.back-btn') : null;
    if (backBtn) backBtn.style.display = current.dataset.prev ? 'inline-block' : 'none';
    ensureSingleStepVisible();
  }

  function notify(question, answer, page) {
    var pageVal = page || document.title || window.location.pathname;
    var ts = new Date().toISOString();

    // Google Sheet (unlimited) — preferred if set
    if (GOOGLE_SCRIPT_ENDPOINT && GOOGLE_SCRIPT_ENDPOINT.indexOf('script.google.com') !== -1) {
      var body = new URLSearchParams({
        timestamp: ts,
        page: pageVal,
        question: question || '',
        answer: answer || ''
      });
      return fetch(GOOGLE_SCRIPT_ENDPOINT, {
        method: 'POST',
        body: body
      }).catch(function () {});
    }

    // Formspree (limited free tier)
    if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) return Promise.resolve();
    var formData = new FormData();
    formData.append('_subject', 'Me in You — New answer');
    formData.append('page', pageVal);
    formData.append('question', question || '');
    formData.append('answer', answer || '');
    formData.append('timestamp', ts);
    return fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData
    }).catch(function () {});
  }

  function handleChoiceClick(e) {
    e.preventDefault();
    e.stopPropagation();
    var next = this.getAttribute('data-next');
    var question = this.getAttribute('data-question') || getCurrentStepId();
    var answer = this.getAttribute('data-answer') || (this.textContent || '').trim();
    if (next) {
      notify(question, answer, 'index').then(function () {
        goToStep(next, getCurrentStepId());
      });
    }
  }

  function handleBackClick(e) {
    e.preventDefault();
    e.stopPropagation();
    var step = this.closest('.step');
    var prev = step && step.dataset.prev;
    if (prev) goToStep(prev);
  }

  function handleLinkClick(e) {
    e.preventDefault();
    e.stopPropagation();
    var href = this.getAttribute('href');
    if (!href) return;
    var question = this.getAttribute('data-question') || 'Answer';
    var answer = this.getAttribute('data-answer') || (this.textContent || '').trim();
    var page = document.title || window.location.pathname;
    notify(question, answer, page).then(function () {
      window.location.href = href;
    });
  }

  // Avoid double fire: on touch devices touchend runs the action; click is ignored after touch
  var touchHandled = false;
  function onTouchStart() {
    touchHandled = true;
  }
  function onClick(e, handler, el) {
    if (touchHandled) {
      touchHandled = false;
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    handler.call(el, e);
  }

  // In-page choices (buttons) — click and touch for mobile
  choiceBtns.forEach(function (btn) {
    btn.addEventListener('touchstart', onTouchStart, { passive: true });
    btn.addEventListener('touchend', function (e) {
      e.preventDefault();
      handleChoiceClick.call(this, e);
    }, { passive: false });
    btn.addEventListener('click', function (e) {
      onClick(e, handleChoiceClick, this);
    });
  });

  // Back button
  backBtns.forEach(function (btn) {
    btn.addEventListener('touchstart', onTouchStart, { passive: true });
    btn.addEventListener('touchend', function (e) {
      e.preventDefault();
      handleBackClick.call(this, e);
    }, { passive: false });
    btn.addEventListener('click', function (e) {
      onClick(e, handleBackClick, this);
    });
  });

  // Link choices (final answers, concern pages, solution pages)
  choiceLinks.forEach(function (link) {
    link.addEventListener('touchstart', onTouchStart, { passive: true });
    link.addEventListener('touchend', function (e) {
      e.preventDefault();
      handleLinkClick.call(this, e);
    }, { passive: false });
    link.addEventListener('click', function (e) {
      onClick(e, handleLinkClick, this);
    });
  });

  // Show back button on active step on load
  var active = document.querySelector('.step.active');
  if (active) {
    var backBtn = active.querySelector('.back-btn');
    if (backBtn) backBtn.style.display = active.dataset.prev ? 'inline-block' : 'none';
  }

  // If we landed with a hash (e.g. index.html#step-confession), show that step
  var hash = window.location.hash.slice(1);
  if (hash && document.getElementById(hash)) {
    var target = document.getElementById(hash);
    if (target && target.classList.contains('step')) {
      document.querySelectorAll('.step').forEach(function (s) { s.classList.remove('active'); });
      target.classList.add('active');
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      var btn = target.querySelector('.back-btn');
      if (btn) btn.style.display = target.dataset.prev ? 'inline-block' : 'none';
    }
  }

  ensureSingleStepVisible();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureSingleStepVisible);
  }
})();
