import ItemComponent from 'app-ui/components/app-ui/dropdown/menu/item';
import { action } from '@ember/object';

export default class AppUiDropdownMenuItemButtonComponent extends ItemComponent {
  @action
  handleMouseOver() {
    this.isSelected = true;

    if (typeof this.argOnClick === 'function') {
      this.argOnClick();
    }
  }
}
