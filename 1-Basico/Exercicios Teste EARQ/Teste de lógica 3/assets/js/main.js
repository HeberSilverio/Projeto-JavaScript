
function posiciona(){
   let i;
   let j;
   let k;
   let linhas = 10;
   let colunas = 60;
   for(i = 1; i <= linhas; i++){

      if(i == 1 || i == linhas) {
         
         for(j = 0; j < colunas; j++){
            const container = document.querySelector('.container');
            HTMLNovo1 = document.createTextNode('+')
            fragment = new DocumentFragment();
            fragment.appendChild(HTMLNovo1);
            container.insertBefore(fragment, container.firstChild);
         }
         const container = document.querySelector('.container');
         fragment = new DocumentFragment();
         fragment.appendChild(document.createElement('br'));
         container.insertBefore(fragment, container.firstChild);

      }else {
         const containerB = document.querySelector('.container');
         HTMLNovoB = document.createTextNode('+')
         fragment = new DocumentFragment();
         fragment.appendChild(HTMLNovoB);
         containerB.insertBefore(fragment, containerB.firstChild);

         for(k = 1; k < (colunas + 15); k++){
            const container = document.querySelector('.container');
            HTMLNovo1 = document.createTextNode("\u00A0\u00A0");
            fragment = new DocumentFragment();
            fragment.appendChild(HTMLNovo1);
            container.insertBefore(fragment, container.firstChild);
         }
         const container = document.querySelector('.container');
         HTMLNovo1 = document.createTextNode("+")
         fragment = new DocumentFragment();
         fragment.appendChild(document.createElement('br'));
         fragment.appendChild(HTMLNovo1);
         container.insertBefore(fragment, container.firstChild);
      }
   }
}

posiciona();
