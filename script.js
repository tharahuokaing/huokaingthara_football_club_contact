// =================================================================
// HUOKAINGTHARA FOOTBALL CLUB - CONTACT FORM & LANGUAGE SCRIPT
// =================================================================

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'kh' : 'en';
    document.documentElement.lang = currentLang === 'kh' ? 'km' : 'en';

    const btn = document.getElementById('lang-toggle-btn');
    if (btn) {
        btn.textContent = currentLang === 'en' ? '🇰🇭 ខ្មែរ' : '🇬🇧 English';
    }

    document.querySelectorAll('[data-en][data-kh]').forEach((el) => {
        const value = currentLang === 'en' ? el.dataset.en : el.dataset.kh;
        if (el.tagName === 'OPTION') {
            el.textContent = value;
        } else {
            el.innerHTML = value;
        }
    });

    document.querySelectorAll('[data-placeholder-en][data-placeholder-kh]').forEach((el) => {
        el.placeholder = currentLang === 'en' ? el.dataset.placeholderEn : el.dataset.placeholderKh;
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    // Gather input values
    const name = document.getElementById('sender-name').value;
    const contact = document.getElementById('sender-contact').value;
    const category = document.getElementById('inquiry-type').value;
    const message = document.getElementById('sender-message').value;

    // Log submitted data (simulating backend dispatch)
    console.log("=== NEW CLUB INQUIRY RECEIVED ===");
    console.log(`Language: ${currentLang.toUpperCase()}`);
    console.log(`Name: ${name}`);
    console.log(`Contact: ${contact}`);
    console.log(`Category: ${category}`);
    console.log(`Message: ${message}`);

    // Display Success Modal Alert
    const successAlert = document.getElementById('success-alert');
    if (successAlert) {
        successAlert.classList.remove('hidden');
    }
}

function resetForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.reset();
    }
    const successAlert = document.getElementById('success-alert');
    if (successAlert) {
        successAlert.classList.add('hidden');
    }
}
