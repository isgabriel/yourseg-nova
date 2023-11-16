import { registerApplication, start } from "single-spa";

// registrar os micro frontends
registerApplication({
    name: "@single-spa/welcome",
    app: () =>
        System.import(
            "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
        ),
    activeWhen: (location) => location.pathname === "/",
});

registerApplication({
    name: "@gm/contratar-seguro",
    app: () => System.import("@gm/contratar-seguro"),
    activeWhen: (location) => location.pathname === "/contratar-seguro",
});

registerApplication({
    name: "@gm/aplicacao-yourseg",
    app: () => System.import("@gm/aplicacao-yourseg"),
    activeWhen: ["/aplicacao-yourseg"],
});

registerApplication({
    name: "@gm/header",
    app: () => System.import("@gm/header"),
    activeWhen: ["/"],
});

registerApplication({
    name: "@gm/nossos-seguros",
    app: () => System.import("@gm/nossos-seguros"),
    activeWhen: (location) => location.pathname === "/nossos-seguros",
});

//inicia a montage/desmontagem dos micro frontends
start({
    urlRerouteOnly: true,
});
