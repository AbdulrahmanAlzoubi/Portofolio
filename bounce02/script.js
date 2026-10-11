const translations = {
  en: {
    title: "Abdulrahman Al-Zoubi | Cybersecurity", language: "Switch language to Arabic", navAbout: "About", navSkills: "Skills", navContact: "Contact", eyebrow: "CYBERSECURITY PROFESSIONAL", hello: "Hello, I’m", role: "Cybersecurity Professional | Penetration Testing | Red Team | System Administration", contactButton: "Contact", aboutHeading: "About Me", aboutText: "I hold a Bachelor's degree in Cybersecurity from Al-Zaytoonah University of Jordan, graduating in 2026. My interests include penetration testing, web application security, red team operations, networking, and system administration.", skillsHeading: "Skills", offensiveHeading: "Offensive Security", offensiveSkills: "Penetration Testing · Web Application Security · Red Team Fundamentals · CTF", infrastructureHeading: "Infrastructure & Networking", infrastructureSkills: "Linux · Windows Server · Active Directory · TCP/IP · VLANs · Routing & Switching", contactHeading: "Contact", nameLabel: "Name", emailLabel: "Email", messageLabel: "Message", sendButton: "Prepare email", footerText: "Built with HTML, CSS, and JavaScript."
  },
  ar: {
    title: "عبدالرحمن الزعبي | الأمن السيبراني", language: "التبديل إلى الإنجليزية", navAbout: "نبذة عني", navSkills: "المهارات", navContact: "التواصل", eyebrow: "مختص أمن سيبراني", hello: "مرحبًا، أنا", role: "مختص أمن سيبراني | اختبار الاختراق | الفريق الأحمر | إدارة الأنظمة", contactButton: "تواصل", aboutHeading: "نبذة عني", aboutText: "أحمل درجة البكالوريوس في الأمن السيبراني من جامعة الزيتونة الأردنية، وتخرجت عام 2026. تشمل اهتماماتي اختبار الاختراق وأمن تطبيقات الويب وعمليات الفريق الأحمر والشبكات وإدارة الأنظمة.", skillsHeading: "المهارات", offensiveHeading: "الأمن الهجومي", offensiveSkills: "اختبار الاختراق · أمن تطبيقات الويب · أساسيات الفريق الأحمر · CTF", infrastructureHeading: "البنية التحتية والشبكات", infrastructureSkills: "Linux · Windows Server · Active Directory · TCP/IP · VLANs · التوجيه والتبديل", contactHeading: "التواصل", nameLabel: "الاسم", emailLabel: "البريد الإلكتروني", messageLabel: "الرسالة", sendButton: "إعداد البريد الإلكتروني", footerText: "بُني باستخدام HTML وCSS وJavaScript."
  }
};
let language = "en";
const button = document.querySelector("#language-toggle");
function updateLanguage() {
  const words = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = words.title;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = words[element.dataset.i18n];
  });
  button.textContent = language === "en" ? "عربي" : "English";
  button.setAttribute("aria-label", words.language);
}
button.addEventListener("click", () => {
  language = language === "en" ? "ar" : "en";
  updateLanguage();
});
document.querySelector("#year").textContent = new Date().getFullYear();
updateLanguage();
