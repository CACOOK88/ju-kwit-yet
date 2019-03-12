import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios'
import './modal.css'

const validate = (firstName, lastName, userName, password, email) => { 
  return {
    firstName: firstName.length === 0,
    lastName: lastName.length === 0,
    userName: userName.length === 0,
    password: password.length < 6,
    email: email.length === 0    
  };
}

export default class SignUpModal extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      email: '',
      message: 'Please complete all fields',
     
      touched: {
        firstName: false,
        lastName: false,
        userName: false,
        password: false,
        email: false,        
    }
  }
    this.myRef = React.createRef();
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }
  // changed field here to false-->was originally true, fixed red box issue?
  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, userName, email, password } = this.state
    axios.post('/api/users', {userName})
      .then((res) => {
        // if user does not already exist
        if ( !res.data ) {
          axios.post('/api/users/register', {firstName, lastName, userName, email, password})
            .then(res => {
              console.log(`created new user`)
              this.onCloseModal()
            })
            .catch(err => {
              if (err) throw err
            })
        } else {
          this.setState({message: 'Username already exists, Please log in or choose new Username'})
        }
      })
  }

  canBeSubmitted = () => {
    const errors = validate(this.state.firstName, this.state.lastName, this.state.userName, this.state.password, this.state.email);
    const isDisabled = !Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const { open } = this.state;
    const errors = validate(this.state.firstName, this.state.lastName, this.state.userName, this.state.password, this.state.email);
    const isDisabled = !Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    return (
      <div className="signup">
        <div ref={this.myRef} />
        <button onClick={this.onOpenModal}>
          Sign Up
        </button>{' '}
        
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          container={this.myRef.current}
        >
          <form onSubmit={this.handleSubmit}>
            <h4>Sign Up</h4>
            <p className="fieldMessage">{this.state.message}</p>
            <label className='modalForm'>
              <p className="firstName">First Name: </p>
              <input 
                className={shouldMarkError('firstName') ? 'error' : ''} 
                type='text' value={this.state.value} 
                placeholder='First Name'
                onChange={this.onChange} 
                onBlur={this.handleBlur('firstName')}
                name='firstName' 
              />
              <p className="lastName">Last Name: </p>
              <input 
                className={shouldMarkError('lastName') ? 'error' : ''} 
                type='text' value={this.state.value}
                placeholder='Last Name' 
                onChange={this.onChange} 
                onBlur={this.handleBlur('lastName')}
                name='lastName' 
              />
              <br />
              <p className="userName">User Name:</p>
              <input 
                className={shouldMarkError('userName') ? 'error' : ''} 
                type='text' value={this.state.value} 
                placeholder='User Name'
                onChange={this.onChange} 
                onBlur={this.handleBlur('userName')}
                name='userName' 
                />
              <p className="password">Password:</p>
              <input 
                className={shouldMarkError('password') ? 'error' : ''} 
                type='password' value={this.state.value} 
                placeholder='Password'
                onChange={this.onChange} 
                onBlur={this.handleBlur('password')}
                name='password' 
              />
              <br />
              <p className="email">Email:</p>
              <input 
                className={`emailInput ${shouldMarkError('email') ? 'error' : ''}`} 
                type='text' value={this.state.value} 
                placeholder='Email'
                onChange={this.onChange} 
                onBlur={this.handleBlur('email')}
                name='email' 
              />

            </label>
            <br />          
            <button disabled={!isDisabled} type='submit' value='Submit' >Sign Up</button>
              
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
//         <div className='signup">
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
  