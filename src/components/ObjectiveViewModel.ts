import AppManager from "../stores/AppManager";

export default class ObjectiveViewModel {
    private appManager: AppManager;

    constructor(appManager: AppManager) {
        this.appManager = appManager;
    }

    get allcategories() {
        return Array.from(this.appManager.getAllCategories());
    }

    get allOkrsParents() {
        return this.appManager.getAllOkrsParent();
    }
}