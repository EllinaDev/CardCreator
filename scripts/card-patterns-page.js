
console.log('This card does not have a template associated with it.');

function openEditor(templateName) {
  window.location.href = `editor.html?templates=${templateName}`;
}


document.querySelectorAll('.card').forEach((templateDiv) => {
  templateDiv.addEventListener('click', () => {
    const templateFile = templateDiv.dataset.template;
    
    if (templateFile) {
      
      sessionStorage.setItem('selectedTemplate', templateFile);
      
      
      window.location.href = 'editor.html';
    } else {
      console.log('This card does not have a template associated with it.');
    }
  });
});