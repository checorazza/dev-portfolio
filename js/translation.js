document.addEventListener("DOMContentLoaded", async () => {
  const languageDropdown = document.getElementById("languageDropdown");
  const languageItems = document.querySelectorAll(
    ".dropdown-menu .dropdown-item"
  );

  async function loadTranslations(language) {
    try {
      const response = await fetch(`./json/${language}.json`);
      if (!response.ok) throw new Error(`Failed to load ${language}.json`);
      return await response.json();
    } catch (error) {
      console.error(`Error loading translations for ${language}:`, error);
      return null;
    }
  }

  async function updateContent(language) {
    console.log("Updating content for:", language); // Debugging

    const langData = await loadTranslations(language);
    if (!langData) {
      console.warn(`No translations found for ${language}`);
      return;
    }

    function updateText(id, text) {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = text;
      } else {
        console.warn(`Missing element: #${id}`);
      }
    }

    // Hero and Navbar
    updateText("heroSubtitle", langData.heroSubtitle);
    updateText("languageDropdown", langData.languageDropdown);

    // About Me
    updateText("aboutText", langData.aboutText);
    if (langData.detail_item) {
      updateText("detail_item1", langData.detail_item[0] || "");
      updateText("detail_item2", langData.detail_item[1] || "");
    }

    // Services
    updateText("servicesTitle", langData.servicesTitle);
    if (langData.services?.titles) {
      updateText("service1", langData.services.titles[0] || "");
      updateText("service2", langData.services.titles[1] || "");
      updateText("service3", langData.services.titles[2] || "");
    }

    if (langData.services?.descriptions) {
      updateText(
        "service1_description",
        langData.services.descriptions[0] || ""
      );
      updateText(
        "service2_description",
        langData.services.descriptions[1] || ""
      );
      updateText(
        "service3_description",
        langData.services.descriptions[2] || ""
      );
    }

    // Experience
    updateText("experienceTitle", langData.experienceTitle);

    // Projects
    updateText("projectsTitle", langData.projectsTitle);
    if (langData.projects?.titles) {
      updateText("project_title1", langData.projects.titles[0] || "");
      updateText("project_title2", langData.projects.titles[1] || "");
    }

    // Skills
    updateText("skillsTitle", langData.skillsTitle);
  }

  // Event Listeners for Language Dropdown
  languageItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedLanguage = item.getAttribute("data-lang");
      if (!selectedLanguage) return;

      console.log("Language selected:", selectedLanguage); // Debugging
      languageDropdown.textContent = item.textContent;
      updateContent(selectedLanguage);
    });
  });

  // Ensure default language loads
  updateContent("en");
});
