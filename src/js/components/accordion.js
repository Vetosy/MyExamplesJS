import {
  Accordion
} from '../functions/accordion';

const Accordions = document.querySelector('.accordion');

if (Accordions) {
  const accordion1 = new Accordion('.accordion__item--1', {
    speed: 500,
    parent: Accordions,
    isControlEnabled: false,
  });
}
