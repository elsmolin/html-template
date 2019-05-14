/**
 * Глобальные функции
 */
import { isEmptyInputFields } from './form';
import { reInitTooltipCustom } from './tooltip';
import { reInitSelects } from './select';
import { popupMessage } from './popup';
import { reInitInputMask } from './inputmask';


window.reInitTooltipCustom = reInitTooltipCustom
window.reInitSelects = reInitSelects
window.reInitInputMask = reInitInputMask

window.isEmptyInputFields = isEmptyInputFields
window.popupMessage = popupMessage