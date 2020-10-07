import M from 'materialize-css';

export default {
    install(app, options) {
        console.log(app, options);

        app.config.globalProperties.$message = function (html) {
            M.toast({
                html,
            });
        };

        app.config.globalProperties.$error = function (html) {
            M.toast({
                html: `Error message! ${html}`,
            });
        };
    },
};
