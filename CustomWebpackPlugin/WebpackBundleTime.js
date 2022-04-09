 class WebpackBundleTime {

    apply(compiler) {
        compiler.hooks.done.tap("BundleTime", stats => {
            console.log(`🚀 start Time =================>`,  new Date().toLocaleString());
        })

    }
}

module.exports = WebpackBundleTime;
