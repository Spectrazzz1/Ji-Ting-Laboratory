window.onload = new function () {
    setTheme(getMediaPreference())
};

function getMediaPreference() {
    const activeTheme = localStorage.getItem("user-theme")
    if (activeTheme) {
        return activeTheme;
    }
    const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (hasDarkPreference) {
        return "dark";
    } else {
        return "light";
    }
}

function setTheme(theme) {
    localStorage.setItem("user-theme", theme);
    if ("dark" === theme) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        document.getElementById("theme-toggle-svg-dark").classList.add("hidden");
        document.getElementById("theme-toggle-svg-light").classList.remove("hidden");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        document.getElementById("theme-toggle-svg-dark").classList.remove("hidden");
        document.getElementById("theme-toggle-svg-light").classList.add("hidden");
    }
}

function toggleTheme() {
    NProgress.start();
    const activeTheme = localStorage.getItem("user-theme");
    if (activeTheme === "light") {
        this.setTheme("dark");
    } else {
        this.setTheme("light");
    }
    NProgress.done();
}

function switchLanguage(current, locales, code) {
    if (current === code) {
        return;
    }

    let paths = window.location.pathname.split('/');
    if (code === paths[1]) {
        return;
    } else if (locales.hasOwnProperty(paths[1])) {
        paths[1] = code;
    } else {
        paths[0] = code;
        paths.unshift('');
    }

    window.history.replaceState(null, "", paths.join('/'));

    location.reload();
}
