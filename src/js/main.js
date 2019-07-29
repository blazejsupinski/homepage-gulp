const tesc = document.querySelector('.section__six--js');
tesc.innerHTML = "Java Script != Java";


function nazwaFunkcji (imie, wiek){
    console.log(`Witaj ${imie} lat ${wiek}`)

}

nazwaFunkcji('blazj',37);

const pstryczek = document.querySelector('.button__hamburger');
pstryczek.addEventListener('click', (e) => {
    const nawigacja = document.querySelector('.ulList');
    nawigacja.classList.toggle('visible')
})