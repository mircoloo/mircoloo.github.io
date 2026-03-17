const { createApp } = Vue;

createApp({
    data() {
        return {
            title: "Mirco's Portfolio",
            subtitle: "On Develop - A Professional Journey",
            timelineEvents: [
                {
                    id: 1,
                    title: "Computer Science in AI Master Degree",
                    role: "Università di Padova",
                    date: "Oct 2023 - Dec 2025",
                    description: "Graduated at UNIPD as an AI Computer Scientist. Working on Python ...",
                    side: "right"
                },
                {
                    id: 2,
                    title: "Erasmus Student",
                    role: "Universidad Autonoma de Barcelona",
                    date: "Sep 2024 - Feb 2025",
                    description: "I've taken part in the Erasmus+ project ...",
                    side: "left"
                },
                {
                    id: 3,
                    title: "Junior software developer",
                    role: "TC Consulting Group",
                    date: "Jan 2023 - Sep 2023",
                    description: "Developer in the Healthcare industries on the Intersystem Objectscript language. Mantained frontend project in HTML, CSS and JS ...",
                    side: "right"
                },
                {
                    id: 4,
                    title: "Computer Engineer Bachelor Graduated",
                    role: "Università di Trento",
                    date: "Sep 2019 - Sep 2022",
                    description: "Graduated at UNITN as a Computer Engineer...",
                    side: "left"
                },
                {
                    id: 5,
                    title: "Electronics technician",
                    role: "ITT Marconi",
                    date: "Sep 2015 - Jul 2019",
                    description: "Diplomated from High School ITT Marconi as an Electronics expert ...",
                    side: "right"
                }
            ]
        }
    },
    mounted() {
        // Optional: Add logic here for scroll animations if needed
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.timeline-container').forEach(el => observer.observe(el));
    }
}).mount('#app');
