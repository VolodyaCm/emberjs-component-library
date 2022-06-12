import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
// import styles from './styles';

// console.log('styles', styles);

/**
  A AppUiDropdownComponent component. Usage:

  @class AppUiDropdownComponent
  @yield {Hash} hash
  @yield {component} hash.Button
  @yield {component} hash.Trigger
  @yield {component} hash.Menu
  @yield {component} hash.Dropdown
 */
export default class AppUiDropdownComponent extends Component {
  /**
    @tracked showMenu
    @type {boolean}
   */
  @tracked showMenu = false;

  constructor(...args) {
    super(...args);
    if ('showMenu' in this.args) {
      this.showMenu = this.args.showMenu;
    }
  }

  /**
    @argument renderInPlace
    @type {boolean}
   */
  renderInPlace = false;

  /**
    @function toggleDropdown
   */
  @action
  toggleDropdown() {
    this.showMenu = !this.showMenu;
    console.log(this.showMenu);
  }
}
