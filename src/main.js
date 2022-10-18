import "./css/index.css"

// Trabalhando com DOM
const ccBgColor01 = document.querySelector('.cc-bg svg > g g:nth-child(1) path');
const ccBgColor02 = document.querySelector('.cc-bg svg > g g:nth-child(2) path');
const ccLogo = document.querySelector('.cc-logo span:nth-child(2) img');

function setCardType(type) {
    const colors = {
        visa: ['#436D99', '#2D57F2'],
        matercard: ['#DF6F29', '#C69347'],
        default: ['black', 'gray']
    }

    // Seta atributo 'fill'
    ccBgColor01.setAttribute('fill', colors[type][1]);
    ccBgColor02.setAttribute('fill', colors[type][2]);

    // Seta imagem cartao
    ccLogo.setAttribute('src',`cc-${type}.svg`);

}