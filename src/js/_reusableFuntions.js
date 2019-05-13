import { isEmptyInputFields } from './form';
import { reInitTooltipCustom } from './tooltip';
import { reInitSelects } from './select';
import { popupMessage } from './popup';
import { reInitInputMask } from './inputmask';


/* Переинициализация */
window.reInitTooltipCustom = reInitTooltipCustom
window.reInitSelects = reInitSelects
window.reInitInputMask = reInitInputMask

/* Глобальные функции */
window.isEmptyInputFields = isEmptyInputFields
window.popupMessage = popupMessage