const { createApp } = Vue;

createApp({
    data() {
        return {
            title: "Mirco's Portfolio",
            subtitle: "On Develop - A Professional Journey",
            socialLinks: {
                github: "https://github.com/mircoloo",
                linkedin: "https://linkedin.com/in/mircoloo" 
            },
            currentYear: new Date().getFullYear(),
            formation: [
                {
                    id: 1,
                    degree: "Master's Degree in Computer Science - AI",
                    school: "Università di Padova",
                    year: "2023 - 2025",
                    details: "specialization in Artificial Intelligence, Machine Learning, and Computer Vision."
                },
                {
                    id: 2,
                    degree: "Bachelor's Degree in Computer Engineering",
                    school: "Università di Trento",
                    year: "2019 - 2022",
                    details: "Focus on Software Engineering, Systems, and Networks."
                },
                {
                    id: 3,
                    degree: "Electronics Technician Diploma",
                    school: "ITT Marconi",
                    year: "2015 - 2019",
                    details: "High school diploma with technical specialization in electronics."
                }
            ],
            projects: [
                {
                    id: 1,
                    title: "AI Image Classifier",
                    description: "A deep learning model to classify images of different bird species using PyTorch.",
                    technologies: ["Python", "PyTorch", "OpenCV"],
                    link: "#"
                },
                {
                    id: 2,
                    title: "Portfolio Website",
                    description: "This personal portfolio website built with Vue.js and custom CSS.",
                    technologies: ["Vue.js", "HTML5", "CSS3"],
                    link: "#"
                },
                {
                    id: 3,
                    title: "Healthcare Management System",
                    description: "Frontend interface for managing patient records and hospital resources.",
                    technologies: ["JavaScript", "HTML/CSS", "InterSystems IRIS"],
                    link: "#"
                }
            ],
            timelineEvents: [
                {
                    id: 1,
                    title: "Erasmus Student",
                    role: "Universidad Autonoma de Barcelona",
                    date: "Sep 2024 - Feb 2025",
                    description: "Participated in the Erasmus+ program, focusing on advanced AI courses and cross-cultural collaboration.",
                    side: "left"
                },
                {
                    id: 2,
                    title: "Junior Software Developer",
                    role: "TC Consulting Group",
                    date: "Jan 2023 - Sep 2023",
                    description: "Developed healthcare industry solutions using InterSystems ObjectScript. Maintained and enhanced frontend projects with standard web technologies.",
                    side: "right"
                }
            ]
        }
    },
    mounted() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        // Observe timeline items and other sections
        setTimeout(() => {
            const targets = document.querySelectorAll('.timeline-container, .education-item, .project-card');
            targets.forEach(el => observer.observe(el));
        }, 100); // Small delay to ensure DOM is rendered
    }
}).mount('#app');
