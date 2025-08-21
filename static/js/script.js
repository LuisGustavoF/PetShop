// static/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    
    const headerContainer = document.getElementById('header-container');
    const contentContainer = document.getElementById('content-container');
    const footerContainer = document.getElementById('footer-container');

    const siteData = {
        nav: {
            logo: 'Cantinho do Bicho',
            links: [
                { text: 'Home', href: '#' },
                { text: 'Serviços', href: '#servicos' },
                { text: 'Galeria', href: '#galeria'},
                { text: 'Sobre Nós', href: '#sobre-nos' },
                { text: 'Contato', href: '#contato' },
                { 
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.06 1.36.05 2.315.515 2.885 1.085.57.57 1.035 1.525 1.085 2.885.048 1.266.06 1.646.06 4.85s-.012 3.584-.06 4.85c-.05 1.36-.515 2.315-1.085 2.885-.57.57-1.525 1.035-2.885 1.085-1.266.048-1.646.06-4.85.06s-3.584-.012-4.85-.06c-1.36-.05-2.315-.515-2.885-1.085-.57-.57-1.035-1.525-1.085-2.885-.048-1.266-.06-1.646-.06-4.85s.012-3.584.06-4.85c.05-1.36.515 2.315 1.085-2.885.57-.57 1.525-1.035 2.885-1.085 1.266-.048 1.646.06 4.85-.06m0-2.163c-3.259 0-3.667.014-4.947.072-2.18.12-3.613.885-4.645 1.917-1.032 1.032-1.797 2.465-1.917 4.645-.058 1.28-.072 1.688-.072 4.948s.014 3.668.072 4.948c.12 2.18.885 3.613 1.917 4.645 1.032 1.032 2.465 1.797 4.645 1.917 1.28.058 1.688.072 4.948.072s3.668-.014 4.948-.072c2.18-.12 3.613-.885 4.645-1.917 1.032-1.032 1.797-2.465 1.917-4.645.058-1.28.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.12-2.18-.885-3.613-1.917-4.645-1.032-1.032-2.465-1.797-4.645-1.917-1.28-.058-1.688-.072-4.948-.072m0 5.838a4.162 4.162 0 1 1 0 8.324 4.162 4.162 0 0 1 0-8.324m0 1.144a3.018 3.018 0 1 0 0 6.036 3.018 3.018 0 0 0 0-6.036m8.488-1.144a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16"/></svg>`, 
                    href: 'https://www.instagram.com/cantinhodobicho/',
                    target: '_blank'
                }
            ]
        },
        hero: {
            title: 'Os melhores cuidados para o seu melhor amigo',
            image: 'principal.jpg'
        },
        about: {
            title: 'Sobre nós',
            paragraphs: [
                'Com uma década de paixão e dedicação, o Cantinho do Bicho é um pet shop familiar de verdade. Por estarmos localizados em nossa própria casa, criamos um ambiente tranquilo e acolhedor, onde seu pet se sente seguro e relaxado, longe da agitação dos grandes centros comerciais.',
                'Ao longo desses 10 anos, tivemos a alegria de cuidar de incontáveis pets, tratando cada um como se fosse parte da nossa própria família. Para sua maior comodidade, oferecemos o serviço de tele busca, sempre com o compromisso de preços justos e transparentes.',
                'Aqui, seu melhor amigo encontra mais do que um serviço: encontra um lar, com o carinho e a confiança que só um ambiente familiar pode proporcionar.'
            ],
            image: 'cachorro.jpg'
        },
        services: {
            title: 'Todo tratamento que seu pet precisa!',
            items: [
                { name: 'Banho', icon: '<i class="bi bi-shower"></i>' },
                { name: 'Tosa Higiênica', icon: '<i class="bi bi-scissors"></i>' },
                { name: 'Hidratação', icon: '<i class="bi bi-droplet-fill"></i>' },
                { name: 'Tosa na Máquina', icon: '<i class="bi bi-activity"></i>' },
                { name: 'Corte de Unha', icon: '<i class="bi bi-heart-pulse-fill"></i>' },
                { name: 'Tosa na Tesoura', icon: '<i class="bi bi-magic"></i>' },
                { name: 'Escovação Dental', icon: '<i class="bi bi-bandaid-fill"></i>' },
                { name: 'Tosa da Raça', icon: '<i class="bi bi-star-fill"></i>' }
            ]
        },
        howItWorks: {
            title: 'Como funciona?',
            steps: [
                { number: 1, text: 'Faça o agendamento', icon: '<i class="bi bi-whatsapp"></i>' },
                { number: 2, text: 'Especifique as necessidades', icon: '<i class="bi bi-card-checklist"></i>' },
                { number: 3, text: 'Vá até a loja', icon: '<i class="bi bi-house-heart-fill"></i>' },
                { number: 4, text: 'Aguarde no local ou volte depois', icon: '<i class="bi bi-emoji-smile-fill"></i>' }
            ]
        },
        gallery: {
            title: 'Nossos Clientes Felizes',
            images: [
                'foto_reais/maya_dog.png', 'foto_reais/olivia_dog.png', 'foto_reais/fred_cat.png',
                'foto_reais/fred_dog.png', 'foto_reais/teodora_dog.png', 'foto_reais/bidogue_dog.png',
            ]
        },
        contact: {
            title: 'Onde nos encontrar?',
            address_html: `<p>Nossa Pet Shop fica localizada no <strong>Bairro Rio Branco, Canoas</strong>.</p><p>Nosso espaço fica em um ambiente familiar e tranquilo, pensado para o conforto do seu pet. Oferecemos atendimento personalizado e todos os serviços de banho e tosa para garantir o bem-estar e a saúde do seu melhor amigo.</p>`,
            map_iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.764100069477!2d-51.18797422519317!3d-29.95746332724698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197a7a086c7b71%3A0x4825be0220af2430!2sR.%20Santa%20Clara%2C%20861%20-%20Rio%20Branco%2C%20Canoas%20-%20RS%2C%2092200-060!5e0!3m2!1spt-BR!2sbr!4v1755782555072!5m2!1spt-BR!2sbr0" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        whatsappNumber: '5551989256520',
        footer: {
            text: `© ${new Date().getFullYear()} Cantinho do Bicho. Todos os direitos reservados.`
        }
    };

    // --- FUNÇÕES CONSTRUTORAS ---

    function createHeader() {
        const header = document.createElement('header');
        const innerContainer = document.createElement('div');
        innerContainer.className = 'container';
        const logo = document.createElement('div');
        logo.className = 'logo';
        logo.textContent = siteData.nav.logo;
        const nav = document.createElement('nav');
        siteData.nav.links.forEach(linkInfo => {
            const a = document.createElement('a');
            a.href = linkInfo.href;
            if (linkInfo.text) { a.textContent = linkInfo.text; }
            if (linkInfo.icon) { a.innerHTML = linkInfo.icon; }
            if (linkInfo.target) { a.target = linkInfo.target; }
            nav.appendChild(a);
        });
        innerContainer.appendChild(logo);
        innerContainer.appendChild(nav);
        header.appendChild(innerContainer);
        return header;
    }

    function createHeroSection() {
        const section = document.createElement('section');
        section.className = 'hero';
        section.style.backgroundImage = `url('/static/imagens/${siteData.hero.image}')`;
        const title = document.createElement('h1');
        title.textContent = siteData.hero.title;
        section.appendChild(title);
        return section;
    }
    
    function createAboutSection() {
        const section = document.createElement('section');
        section.className = 'content-section container about-section';
        section.id = 'sobre-nos';
        const textDiv = document.createElement('div');
        textDiv.className = 'about-text';
        const title = document.createElement('h2');
        title.textContent = siteData.about.title;
        textDiv.appendChild(title);
        siteData.about.paragraphs.forEach(p_text => {
            const p = document.createElement('p');
            p.textContent = p_text;
            textDiv.appendChild(p);
        });
        const imageDiv = document.createElement('div');
        imageDiv.className = 'about-image';
        const img = document.createElement('img');
        img.src = `static/imagens/${siteData.about.image}`;
        img.alt = 'Cachorro feliz';
        imageDiv.appendChild(img);
        section.appendChild(textDiv);
        section.appendChild(imageDiv);
        return section;
    }
    
    function createServicesSection() {
        const section = document.createElement('section');
        section.className = 'content-section container';
        section.id = 'servicos';
        const mainTitle = document.createElement('h2');
        mainTitle.textContent = siteData.services.title;
        section.appendChild(mainTitle);
        const servicesGrid = document.createElement('div');
        servicesGrid.className = 'services-grid';
        siteData.services.items.forEach(item => {
            const serviceItem = document.createElement('a');
            serviceItem.className = 'service-item';
            const message = `Olá! Gostaria de saber mais sobre o serviço de ${item.name}.`;
            serviceItem.href = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(message)}`;
            serviceItem.target = '_blank';
            serviceItem.innerHTML = `<div class="service-info"><span class="service-icon">${item.icon}</span><span>${item.name}</span></div><span class="plus-icon">+</span>`;
            servicesGrid.appendChild(serviceItem);
        });
        section.appendChild(servicesGrid);
        const howTitle = document.createElement('h2');
        howTitle.className = 'how-it-works-title';
        howTitle.textContent = siteData.howItWorks.title;
        section.appendChild(howTitle);
        const stepsGrid = document.createElement('div');
        stepsGrid.className = 'steps-grid';
        siteData.howItWorks.steps.forEach(step => {
            const stepCard = document.createElement('div');
            stepCard.className = 'step-card';
            stepCard.innerHTML = `<div class="step-icon">${step.icon}</div><p>${step.number}. ${step.text}</p>`;
            stepsGrid.appendChild(stepCard);
        });
        section.appendChild(stepsGrid);
        return section;
    }

    function createGallerySection() {
        const section = document.createElement('section');
        section.className = 'content-section container';
        section.id = 'galeria';
        const title = document.createElement('h2');
        title.textContent = siteData.gallery.title;
        section.appendChild(title);
        const galleryGrid = document.createElement('div');
        galleryGrid.className = 'gallery-grid';
        siteData.gallery.images.forEach(imageFile => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            const img = document.createElement('img');
            img.src = `static/imagens/${imageFile}`;
            img.alt = 'Cliente satisfeito do Cantinho do Bicho';
            img.loading = 'lazy';
            galleryItem.appendChild(img);
            galleryGrid.appendChild(galleryItem);
        });
        section.appendChild(galleryGrid);
        return section;
    }

    function createContactSection() {
        const section = document.createElement('section');
        section.className = 'content-section container contact-section';
        section.id = 'contato';
        const textDiv = document.createElement('div');
        textDiv.className = 'contact-text';
        const title = document.createElement('h3');
        title.textContent = siteData.contact.title;
        textDiv.appendChild(title);
        textDiv.insertAdjacentHTML('beforeend', siteData.contact.address_html);
        const mapDiv = document.createElement('div');
        mapDiv.className = 'contact-map';
        mapDiv.innerHTML = siteData.contact.map_iframe;
        section.appendChild(textDiv);
        section.appendChild(mapDiv);
        return section;
    }

    function createFooter() {
        const footer = document.createElement('footer');
        const innerContainer = document.createElement('div');
        innerContainer.className = 'container';
        const footerText = document.createElement('p');
        footerText.textContent = siteData.footer.text;
        innerContainer.appendChild(footerText);
        footer.appendChild(innerContainer);
        return footer;
    }

    function createWhatsAppButton() {
        const a = document.createElement('a');
        a.href = `https://wa.me/${siteData.whatsappNumber}?text=Olá! Gostaria de agendar um horário.`;
        a.target = '_blank';
        a.className = 'whatsapp-float';
        a.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 221.9-99.6 221.9-222 .1-59.3-23.1-115-65.7-156.8zM223.9 439.6c-33.8 0-66.3-13.1-90.4-37.1l-6.5-6.5-67.2 17.6 17.9-65.8-7.2-6.9c-24.1-23.5-38.5-55.7-38.5-90.1 0-108.6 88.4-197 197-197s197 88.4 197 197-88.4 197-197 197zm108.9-148.2c-6.9-3.4-41.1-20.4-47.5-22.7-6.4-2.4-11-3.4-15.7 3.4-4.6 6.9-18 22.7-22.1 27.2-4.1 4.6-8.2 5.1-15 1.7-6.9-3.4-28.9-10.8-55.1-34-20.3-18.2-34-40.6-38.1-47.5-4.1-6.9-.4-10.7 3.1-14.1 3.1-3.1 6.9-8.2 10.3-12.2 3.4-4.1 4.6-6.9 6.9-11.5 2.4-4.6 1.2-8.7-1.2-12.2-2.4-3.4-15.7-37.7-21.5-51.6-5.8-13.8-11.6-11.9-15.7-11.9s-8.7- .4-13.3- .4c-4.6 0-11.9 1.7-18 6.9-6.1 5.1-23.5 23-23.5 55.7 0 32.7 24.1 64.6 27.5 69.1 3.4 4.6 47.1 75.1 114.8 101.9 16.5 6.4 29.5 10.3 39.6 13.3 10.1 3.1 19.1 2.1 26.2-1.2 7.8-3.9 24.1-13.8 27.5-27.2 3.4-13.3 3.4-24.7 2.4-27.2-1.1-2.5-4.2-4-7.2-5.5z"/></svg>`;
        return a;
    }


    // --- MONTAGEM DA PÁGINA ---
    headerContainer.innerHTML = '';
    contentContainer.innerHTML = '';
    footerContainer.innerHTML = '';
    
    headerContainer.appendChild(createHeader());
    contentContainer.appendChild(createHeroSection());
    contentContainer.appendChild(createServicesSection());
    contentContainer.appendChild(createGallerySection());
    contentContainer.appendChild(createAboutSection());
    contentContainer.appendChild(createContactSection());
    footerContainer.appendChild(createFooter());
    document.body.appendChild(createWhatsAppButton());
    
    verificarVisibilidade();
});

// --- LÓGICA DAS ANIMAÇÕES ---
function verificarVisibilidade() {
    const sections = document.querySelectorAll('.content-section, .whatsapp-float');
    
    sections.forEach(section => {
        const boundingBox = section.getBoundingClientRect();
        if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
            section.classList.add('aparecer');
        }
    });
}
window.addEventListener('scroll', verificarVisibilidade);
window.addEventListener('resize', verificarVisibilidade);