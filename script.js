function showFeedbackForm(projectName) {
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.style.display = 'block'; // Show the form

    // Scroll to the feedback form
    feedbackForm.scrollIntoView({ behavior: 'smooth' });

    // Set the project name in the form header
    document.getElementById('projectName').textContent = projectName;
}





document.getElementById('feedback').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(this);
    const ui = formData.get('ui');
    const performance = formData.get('performance');
    const navigation = formData.get('navigation');
    const bugs = formData.get('bugs');
    const recommend = formData.get('recommend');
    const features = formData.get('features');
    const improvements = formData.get('improvements');
    const email = formData.get('email');

    // Construct WhatsApp message
    const message = `*Feedback for ALTECH*\n\n` +
                    `User Interface: ${ui}\n` +
                    `Overall Performance: ${performance}\n` +
                    `Ease of Navigation: ${navigation}\n` +
                    `Bugs/Issues: ${bugs}\n` +
                    `Recommendation: ${recommend}\n` +
                    `Additional Features: ${features}\n` +
                    `Suggestions for Improvements: ${improvements}\n` +
                    `Email (optional): ${email}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/254748219527?text=${encodedMessage}`, '_blank');

    // Reset the form
    this.reset();
    document.getElementById('feedbackForm').style.display = 'none';
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the current visitor count from local storage or default to 0
    let visitorCount = localStorage.getItem('visitorCount') || 100;

    // Increment the visitor count
    visitorCount = parseInt(visitorCount) + 100;

    // Save the updated visitor count back to local storage
    localStorage.setItem('visitorCount', visitorCount);

    // Display the updated visitor count in the element with id 'count'
    document.getElementById('count').textContent = visitorCount;
});