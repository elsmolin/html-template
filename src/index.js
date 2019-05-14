import { main } from './js/main'
import { inputmask } from "./js/inputmask";
import { tooltip } from "./js/tooltip";
import { select } from "./js/select";
import { popup } from "./js/popup";
import { carousel } from "./js/carousel";
import { form } from "./js/form";
import { header } from "./js/header";

import { demo } from "./js/_demoJS";

import './js/_reusableFuntions'

$(document).ready(function(){
  /* Компоненты */
  inputmask()
  tooltip()
  select()
  popup()
  carousel()
  form()
  header()

  /* Скрипты необходимые только на конкретной странице */
  main()

  /* delete this */
  demo()
})
