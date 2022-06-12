import { helper } from '@ember/component/helper';
import cn from 'classnames';

export default helper(function classnames(params = [], hash = {}) {
  return cn(...params, { ...hash });
});
