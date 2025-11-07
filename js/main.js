// ========================================
// CREATOR Website - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        loadEvolution(),
        loadPublications(),
        loadPromoGallery()
    ]);
    initSmoothScroll();
    initMobileMenu();
});

// ========================================
// Promo Carousel (Screenshots)
// ======================================== 
async function loadPromoGallery() {
    const slides = [
        { src: 'images/promo/editor.png', alt: 'Assembly Code Editor', title: 'Assembly Code Editor' },
        { src: 'images/promo/architecture.png', alt: 'Architecture Visualization', title: 'Architecture Visualization' },
        { src: 'images/promo/registers.png', alt: 'Register Inspector', title: 'Register Inspector' },
        { src: 'images/promo/stack.png', alt: 'Stack View', title: 'Stack Visualization' },
        { src: 'images/promo/hexview.png', alt: 'Memory Hex Editor', title: 'Memory Hex Editor' },
        { src: 'images/promo/terminal.png', alt: 'Integrated Terminal', title: 'Integrated Terminal' },
        { src: 'images/promo/sentinel.png', alt: 'Sentinel', title: 'Sentinel' }
    ];

    const track = document.querySelector('.carousel-track');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const [prevBtn, nextBtn] = document.querySelectorAll('.carousel-nav');

    if (!track || !indicatorsContainer) return;

    let currentSlide = 0;

    // Build slides
    slides.forEach((slide, i) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'w-full flex-shrink-0';
        slideDiv.innerHTML = `
            <div class="rounded-xl overflow-hidden shadow-2xl bg-white/10">
                <img src="${escapeHtml(slide.src)}" 
                     alt="${escapeHtml(slide.alt)}" 
                     loading="${i === 0 ? 'eager' : 'lazy'}"
                     class="w-full h-auto block">
            </div>
            <h3 class="text-center text-lg font-semibold mt-4 text-white">${escapeHtml(slide.title)}</h3>
        `;
        track.appendChild(slideDiv);

        // Build indicator
        const indicator = document.createElement('button');
        indicator.className = `h-2 rounded-full transition-all ${i === 0 ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`;
        indicator.setAttribute('aria-label', `Go to slide ${i + 1}`);
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    });

    function goToSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update indicators
        const indicators = indicatorsContainer.children;
        Array.from(indicators).forEach((ind, i) => {
            ind.className = `h-2 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`;
        });
    }

    // Navigation
    prevBtn?.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn?.addEventListener('click', () => goToSlide(currentSlide + 1));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
        if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    });

    // Touch/swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            goToSlide(currentSlide + (diff > 0 ? 1 : -1));
        }
    }, { passive: true });
}

// ========================================
// Load Evolution Timeline
// ========================================
async function loadEvolution() {
    try {
        const response = await fetch('content/evolution/evolution.json');
        const evolutionData = await response.json();
        
        const timelineContainer = document.getElementById('evolution-timeline');
        
        evolutionData.forEach((item, i) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'grid grid-cols-1 lg:grid-cols-2 gap-6 items-center';
            
            const contentBox = `
                <div class="p-6 bg-white rounded-xl shadow-sm border border-gray-200 ${i % 2 === 1 ? 'lg:order-2' : ''}">
                    <div class="text-2xl font-bold text-blue-600 mb-2">${escapeHtml(item.info[0])}</div>
                    <div class="text-lg text-gray-600 mb-3">${escapeHtml(item.year)}</div>
                    <ul class="space-y-2 text-sm text-gray-700">
                        ${item.info.slice(1).map(info => `<li class="flex gap-2"><span class="text-blue-600 flex-shrink-0">→</span><span>${escapeHtml(info)}</span></li>`).join('')}
                    </ul>
                    ${item.url ? `<a href="${escapeHtml(item.url)}" class="inline-block mt-4 text-blue-600 font-semibold hover:underline text-sm">Try this version →</a>` : ''}
                </div>
            `;
            
            const imageBox = `
                <div class="rounded-xl overflow-hidden shadow-md ${i % 2 === 1 ? 'lg:order-1' : ''}">
                    <img src="${escapeHtml(item.media_src)}" 
                         alt="${escapeHtml(item.media_alt)}" 
                         loading="lazy"
                         class="w-full h-auto object-cover"
                         onerror="this.parentElement.style.display='none'">
                </div>
            `;
            
            timelineItem.innerHTML = contentBox + imageBox;
            timelineContainer.appendChild(timelineItem);
        });
    } catch (error) {
        console.error('Error loading evolution data:', error);
        document.getElementById('evolution-timeline').innerHTML = 
            '<p class="text-center text-gray-600">Unable to load evolution timeline.</p>';
    }
}

