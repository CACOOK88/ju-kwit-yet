import React, { Component } from 'react'
import Modal from 'react-responsive-modal'


export default class index extends Component {
  constructor() {
    super();
    this.state = {
      open: false      
    }
    this.myRef = React.createRef()
  }

  onOpenModal = () => {
    this.setState({ open: true })
  };

  onCloseModal = () => {
    this.setState({ open: false })
  };


  render() {
    const { open } = this.state;
    return (
      <div>
        <div ref={this.myRef} />
        <i className="fas fa-chart-pie" onClick={this.onOpenModal}></i>{' '}

        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          container={this.myRef.current}
        >
        {/* MODAL CHART CONTENT GOES HERE */}
        <div className="chartModal">
          
        </div>
        </Modal>
      </div>
    )
  }
}
