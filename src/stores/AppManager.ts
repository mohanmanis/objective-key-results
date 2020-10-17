
import AppService from "./services/AppService";
import { observable, action } from "mobx"


export default class AppManager {
    @observable okrsResults: Array<any> = [];

    constructor() {
        this.setOkrsResults();
        //@ts-ignore
        window["manager"] = this;
    }

    setOkrsResults = (): void => {
        AppService.fetchAllOkrs().then(action((result: any) => {
            this.okrsResults = result.data;
        }))
    }

    getAllOkrsParent = (): any[] => {
        return this.okrsResults.filter((okrs: any) => okrs.parent_objective_id === "" || okrs.parent_objective_id == null);
    }

    getAllOkrsOfAParent = (parent_objective_id: string): any[] => {
        return this.okrsResults.filter((okr: any) => okr.parent_objective_id === parent_objective_id);
    }

    getAllCategories = (): Set<string> => {
        const categories = new Set<string>();
        this.okrsResults.forEach((okrs: any) => {
            categories.add(okrs.category);
        });
        return categories;
    }

    filteParentByCategory = (category: string) => {
        return this.getAllOkrsParent().filter(okrs => {
            return okrs.category === category;
        });
    }
}