export function clearBtnColor() {
    let catFactsBtn = document.getElementById('catFactsBtn');

    catFactsBtn.addEventListener('click', function() {
        setTimeout(() => {
            catFactsBtn.style.color = '';
            catFactsBtn.style.backgroundColor = '';
        }, 400)
        
    })
}