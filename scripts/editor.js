window.addEventListener('DOMContentLoaded', () => {
  const frame = document.getElementById('template-frame');
  const templatePath = sessionStorage.getItem('selectedTemplate');

  if (templatePath) {
    // Make sure the path is correct relative to editor.html
    // Assuming your templates are in a 'templates' folder.
    frame.src = `templates/${templatePath}`;

    frame.onload = () => {
      // The template is loaded inside the iframe.
      // You can now interact with it here.
      console.log('Template loaded successfully!');
      
      const doc = frame.contentDocument || frame.contentWindow.document;
      
      // Example of an interaction with the loaded content
      // Note: This assumes you will add an element with a class 'card-text'
      // to your templates for editing.
      // Let's also connect the header buttons to the iframe content.
      
      // Text button example
      document.querySelector('.text-button-header').addEventListener('click', () => {
          // Logic for text editing, e.g., changing font properties
          // You would need a more sophisticated UI for this.
          const editableElements = doc.querySelectorAll('[contenteditable="true"]');
          if (editableElements.length > 0) {
              editableElements[0].style.color = 'blue'; // Example change
              alert('Text color changed to blue for the first editable element!');
          }
      });
      
      // You can add similar listeners for your other header buttons.
    };
  } else {
    // Handle the case where no template was selected
    console.error('No template was selected. Redirecting or showing a message.');
    // Optional: Redirect back to the card patterns page or show a message to the user.
    // window.location.href = 'card-patterns.html'; 
  }
});
