import React , { Component}from 'react';
import  Test from './components/Test';



 class App extends Component {

  state = {
      
      presentation: [
          {


            nom : "diallo",
            prenom : "mouctar",
            age: 25
          },
          {
          nom : "diallo",
          prenom : "zeinab",
          age: 1

        },

        {
          nom : "diallo",
          prenom : "Rahma,maman",
          age: 30

        }
        ]
      }
    
   rajeunir = () => {
    const newState = this.state.presentation.map((utilisateur) => {
      utilisateur.age = 5;
      return utilisateur.age;
    });
  
  this.setState({
    newState
  });
      
  }
  render() {

    return (
      <div className="App"> 
        
        <Test prenom={this.state.presentation}/>
        <button onClick={this.rajeunir}> RAJEUNIR</button>
      </div>
    );
  }
}
export default App;
  // ici, on a passé la présentation en props à l'enfant Test
  // Le composant parent donc qui a le sate <Test nom={this.state.presentation}/>/




