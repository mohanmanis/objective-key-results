import AppManager from "../stores/AppManager";
import { observable, action, computed } from "mobx";

export default class ObjectiveViewModel {
    private appManager: AppManager;
    @observable activeOkr: any;
    @observable childrenOfActiveOkrs: any[] = [];
    @observable selectedCategory: any = null;

    constructor(appManager: AppManager) {
        this.appManager = appManager;
        this.activeOkr = this.allOkrsParents[0];
    }

    get allcategories() {
        return Array.from(this.appManager.getAllCategories());
    }

    @computed get allOkrsParents() {
        if (this.selectedCategory) {
            return this.appManager.filteParentByCategory(this.selectedCategory)
        } else {
            return this.appManager.allOkrsParent;
        }

    }

    getAllOkrsOfGivenParent(parentId: string) {
        return this.appManager.getAllOkrsOfAParent(parentId)
    }

    @action onParentChange = (okr: any): void => {
        this.activeOkr = okr;
        this.childrenOfActiveOkrs = this.getAllOkrsOfGivenParent(this.activeOkr.id)
    }

    @action onCategoryChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newCategory = event.target.name;
        if (newCategory !== this.selectedCategory) {
            this.selectedCategory = newCategory;
        } else {
            this.selectedCategory = null;
            event.target.checked = false;
        }

    }

    @action uncheck = (category: string): void => {
        if (category === this.selectedCategory) {
            this.selectedCategory = null;
        } 
    }
}