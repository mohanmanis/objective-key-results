import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Managers from "../stores/AppManager";
import ObjectiveViewModel from "./ObjectiveViewModel";
import { Filter, FilterCategories, FilterLabel, Wrapper } from "./styles/ObjectivesStyles";
import { Accordion, Card, Container } from "react-bootstrap";


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
                <input type="radio" id={item} name={item} checked={this.viewModel.selectedCategory === item}onChange={() => this.viewModel.onCategoryChange(item)} value={item}/>
                <FilterLabel htmlFor={item}>{item}</FilterLabel><br />
            </div>
        });
    }

    renderAccordian(okr: any, index: number) {
        return (
            <Accordion key={index}>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={okr} onClick={()=>this.viewModel.onParentChange(okr)}> 
                        {okr.title}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={okr}>
                        <Card.Body>
                            {this.viewModel.childrenOfActiveOkrs.map((item) => {
                                return <ul>
                                    <li>{item.title}</li>
                                </ul>
                            })}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
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
                        </FilterCategories>
                    </fieldset>
                </form >
                </Filter >
                <Container>
                    {this.viewModel.allOkrsParents.map((parent, index) => {
                        return this.renderAccordian(parent, index)
                    })}
                </Container>
            </Wrapper>
        );
    }
};