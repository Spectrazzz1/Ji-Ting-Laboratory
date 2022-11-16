function navigate(path, expression) {
    NProgress.start()
    fetch(path, {
        method: "GET",
        headers: {"is-headless": "true"}
    }).then(r => r.text()).then(page => {
        const routerView = document.querySelector('#router-view');
        routerView.innerHTML = page
        window.Alpine?.initTree(routerView);
        document.title = expression
        window.history.pushState(null, expression, path);
        NProgress.done()
    });
}

document.addEventListener('alpine:init', () => {
    Alpine.directive('route', (el, {expression}) => {
        el.addEventListener("click", function (event) {
            event.preventDefault()
            navigate(el.href, expression)
        }, false);
    })
})
