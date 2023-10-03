import {
  Accordion
} from '../functions/accordion';

const answersAccordions = document.querySelector('.answers__accordions');

if (answersAccordions) {
  const accordionAnswers1 = new Accordion('.accordion--1', {
    speed: 500,
    parent: answersAccordions,
    isControlEnabled: false,
  });
}
