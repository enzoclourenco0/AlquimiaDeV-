const sections = document.querySelectorAll('.content-section');
const body = document.body;
const product = document.getElementById('main-product');
const d1 = document.getElementById('decor-top-left');
const d2 = document.getElementById('decor-bottom-right');
const d3 = document.getElementById('decor-mid-right');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const card = entry.target.querySelector('.info-card');
        
        if (entry.isIntersecting) {
            card.classList.add('active');
            
            const id = entry.target.id;
            
            // Lógica para mudar o tema do body
            if (id === 'section-geleia') {
                body.className = 'theme-geleia'; // Adiciona classe para tema geleia (amarelo)
            } else if (id === 'section-pimenta') {
                body.className = 'theme-pimenta'; // Adiciona classe para tema pimenta (vermelho)
            } else {
                body.className = 'theme-default'; // Volta para o tema padrão
            }

            // Movimentos sincronizados entre pote e elementos decorativos
            if (id === 'section-geleia') {
                product.style.transform = 'scale(1.1) translateX(140px) rotate(-8deg)';
                d1.style.opacity = "1";
                d2.style.opacity = "0.6"; // Menos foco
                d3.style.opacity = "0.6"; // Menos foco
            } else if (id === 'section-pimenta') {
                product.style.transform = 'scale(1.4) translateX(-180px) rotate(12deg)';
                d1.style.opacity = "0.6";
                d2.style.opacity = "1"; // Mais foco
                d3.style.opacity = "0.6";
            } else if (id === 'section-final') {
                product.style.transform = 'scale(0.9) translateY(100px)';
                product.style.opacity = '0.7'; // Produto fica mais discreto na CTA
                d1.style.opacity = "0.1"; 
                d2.style.opacity = "0.1"; 
                d3.style.opacity = "0.1";
            } else { // Para a seção inicial ou outras
                product.style.transform = 'scale(1) translateX(0) rotate(0deg)';
                product.style.opacity = '1';
                d1.style.opacity = "0.6"; 
                d2.style.opacity = "0.6"; 
                d3.style.opacity = "0.6";
            }
        } else {
            card.classList.remove('active');
        }
    });
}, { threshold: 0.45 }); // Aumentei o threshold para a mudança de tema ser mais suave

sections.forEach(s => observer.observe(s));