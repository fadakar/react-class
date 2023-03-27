import React, { Component } from 'react'

import styles from './grid.module.css'

export default class Gird extends Component {
  render() {
    return (
      <div className={styles['grid']}>{this.props.children}</div>
    )
  }
}
