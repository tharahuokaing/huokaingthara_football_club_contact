// =================================================================
// HUOKAINGTHARA FOOTBALL CLUB - CONTACT FORM SCRIPT
// =================================================================

function handleFormSubmit(event) {
    event.preventDefault();

    // Gather input values
    const name = document.getElementById('sender-name').value;
    const contact = document.getElementById('sender-contact').value;
    const category = document.getElementById('inquiry-type').value;
    const message = document.getElementById('sender-message').value;

    // Log submitted data (simulating backend dispatch)
    console.log("=== NEW CLUB INQUIRY RECEIVED ===");
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
