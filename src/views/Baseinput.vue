<template>
    <label>
      {{ label }}
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
      <input v-bind="$attrs">
    </label>
    <slot />
    <br>
    <br>
    <slot name="footer" v-bind:param="param">
      {{ param.second }}
    </slot>
    <slot name="header"></slot>
    <ul v-rand>
      <li><a href="#" target="_blank" rel="noopener">vue-r</a></li>
      <li><a href="#" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="#" target="_blank" rel="noopener">vue-dev</a></li>
      <li><a href="#" target="_blank" rel="noopener">vue-loa</a></li>
      <li><a href="#" target="_blank" rel="noopener">awesome</a></li>
    </ul>
</template>
<script>
   /**
     * в Home.vue мы вызываем этот компонент, прокидывая в него данные. С помощью inheritAttrs:
     * false и $attrs (мы поставили его на второй инпут) мы можем вручную определять
     * какому элементу должны применяться атрибуты
     * именованный слот slot name="footer" рендерит {{ param.second }} только когда ты в
     * родительском компоненте не указал template v-slot:footer. если же ты его указал -
     * будет рендериться то что внутри этого самого темплейта
     *  */
export default {
   data: () => ({
        param: {
            second: '2',
            first: '1',
        },
    }),
    directives: {
      focus: {
        // directive definition
        mounted(el) {
          console.log(324);
          el.focus();
        },
      },
      rand: {
        // directive definition
        bind(el) {
          el.style.color = '#' + Math.random().toString().slice(2, 8);
        },
      },
    },
    inheritAttrs: false,
    props: ['label', 'value'],
};
</script>

<style scoped>
  h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
font-size: 25px;
}
a {
color: #42b983;
}
input {
font-size: 18px;
width: 20%;
padding: 10px 18px;
margin: 8px 0;
box-sizing: border-box;
}
</style>
