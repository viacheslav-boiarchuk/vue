<template>
    <div id="staggered-list-demo">
      <input v-model="query">
      <transition-group
        name="staggered-fade"
        tag="ul"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <li
          v-for="(item, index) in computedList"
          v-bind:key="item.msg"
          v-bind:data-index="index"
        >{{ item.msg }}</li>
      </transition-group>
    </div>
</template>
<script>
import Velocity from 'velocity-animate';

export default {
   data: () => ({
      query: '',
      list: [
        { msg: 'Брюс Ли' },
        { msg: 'Джеки Чан' },
        { msg: 'Чак Норрис' },
        { msg: 'Джет Ли' },
        { msg: 'Кунг Фьюри' },
      ],
  }),
  computed: {
    computedList() {
      const vm = this;
      return this.list.filter(
        (item) => item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1,
      );
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done },
        );
      }, delay);
    },
    leave(el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done },
        );
      }, delay);
    },
  },
};
</script>
