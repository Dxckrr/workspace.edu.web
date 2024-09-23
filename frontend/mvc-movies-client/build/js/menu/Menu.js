import MenuController from './controller/MenuController.js';
import MenuModel from './model/MenuModel.js';
import MenuView from './view/MenuView.js';
export default class Menu {
    static create() {
        const model = new MenuModel();
        const view = new MenuView();
        const controller = new MenuController(model, view);
        return controller;
    }
}
