import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import './modal.css'

export default class CustomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.myRef = React.createRef();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="signup">
        <div ref={this.myRef} />
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Sign Up
        </button>{' '}
        {/* <a
          href="/profile:id"
          target="_blank"
          rel="noopener noreferrer"
        >
          See source code
        </a> */}
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          container={this.myRef.current}
        >
        <form onSubmit={this.handleSubmit}>
          <h4>Sign Up</h4>
          <label className='modalForm'>
            First Name: 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            Last Name: 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <br />
            Username:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            Password:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <br />
            Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />

          </label>
          <br />
          <input type="submit" value="Submit" />
            
        </form>
        </Modal>
      </div>
    );
  }
}

//   import React, { Component } from 'react';
// import Modal from 'react-responsive-modal';
// import './modal.css'

// export default class CustomContainer extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
      
//       this.myRef = React.createRef();
//     }
  
//     handleChange(event) {
//         this.setState({value: event.target.value});
//       }
    
//       handleSubmit(event) {
//         event.preventDefault();
//       }

//     onOpenModal = () => {
//       this.setState({ open: true });
//     };
  
//     onCloseModal = () => {
//       this.setState({ open: false });
//     };
  
//     render() {
//       const { open } = this.state;
//       return (
//         <div className="signup">
//           <div ref={this.myRef} />
//           <button className="btn btn-action" onClick={this.onOpenModal}>
//             Sign Up
//           </button>{' '}
//           {/* <a
//             href="/profile:id"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             See source code
//           </a> */}
//           <Modal
//             open={open}
//             onClose={this.onCloseModal}
//             center
//             container={this.myRef.current}
//           >
//             <form onSubmit={this.handleSubmit}>
            
//             <label className='modalForm'>
//                 First Name:
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 Last Name:
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 Username:
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 Password:
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 Email:
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />

//             </label>

//             <input type="submit" value="Submit" />
              
//             </form>
//           </Modal>
//         </div>
//       );
//     }
//   }
  