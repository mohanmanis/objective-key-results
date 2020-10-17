import AppManager from "../stores/AppManager";
import { observable, action } from "mobx";

export default class ObjectiveViewModel {
    private appManager: AppManager;
    @observable activeOkr: any;
    @observable childrenOfActiveOkrs: any[] = [];

    constructor(appManager: AppManager) {
        this.appManager = appManager;
        this.activeOkr = this.allOkrsParents[0];
    }

    get allcategories() {
        return Array.from(this.appManager.getAllCategories());
    }

    get allOkrsParents() {
        return this.appManager.getAllOkrsParent();
    }

    getAllOkrsOfGivenParent(parentId: string) {
        return this.appManager.getAllOkrsOfAParent(parentId)
    }

    @action onParentChange = (okr: any): void => {
        this.activeOkr = okr;
        this.childrenOfActiveOkrs = this.getAllOkrsOfGivenParent(this.activeOkr.id)
    }
}