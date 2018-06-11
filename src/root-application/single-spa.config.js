import { registerApplication, start } from 'single-spa';

registerApplication('navBar', () => import('../navBar/navBar.app.js'), () => true);
registerApplication('home', () => import('../home/home.app.js'), () => location.pathname === "" || location.pathname === "/");
registerApplication('pokedex', () => import('../../pokedex/pokedex.app.js'), pathPrefix('/pokedex'));
registerApplication('modal_gallery', () => import('../../modal_gallery/gallery.app.js'), pathPrefix('/modal_gallery'));


start();

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}