// ========================================
// Load Publications
// ========================================
async function loadPublications() {
    try {
        const response = await fetch('content/publications.json');
        const publicationsData = await response.json();
        
        const publicationsContainer = document.getElementById('publications-list');
        
        // Flatten and sort publications by year descending
        const allPublications = publicationsData.flat().sort((a, b) => parseInt(b.year) - parseInt(a.year));
        
        const timelineHTML = `
            <ol class="relative border-s border-gray-200 dark:border-gray-700">
                ${allPublications.map((pub, index) => {
                    const hasImage = pub.media_src?.trim();
                    const hasCitation = pub.cite?.trim();
                    const isLatest = index === 0;
                    
                    return `
                        <li class="mb-10 ms-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <i class="fas fa-file-text text-blue-800 dark:text-blue-300 text-xs"></i>
                            </span>
                            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                ${escapeHtml(pub.title)}
                                ${isLatest ? '<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span>' : ''}
                            </h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                ${escapeHtml(pub.year)} • ${escapeHtml(pub.type)} • ${escapeHtml(pub.publisher)}
                            </time>
                            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Authors: ${pub.authors.map(author => escapeHtml(author)).join(', ')}
                            </p>
                            <div class="flex gap-3 flex-wrap">
                                ${pub.doi ? `
                                    <a href="${escapeHtml(pub.doi)}" 
                                       class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                       target="_blank" rel="noopener">
                                        <i class="fas fa-external-link-alt w-3.5 h-3.5 me-2.5"></i>
                                        View Publication
                                    </a>
                                ` : ''}
                                ${hasCitation ? `
                                    <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                            onclick="toggleCite('${pub.id}')">
                                        <i class="fas fa-book w-3.5 h-3.5 me-2.5"></i>
                                        Cite
                                    </button>
                                ` : ''}
                            </div>
                            ${hasCitation ? `
                                <div class="mt-3 p-3 bg-gray-50 rounded-md font-mono text-xs text-gray-700 overflow-x-auto hidden dark:bg-gray-800 dark:text-gray-300" id="cite-${pub.id}">
                                    <pre class="whitespace-pre-wrap">${escapeHtml(pub.cite)}</pre>
                                </div>
                            ` : ''}
                        </li>
                    `;
                }).join('')}
            </ol>
        `;
        
        publicationsContainer.innerHTML = timelineHTML;
    } catch (error) {
        console.error('Error loading publications:', error);
        document.getElementById('publications-list').innerHTML = 
            '<p class="text-center text-gray-600">Unable to load publications.</p>';
    }
}

// ========================================
// Mobile Menu Toggle
// ========================================
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuButton || !mobileMenu) return;
    
    mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
        
        // Update hamburger icon to X when open
        const icon = mobileMenuButton.querySelector('svg');
        if (icon) {
            if (!isExpanded) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
            }
        }
    });
    
    // Close mobile menu when clicking on a link
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            const icon = mobileMenuButton.querySelector('svg');
            if (icon) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
            }
        }
    });
}

// ========================================
// Helper Functions
// ========================================
function escapeHtml(text) {
    if (!text) return '';
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}

function toggleCite(pubId) {
    document.getElementById(`cite-${pubId}`)?.classList.toggle('hidden');
}

// ========================================
// Smooth Scrolling for Navigation
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 64; // header height
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}
