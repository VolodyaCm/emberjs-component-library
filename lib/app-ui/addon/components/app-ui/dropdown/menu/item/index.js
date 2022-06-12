import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AppUiDropdownMenuItemComponent extends Component {
  @tracked
  isSelected = false;

  get argOnClick() {
    return this.args.onClick;
  }

  @action
  toggle() {
    this.isSelected = !this.isSelected;
  }

  @action
  clickHandler() {
    this.toggle();

    if (typeof this.argOnClick === 'function') {
      this.argOnClick();
    }
  }
}
