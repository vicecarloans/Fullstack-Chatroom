import React, { Component } from 'react'
import PropTypes from 'prop-types'
import combineSelectors from 'utils/combineSelectors'
import { connect } from 'react-redux'
import {
     stepSelector, 
     nextStep, 
     prevStep,
     closeRegModal,
     closeRoomModal
    } from 'flux/ducks/realtime'
import {  
    ProgressIndicator, 
    ProgressStep,
    Modal,
    Form,
    FormGroup,
    TextInput,
    Select,
    SelectItem
} from 'carbon-components-react';
export class ProgressModal extends Component {
  static propTypes = {
    prop: PropTypes
  }

  handleCloseRegModal = () => {
    this.props.closeRegModal();
  }

  handleCloseRoomModal = () => {
    this.props.closeRoomModal();
  }

  handleNextStep = () => {
    this.props.nextStep();
  }

  handlePrevStep = () => {
    this.props.prevStep();
  }

  enterRoom = () => {
      console.log("ENTER ROOM");
  }
  
  render() {
    return (
      <div>
        <ProgressIndicator currentIndex={this.props.step.step}>
            <ProgressStep label="Enter Username" description="Step 1: Getting started with Carbon Design System" onClick={this.handleNextStep}/>
            <ProgressStep label="Select Room" description="Step 5: Getting started with Carbon Design System" disabled onClick={this.handleNextStep} />
        </ProgressIndicator>
        {/* Reg Modal */}
        <Modal
            open={this.props.step.openRegModal}
            danger={false}
            shouldSubmitOnEnter={false}
            modalHeading="Register"
            modalAriaLabel=""
            primaryButtonText="Next Step"
            secondaryButtonText="Previous Step"
            iconDescription="Close the modal"
            onRequestClose={this.handleCloseRegModal}
            onRequestSubmit={this.handleNextStep}
            onSecondarySubmit={this.handlePrevStep}
            >
            <Form>
                <FormGroup>
                    <TextInput placeholder="Enter Username" type="text" />
                </FormGroup>
            </Form>
        </Modal>
        {/* Room Modal */}
        <Modal
            open={this.props.step.openRoomModal}
            danger={false}
            shouldSubmitOnEnter={false}
            modalHeading="Enter Room"
            modalAriaLabel=""
            primaryButtonText="Create Room"
            secondaryButtonText="Previous Step"
            iconDescription="Close the modal"
            onRequestClose={this.handleCloseRoomModal}
            onRequestSubmit={this.handleNextStep}
            onSecondarySubmit={this.handlePrevStep}>
            <Form>
                <FormGroup>
                    <Select id="select-1" defaultValue="placeholder-item" onChange={this.enterRoom}>
                    
                        <SelectItem value="option-1" text="Option 1" />
                        <SelectItem value="option-2" text="Option 2" />
                        <SelectItem value="option-3" text="Option 3" />
                    </Select>

                    <TextInput type="text" placeholder="Enter Room Name" />
                </FormGroup>
            </Form>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = combineSelectors({
    step: stepSelector
});

const mapDispatchToProps = {
    nextStep, 
    prevStep,
    closeRegModal,
    closeRoomModal

}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressModal)
