
let slideIndex = 1; // declara e inicializa a variável 'slideIndex' com o valor 1

showSlides(slideIndex); // chama a função 'showSlides' com 'slideIndex' como argumento para exibir o primeiro slide quando a página for carregada.

function plusSlides(n) { // define uma função 'plusSlides' que recebe um parâmetro 'n', indicando quantos slides devem ser avançados ou retrocedidos
    showSlides(slideIndex += n); // atualiza 'slideIndex' adicionando n ao seu valor atual e chama 'showSlides' para atualizar a exibição dos slides.
}

function currentSlide(n) { // define uma função 'currentSlide' que recebe um parâmetro 'n', indicando qual slide específico deve ser exibido quando um ponto de navegação é clicado
    showSlides(slideIndex = n); // define diretamente 'slideIndex' como 'n' e chama 'showSlides' para atualizar a exibição dos slides
}

function showSlides(n) { // define a função principal 'showSlides' que controla a exibição dos slides com base no índice 'n' recebido como argumento
    let i; // declara uma variável 'i' que será usada como contador nos loops
    let slides = document.getElementsByClassName("mySlides"); // seleciona todos os elementos HTML que têm a classe 'mySlides' e os armazena em um array na variável 'slides', esses elementos são os slides do carrossel.
    let pontos = document.getElementsByClassName("ponto"); // seleciona todos os elementos HTML que têm a classe 'ponto' e os armazena em um array na variável 'pontos', esses elementos são os pontos de navegação que correspondem aos slides

    if (n > slides.length) { // verifica se o valor 'n' (índice do slide) é maior que o número total de 'slides' (slides.length)

        slideIndex = 1  // se for, define 'slideIndex' como 1 para voltar ao primeiro slide
    }
    
    if (n < 1) {  // verifica se o valor n é menor que 1
        slideIndex = slides.length  // se for, define 'slideIndex' como o número total de slides (slides.length) para ir ao último slide

    }
    
    for (i = 0; i < slides.length; i++) {  // loop que percorre todos os slides (slides)  
        slides[i].style.display = "none"; // define o estilo display de cada um como "none" para ocultá-los da visualização
    }
    
    for (i = 0; i < pontos.length; i++) { // loop que percorre todos os pontos de navegação (ponto) 
        pontos[i].className = pontos[i].className.replace(" active", ""); // remove a classe "active" de cada um, para indicar que nenhum ponto está selecionado
    
    } 

    slides[slideIndex - 1].style.display = "block"; // define o estilo display do slide atual indexado por 'slideIndex - 1' para ajustar à indexação de array como "block" para mostrá-lo na tela
    
    pontos[slideIndex - 1].className += " active"; // adiciona a classe "active" ao ponto de navegação correspondente ao slide atual, indicando visualmente qual slide está sendo exibido
}

// Explicação da lógica do javascript. 
// Neste caso ela está centrada em gerenciar a exibição de slides em um carrossel de imagens e sincronizar os pontos de navegação com a visualização dos slides. De início, a variável 'slideIndex' é definida como 1, indicando que o primeiro slide deve ser exibido quando a página carrega. A função 'showSlides' é então chamada com 'slideIndex' como argumento, exibindo o slide correspondente e atualizando a classe dos pontos de navegação. A função 'plusSlides' permite navegar pelos slides incrementando ou decrementando o valor de 'slideIndex' e chamando 'showSlides' para atualizar a exibição. A função 'currentSlide' permite a seleção direta de um slide específico quando um ponto de navegação é clicado, definindo 'slideIndex' para o índice do slide desejado e atualizando a exibição. A função 'showSlides' controla a lógica principal de exibição: ela oculta todos os slides e remove a classe 'active' de todos os pontos de navegação, após isso, ela exibe o slide atual e adiciona a classe 'active' ao ponto de navegação correspondente. Esse conjunto de funções interage com eventos de clique nos botões de navegação e nos pontos para proporcionar uma experiência de slideshow interativa e sincronizada visualmente.
