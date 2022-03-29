function playSound(idElementAudio)
{
    const elemento = document.querySelector(idElementAudio);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }

    console.log('Este elemento nao existe');
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let i = 0; i < listaDeTeclas.length; i++){
    
    const tecla = listaDeTeclas[i];
    const instrumento = listaDeTeclas[i].classList[1];
    const idAudio = `#som_${instrumento}`;


    listaDeTeclas[i].onclick = () => { playSound(idAudio) }; 
    console.log(listaDeTeclas)

    tecla.onkeydown = (event) => { 
        event.code == "Tab" ? tecla.classList.remove('ativa') : '';       
    };

    tecla.onkeydown = (event) => {
        event.code == 'Space' ||  event.code == 'Enter'  ? tecla.classList.add('ativa') : '';
    }

    tecla.onkeyup = () => { tecla.classList.remove('ativa'); };

}


