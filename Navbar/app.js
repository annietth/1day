const logomenu = document.querySelector('.logoMenuImg');
const contItems = document.querySelector('.contItems');
const arrItems = document.querySelectorAll('.items');

logomenu.addEventListener('click', () => {

    if(contItems.className === 'contItems'){

        contItems.className += " responsive";
        logomenu.style.width = "35px";
        logomenu.src = 'images/cancel.svg';

    } else {

        contItems.className = "contItems";
        logoMenu.style.width = "30px";
        logoMenu.src = 'images/menu (1).svg';

    }

})

arrItems.forEach(item => {

    item.addEventListener('click', () => {

        contItems.className = "contItems";
        logomenu.src = 'images/menu (1).svg';
        
    })

})