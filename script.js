const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const signInLink = document.querySelector('.sign-in');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));

    if (signInLink) {
      signInLink.classList.toggle('mobile-visible', isOpen);
    }
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      if (signInLink) {
        signInLink.classList.remove('mobile-visible');
      }
    });
  });
}

const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
  document.body.classList.add('dark-mode');
  if (themeToggle) {
    themeToggle.textContent = '☀️';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const modalClose = document.querySelector('.modal-close');
const modalTriggers = document.querySelectorAll('.modal-trigger');
const loginModal = document.getElementById('loginModal');
const loginOpenButton = document.querySelector('[data-modal-target="loginModal"]');
const loginCloseButton = document.querySelector('.login-close');
const loginForm = document.querySelector('.login-form');

function closeModal() {
  if (modalOverlay) {
    modalOverlay.hidden = true;
    document.body.style.overflow = '';
  }
}

function closeLoginModal() {
  if (loginModal) {
    loginModal.hidden = true;
    document.body.style.overflow = '';
  }
}

if (modalOverlay && modalClose) {
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });
}

if (loginModal && loginCloseButton) {
  loginCloseButton.addEventListener('click', closeLoginModal);
  loginModal.addEventListener('click', (event) => {
    if (event.target === loginModal) {
      closeLoginModal();
    }
  });
}

if (loginOpenButton) {
  loginOpenButton.addEventListener('click', () => {
    if (loginModal) {
      loginModal.hidden = false;
      document.body.style.overflow = 'hidden';
    }
  });
}

modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const title = trigger.getAttribute('data-title') || 'Details';
    const content = trigger.getAttribute('data-content') || 'This content is temporarily unavailable.';

    if (modalTitle) {
      modalTitle.textContent = title;
    }

    if (modalContent) {
      modalContent.textContent = content;
    }

    if (modalOverlay) {
      modalOverlay.hidden = false;
      document.body.style.overflow = 'hidden';
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
    closeLoginModal();
  }
});

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    closeLoginModal();
  });
}

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    const fields = ['name', 'email', 'subject', 'message'];
    let isValid = true;

    fields.forEach((fieldName) => {
      const input = contactForm.querySelector(`[name="${fieldName}"]`);
      const row = input?.closest('.form-row');
      const error = row?.querySelector('.field-error');

      if (!input) return;

      const value = input.value.trim();
      const isEmpty = value.length === 0;

      if (isEmpty) {
        isValid = false;
        input.classList.add('invalid');
        if (error) {
          error.textContent = 'This field is required.';
        }
      } else {
        input.classList.remove('invalid');
        if (error) {
          error.textContent = '';
        }
      }
    });

    const emailInput = contactForm.querySelector('[name="email"]');
    const emailRow = emailInput?.closest('.form-row');
    const emailError = emailRow?.querySelector('.field-error');

    if (emailInput && emailInput.value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        emailInput.classList.add('invalid');
        if (emailError) {
          emailError.textContent = 'Please enter a valid email address.';
        }
      } else {
        emailInput.classList.remove('invalid');
        if (emailError) {
          emailError.textContent = '';
        }
      }
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
}
