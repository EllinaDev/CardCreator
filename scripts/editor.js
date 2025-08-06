window.addEventListener('DOMContentLoaded', () => {
  const frame = document.getElementById('template-frame');
  const templatePath = sessionStorage.getItem('selectedTemplate');

  if (templatePath) {
    frame.src = `templates/${templatePath}`;

    frame.onload = () => {
      console.log('Template loaded successfully!');
      
      const doc = frame.contentDocument || frame.contentWindow.document;
      document.querySelector('.text-button-header').addEventListener('click', () => {
          // Logic for text editing, e.g., changing font properties
          const editableElements = doc.querySelectorAll('[contenteditable="true"]');
          if (editableElements.length > 0) {
              editableElements[0].style.color = 'blue';
              alert('Text color changed to blue for the first editable element!');
          }
      });
      
      // i will add similar listeners for my other header buttons.
    };
  } else {
    console.error('No template was selected. Redirecting or showing a message.');
  }
});

