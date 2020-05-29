import React from 'react'

import './styles/Badges.css'

import { Link } from 'react-router-dom'

import confLogo from '../images/badge-header.svg'
import BadgesList from './BadgesList'

//Quite el NavBar del render porque lo voy a incluir aca desde el LayOut en App.js.

class Badges extends React.Component {

    constructor(props) {
      super(props)
      // Inicializamos el constructor y su/s super clase/s.
      console.log('1.Constructor')
      // Lo recomendado es inicializar los valores por default en el constructor, como hacemos aca abajo con state.
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      console.log('3.componentDidMount()')
      //Aca abajo simulamos una peticion a una API que tarda 3 segs en hacerse.
      this.timeOutId = setTimeout(() => {
        this.setState({data: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Joaquin',
            lastName: 'Fontela',
            email: 'joaquinfontela@gmail.com',
            jobTitle: 'CEO',
            twitter: 'joaquinfontela',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Maximiliano',
            lastName: 'Sancari',
            email: 'maxisancari12@hotmail.com',
            jobTitle: 'Frontend Developer',
            twitter: 'maxosancari',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Lucas',
            lastName: 'Abalos',
            email: 'lucasabalos@hotmail.com',
            jobTitle: 'Backend Engineer',
            twitter: 'lucasab',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
        ]})
      } ,3000)
    }

    componentDidUpdate(prevProps, prevState) {
      console.log('5. componentDidUpdate()')
      
      // Aca abajo imprimiremos los props y el state previo al Update.
      console.log({
        prevProps: prevProps,
        prevState: prevState
      })

      // Y aca luego del update.
      console.log({
        props: this.props,
        state: this.state
      })

      //En este caso props no cambiara, pero si state, ya que modificamos this.state.data en componentDidMount.
    }

    componentWillUnmount() {
      console.log('6. componentWillUnmount()')
      //Podemos ejecutar esto yendonos a otra pagina: ya que el componente se desmontara.
      clearTimeout(this.timeOutId)
      // Evitamos que se ejecute la funcion del timeout despues del desmontaje del objeto.
    }
  
    render() {
      console.log('2.Render')
      return (
        <React.Fragment>
          <div className="Badges">
            <div className="Badges__hero">
              <div className="Badges__container">
                <img
                  className="Badges_conf-logo"
                  src={confLogo}
                  alt="Conf Logo"
                />
              </div>
            </div>
          </div>
  
          <div className="Badges__container">
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary">
                New Badge
              </Link>
            </div>
  
            <BadgesList badges={this.state.data} />
          </div>
        </React.Fragment>
      );
    }
  }
  
  export default Badges;