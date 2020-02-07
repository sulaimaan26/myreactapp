import React from 'react';
import './App.css'
import Layout from './component/Layout'
import { BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import Home from './component/Home'
import Landingpage from './component/Landingpage'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      datas:[],
      isAuthenticated:false
    };
  
  }
  
  
  formData=(formdata)=> {
    console.log(formdata);
    this.setState({
      datas:formdata,
      isAuthenticated:false
    })
  }

  

  render() {
    /* if (this.state.isAuthenticated) {
      return <Redirect push to='/home' />;
    } */
    return (
      <Router>
        
        <div>
          
          <Route exact path='/' render={(props) => (
            <React.Fragment>
              <Layout formData={this.formData} />
            </React.Fragment>
          )} />
        </div>

        <Route path='/landingpage' render={(props)=>(
          <Landingpage pagedata={this.state}>

          </Landingpage>
        )}/>      

        <Route path='/home' component={Home}/>      

      </Router>
    );

  }

}

export default App;
