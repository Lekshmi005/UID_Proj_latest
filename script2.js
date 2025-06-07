const menus = document.querySelector('nav ul');
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');


menuBtn.addEventListener('click', ()=>{
    menus.classList.add("display");
    /*gpt*/
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    /*gpt*/
})

closeBtn.addEventListener('click', ()=>{
    menus.classList.remove("display");
    /*gpt*/
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';
    /**/ 
})

window.addEventListener("scroll",()=>{
    if (document.documentElement.scrollTop > 20){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
});

//static numbers
const countersEl = document.querySelectorAll('.numbers');
countersEl.forEach((counters)=>{
    counters.textContent = 0;

    increamentCounters();

    function increamentCounters(){
        let currentNum = +counters.textContent;
        const dataCeil = counters.getAttribute("data-ceil");

        const increament = dataCeil / 25;

        currentNum = Math.ceil(currentNum + increament);

        if(currentNum<dataCeil){
            counters.textContent = currentNum;
            setTimeout(increamentCounters,10)
        } else{
            counters.textContent = dataCeil;
        }
    }
})