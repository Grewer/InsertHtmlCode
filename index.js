const HtmlWebpackPlugin = require('html-webpack-plugin');

class insertHtmlCode {
    constructor(props) {
        this.options = props
    }

    apply(compiler) {
        const condition = this.options.condition
        const code = this.options.code
        compiler.hooks.compilation.tap('insertHtmlCode', (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
                'insertHtmlCode',
                (htmlPluginData, callback) => {
                    htmlPluginData.html = htmlPluginData.html.toString().split(condition)[0] + code + htmlPluginData.html.toString().split(condition)[1]
                    callback(null, htmlPluginData);
                }
            )
        })
    }
}


module.exports = insertHtmlCode;
