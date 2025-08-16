import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Tạo các bản dịch
const resources = {
  en: {
    translation: {
      // Navigation
      "Home": "Home",
      "Education": "Education",
      "Projects": "Projects",
      "Experience": "Experience",
      "Certification": "Certification",
      "Contact": "Contact",
      "Language": "Language",
      
      // Hero section
      "BACKEND DEVELOPER": "BACKEND DEVELOPER",
      "Download CV": "Download CV",
      "Contact Me": "Contact Me",
      "My Skills": "My Skills",
      
      // Education section
      "My Education": "My Education",
      
      // Projects section
      "My Projects": "My Projects",
      "All Projects": "All Projects",
      "School Projects": "School Projects",
      "Blockchain Projects": "Blockchain Projects",
      "Other Projects": "Other Projects",
      "View Project": "View Project",
      "View All": "View All",
      "Personal": "Personal",
      "Team": "Team",
      "Team (Role: Team Leader)": "Team (Role: Team Leader)",
      
      // Experience section
      "Work Experience": "Work Experience",
      
      // Certification section
      "My Certifications": "My Certifications",
      "View Certificate": "View Certificate",
      
      // Contact section
      "Get in Touch": "Get in Touch",
      "Contact Info Text": "If you have any questions or concerns about me, please do not hesitate to contact me via the information below.",
      "Email Me": "Email Me",
      "Visit My GitHub": "Visit My GitHub",
      "Visit My Website": "Visit My Website"
    }
  },
  vi: {
    translation: {
      // Navigation
      "Home": "Trang chủ",
      "Education": "Học vấn",
      "Projects": "Dự án",
      "Experience": "Kinh nghiệm",
      "Certification": "Chứng chỉ",
      "Contact": "Liên hệ",
      "Language": "Ngôn ngữ",
      
      // Hero section
      "BACKEND DEVELOPER": "LẬP TRÌNH VIÊN BACKEND",
      "Download CV": "Tải CV",
      "Contact Me": "Liên hệ tôi",
      "My Skills": "Kỹ năng của tôi",
      
      // Education section
      "My Education": "Học vấn của tôi",
      
      // Projects section
      "My Projects": "Dự án của tôi",
      "All Projects": "Tất cả dự án",
      "School Projects": "Dự án học tập",
      "Blockchain Projects": "Dự án Blockchain",
      "Other Projects": "Dự án khác",
      "View Project": "Xem dự án",
      "View All": "Xem tất cả",
      "Personal": "Cá nhân",
      "Team": "Nhóm",
      "Team (Role: Team Leader)": "Nhóm (Vai trò: Trưởng nhóm)",
      
      // Experience section
      "Work Experience": "Kinh nghiệm làm việc",
      
      // Certification section
      "My Certifications": "Chứng chỉ của tôi",
      "View Certificate": "Xem chứng chỉ",
      
      // Contact section
      "Get in Touch": "Liên hệ",
      "Contact Info Text": "Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về tôi, vui lòng liên hệ với tôi qua các thông tin bên dưới.",
      "Email Me": "Email cho tôi",
      "Visit My GitHub": "Ghé thăm GitHub của tôi",
      "Visit My Website": "Ghé thăm website của tôi"
    }
  }
};

// Cấu hình i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Ngôn ngữ mặc định
    interpolation: {
      escapeValue: false, // React đã xử lý XSS
    },
    react: {
      useSuspense: false, // Tắt suspense để tránh lỗi trong quá trình tải
    }
  });

export default i18n; 