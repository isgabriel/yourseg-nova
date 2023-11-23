import { registerApplication, start } from "single-spa";

// registrar os micro frontends
fetch("https://run.mocky.io/v3/4b6e38e4-4608-4ced-b0a6-4f00a3d728d6")
    .then((res) => res.json())
    .then((data) => {
        data.applications.forEach((app) => {
            registerApplication({
                name: app.name,
                app: () => System.import(app.package),
                activeWhen: app.exact
                    ? (location) => location.pathname === app.activeWhen
                    : [app.activeWhen],
            });
        });
    })
    .finally(() => {
        //inicia a montage/desmontagem dos micro frontends
        start({
            urlRerouteOnly: true,
        });
    });
