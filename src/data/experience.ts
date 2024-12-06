interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

const experience: Experience[] = [
  {
    title: "Full Stack Software Engineer Intern",
    company: "Webilfly-solutions",
    period: "Jun, 2023 - Aug,2023",
    location: "Remote",
    achievements: [
      'Developed administrative and doctor panels for a Hospital Management System',
      'Worked with PHP, React, and MySQL technologies. Implemented functionalities for doctors, enabling them to access and update patient information.',
      'Implemented functionalities for doctors, enabling them to access and update patient information',
      'Designed and implemented user authentication for secure access to the admin and doctor panels.',  ]
  }
]

export default experience;