'use strict';

// import Horloge from './horloge';

document.addEventListener('click', async () => {
  const {default: Horloge} = await import('./horloge');
  const divElt = document.querySelector('.horloge');
  const clock = new Horloge(divElt);
  clock.start();

});
