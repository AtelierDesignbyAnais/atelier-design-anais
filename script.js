document.addEventListener('DOMContentLoaded', () => {

    // --- Translations Data ---
    const translations = {
        fr: {
            nav_approach: "L'Approche",
            nav_pillars: "Piliers",
            nav_gallery: "Galerie",
            nav_contact: "Contact",
            hero_headline: "Design Global <br>& Émotions <br>Digitales.",
            hero_showreel: "Showreel 2026",
            pillars_title: "Les 3 Piliers.",
            pillar_1_title: "Web Design",
            pillar_1_cta: "Une présence digitale à la hauteur de votre talent.",
            pillar_2_title: "Papeterie Événementielle",
            pillar_2_cta: "Le premier chapitre tactile de votre plus bel événement.",
            pillar_3_title: "Identité Visuelle",
            pillar_3_cta: "Une identité visuelle qui raconte votre histoire sans dire un mot.",
            approach_digital_title: "Digital",
            approach_digital_subtitle: "Stratégie & UI",
            approach_digital_desc: "De l'architecture de l'information au pixel perfect. Une ergonomie pensée pour l'utilisateur, habillée d'une interface immersive.",
            approach_paper_title: "Papier",
            approach_paper_subtitle: "Élégance Tactile",
            approach_paper_desc: "Faire-part, Save the Date, Plan de table. La même rigueur et le même amour du détail appliqués à la papeterie événementielle de luxe.",
            gallery_title: "Galerie Immersive.",
            signature_text: "Créations digitales & papeterie fine : l'esthétique au service de vos moments forts.",
            cta_huge: "Let's Talk",
            cta_whatsapp: "Message WhatsApp",
            footer_rights: "Tous droits réservés."
        },
        en: {
            nav_approach: "Approach",
            nav_pillars: "Pillars",
            nav_gallery: "Gallery",
            nav_contact: "Contact",
            hero_headline: "Global Design <br>& Digital <br>Emotions.",
            hero_showreel: "Showreel 2026",
            pillars_title: "The 3 Pillars.",
            pillar_1_title: "Web Design",
            pillar_1_cta: "A digital presence matching your talent.",
            pillar_2_title: "Event Stationery",
            pillar_2_cta: "The first tactile chapter of your most beautiful event.",
            pillar_3_title: "Visual Identity",
            pillar_3_cta: "A visual identity that tells your story without saying a word.",
            approach_digital_title: "Digital",
            approach_digital_subtitle: "Strategy & UI",
            approach_digital_desc: "From information architecture to pixel perfect. User-centric ergonomics, dressed in an immersive interface.",
            approach_paper_title: "Paper",
            approach_paper_subtitle: "Tactile Elegance",
            approach_paper_desc: "Invitations, Save the Dates, Seating charts. The same rigor and love for detail applied to luxury event stationery.",
            gallery_title: "Immersive Gallery.",
            signature_text: "Digital creations & fine stationery: aesthetics serving your most important moments.",
            cta_huge: "Let's Talk",
            cta_whatsapp: "WhatsApp Message",
            footer_rights: "All rights reserved."
        },
        es: {
            nav_approach: "Enfoque",
            nav_pillars: "Pilares",
            nav_gallery: "Galería",
            nav_contact: "Contacto",
            hero_headline: "Diseño Global <br>& Emociones <br>Digitales.",
            hero_showreel: "Showreel 2026",
            pillars_title: "Los 3 Pilares.",
            pillar_1_title: "Diseño Web",
            pillar_1_cta: "Una presencia digital a la altura de tu talento.",
            pillar_2_title: "Papelería de Eventos",
            pillar_2_cta: "El primer capítulo táctil de tu evento más hermoso.",
            pillar_3_title: "Identidad Visual",
            pillar_3_cta: "Una identidad visual que cuenta tu historia sin decir una palabra.",
            approach_digital_title: "Digital",
            approach_digital_subtitle: "Estrategia y UI",
            approach_digital_desc: "Desde la arquitectura de la información hasta el píxel perfecto. Ergonomía centrada en el usuario con una interfaz inmersiva.",
            approach_paper_title: "Papel",
            approach_paper_subtitle: "Elegancia Táctil",
            approach_paper_desc: "Invitaciones, Save the Date, Planos de mesa. El mismo rigor y amor por el detalle aplicados a la papelería de lujo para eventos.",
            gallery_title: "Galería Inmersiva.",
            signature_text: "Creaciones digitales y papelería fina: la estética al servicio de tus momentos clave.",
            cta_huge: "Hablemos",
            cta_whatsapp: "Mensaje WhatsApp",
            footer_rights: "Todos los derechos reservados."
        }
    };

    // --- i18n Logic ---
    const langBtns = document.querySelectorAll('.lang-btn');
    const i18nElements = document.querySelectorAll('[data-i18n]');

    const setLanguage = (lang) => {
        // Update Active Button
        langBtns.forEach(btn => {
            if(btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Text Content
        i18nElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    };

    // Attach click events
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.target.dataset.lang);
        });
    });

    // Default to FR
    setLanguage('fr');

    // --- Mobile Menu Overlay Logic ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if(mobileToggle && mobileOverlay) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('is-active');
            mobileOverlay.classList.toggle('is-open');
            // Prevent background scrolling when open
            document.body.style.overflow = mobileOverlay.classList.contains('is-open') ? 'hidden' : '';
        });

        // Close overlay when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('is-active');
                mobileOverlay.classList.remove('is-open');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Scrollytelling ---
    const scrollElements = document.querySelectorAll('.section-scroll');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        })
    }

    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);
});
