
import React, { Component } from 'react'

export default class Test extends Component {

   render () {
       // on a mapé la presentation quon a passé en props
       // {this.props.nom} ceci ne marche pas , car on ne peut pas passer 
       // un tableau diretement il va faloir le mappé via la fonction map

    return this.props.prenom.map((pres,) =>
   <h1>{pres.nom} {pres.prenom} {pres.age}</h1>
    )
   }
}