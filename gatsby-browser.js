
exports.onClientEntry = () => {
    console.log("onClientEntry")
}

exports.onInitialClientRender = () => {
    window.onbeforeunload = function() {
        document.cookie = "nf_ab=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    }
}

