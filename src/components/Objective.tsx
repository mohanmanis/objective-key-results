import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Managers from "../stores/AppManager";
import ObjectiveViewModel from "./ObjectiveViewModel";
import { Filter, FilterCategories, FilterLabel, Wrapper } from "./styles/ObjectivesStyles";
import { Accordion, Button, Container } from "react-bootstrap";


interface Props {
    managers: Managers,
}

@observer
export default class Objective extends Component<Props, {}> {
    private viewModel: ObjectiveViewModel;


    constructor(props: Props) {
        super(props);
        this.viewModel = new ObjectiveViewModel(this.props.managers);
    }

    renderAllCategories() {
        return this.viewModel.allcategories.map((item, n) => {
            return <div key={n}>
                <input type="radio" id={item} name={item} />
                <FilterLabel htmlFor={item}>{item}</FilterLabel><br />
            </div>
        });
    }

    renderAccordian() {
        return this.viewModel.allOkrsParents.map((item, n) => {
            return <Accordion.Toggle key={n} eventKey={n.toString()}>{item}</Accordion.Toggle>
        })
    }



    render() {
        return (
          <Wrapper>
            <Filter>
                <form>
                    <fieldset>
                        <legend>Filter by Category</legend>
                        <FilterCategories>
                                {this.viewModel.allcategories && this.renderAllCategories()}
                                {/* {this.renderAccordian()} */}
                        </FilterCategories>
                    </fieldset>
                </form >
                </Filter >
            </Wrapper>
        );
    }
};