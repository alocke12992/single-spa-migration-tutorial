import { registerApplication, start } from 'single-spa';

registerApplication('navBar', () => import('./navBar/navBar.app.js'), () => true);
registerApplication('home', () => import('./home/home.app.js'), () => location.pathname === "" || location.pathname === "/");
registerApplication('pokedex', () => import('./pokedex/pokedex.app.js'), pathPrefix('/pokedex'));
registerApplication('huge_apps', () => import('./huge_apps/huge_apps.app.js'), pathPrefix('/huge_apps'));


start();

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}
