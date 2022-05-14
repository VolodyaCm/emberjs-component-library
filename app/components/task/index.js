import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TaskIndexComponent extends Component {
  constructor(...args) {
    super(...args);

    this.title = this.args.title;
    this.description = this.args.description;
    this.completed = this.args.completed || false;
  }

  @tracked title = '';
  @tracked completed = false;
  @tracked description = '';
  @tracked pinned = false;

  @action
  save() {
    if (typeof this.args.onChange === 'function') {
      this.args.onChange({
        title: this.title,
        completed: this.completed,
        description: this.description,
        pinned: this.pinned,
      });
    }
  }

  @action
  changeTitle(e) {
    this.title = e.target.value;
    this.save();
  }

  @action
  toggleStatus(e) {
    this.completed = e.checked;
    this.save();
  }

  @action
  changeDescription(e) {
    this.description = e.target.value;
    this.save();
  }

  @action
  togglePin() {
    this.pinned = !this.pinned;
    this.save();
  }

  @action
  focus(element) {
    element.focus();
  }
}
