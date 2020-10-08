import M from 'materialize-css';

export default {
    mounted(el, { value }) {
        M.Tooltip.init(el, { html: value });
    },
    unmounted(el) {
        /**
         * функция нужна чтоб при unmount компонента к котором был тултип - он так же
         * удалялся, а не оставался висеть в DOM
         * */
        const instance = M.Tooltip.getInstance(el);
        if (instance && instance.destroy) {
            instance.destroy();
        }
    },
};
