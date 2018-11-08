import Component from '@ember/component';
import layout from '../templates/components/geo-card';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  classNameBindings: ['bgClass', 'colorClass'],

  background: 'black', // 'fire', 'rainbow', 'stars', 'snow'
  bgClass: computed('background', function() {
    return `bg-${this.get('background')}`;
  }),

  textColor: 'yellow',
  colorClass: computed('textColor', function() {
    return `color-${this.get('textColor')}`;
  }),
});
