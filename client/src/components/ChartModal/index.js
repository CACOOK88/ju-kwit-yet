import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import { VictoryPie, VictoryContainer } from 'victory'
import './ChartModal.css'


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
    const { sortedHabitData } = this.props
    const chartLabels = [ 'true', 'false', 'null']
    const sortedByLabel = chartLabels.map( label => {
      return sortedHabitData.filter( item => {
        return item.success === label
      })
    })
    const checkSuccessExists = sortedByLabel.filter(label => {
      return label.length > 0
    })
    const data = checkSuccessExists.map(item => {
      return { 
        x: `${item[0].success.toUpperCase()}: ${item.length}`, 
        y: item.length}
    })
    return (
      <div className="chartModalContainer">
        <div ref={this.myRef} />
        <i className="fa fa-pie-chart fa-lg pieIcon" onClick={this.onOpenModal}></i>{' '}

        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          container={this.myRef.current}
        >
          <div className="chartModal">
            <h1>{this.props.habit} Statistics</h1>
            <VictoryPie
              data={data}
              animate={{ duration: 2000 }}
              colorScale={["#23DC48", "#FF582B", "#ffc107", "cyan", "navy" ]}
              padAngle={3}
              radius={120}
              innerRadius={50}
              containerComponent={<VictoryContainer responsive={false}/>}
            />
          </div>
        </Modal>
      </div>
    )
  }
}
