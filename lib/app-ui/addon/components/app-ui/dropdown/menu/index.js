import Component from '@glimmer/component';
import { action } from '@ember/object';

const MENU_POSITIONS = {
  right: 'right-0',
  left: 'left-0',
};

export default class AppUiMenuComponent extends Component {
  get renderInPlace() {
    return this.args.renderInPlace;
  }

  get nested() {
    return this.args.nested;
  }

  get nestedAndRenderInPlace() {
    return this.renderInPlace && this.nested;
  }

  get absoluteAndNotNested() {
    return !this.nestedAndRenderInPlace;
  }

  get positionClassName() {
    return MENU_POSITIONS[this.args.position || 'left'];
  }

  get boxShadowClassName() {
    if (this.nestedAndRenderInPlace) return '';
    return 'shadow-lg ring-1 ring-black ring-opacity-5';
  }

  get borderClassName() {
    if (this.nestedAndRenderInPlace) {
      return 'border-y-2 border-black';
    }
    return '';
  }
}
