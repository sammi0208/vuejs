/* eslint-disable */
Vue.component('my-component1', {
    template: `
    <div>
      <h3>--component1--</h3>
      <select>
        <option>0</option>
        <option>1</option>
        <option>2</option>
      </select>
    </div>
    `
  });

Vue.component('my-component2', {
    template: `
    <div>
      <h3>--component2--</h3>
    </div>
    `
  });

new Vue({
    el: "#app",
    data: {
      content: 'my-component1'
    }
})