import React, { Component } from 'react'
import store from '@/store'
import './Header.less'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    let { left = '', middle = '', right = '' } = this.props.data
    return (
      <div className={'app-header'} component={'header-component'}>
        <ul>
          {/* {React.Children.map(this.props.children, (item, index) => item)} */}
          <li>{left}</li>
          <li className={'title'}>{middle}</li>
          <li>{right}</li>
        </ul>
      </div>
    )
  }
}
export default Header
