import Component from '@ember/component';

export default Component.extend({
  classNames: ['listFilter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('results', results));
  },
  active: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = thi.get('filter');
      filterActoin(filterInputValue).then((filterResults) => this.set('results', filterResults));
    }
  }
});
