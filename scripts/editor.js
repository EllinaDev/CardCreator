function getTemplateFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("template");
  
}

async function loadTemplate(templateName) {
  const container = document.getElementById("card-container");
  try {
    const res = await fetch(`templates/${templateName}.html`);
    if (!res.ok) throw new Error("Template not found");
    const html = await res.text();
    container.innerHTML = html;
  } catch (err) {
    console.error("Error loading template:", err);
    container.innerHTML = `<p style="color: red;">Failed to load template.</p>`;
  }
}

const templateName = getTemplateFromURL();
if (templateName) {
  loadTemplate(templateName);
}
