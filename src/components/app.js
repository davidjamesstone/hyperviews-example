import view from './app.html.js'
const { Component } = window.preact

export default class App extends Component {
  constructor (props) {
    super(props)
    this.render = view

    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    this.setState({
      count: this.state.count + 1
    })
  }
}
