// scripts/card-patterns.js

// This function is defined but not used in the provided code.
// You can remove it or ignore it for now.
console.log('This card does not have a template associated with it.');

function openEditor(templateName) {
  window.location.href = `editor.html?templates=${templateName}`;
}


document.querySelectorAll('.card').forEach((templateDiv) => {
  templateDiv.addEventListener('click', () => {
    const templateFile = templateDiv.dataset.template;
    
    // Make sure a template file is defined before proceeding
    if (templateFile) {
      // Save template path in sessionStorage
      sessionStorage.setItem('selectedTemplate', templateFile);
      
      // Redirect to editor
      window.location.href = 'editor.html';
    } else {
      console.log('This card does not have a template associated with it.');
    }
  });
});