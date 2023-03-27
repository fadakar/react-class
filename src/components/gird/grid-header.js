import React, { Component } from "react";
import GirdRow from "./gird-row";
import GridColumn from "./grid-column";
import styles from "./grid.module.css";

export default class GridHeader extends Component {
  render() {
    return (
      <div className={styles['grid-header']}>
        <GirdRow>
          {this.props.columns.map((column, idx) => (
            <GridColumn key={idx} width={column.width} label={column.label} />
          ))}
        </GirdRow>
      </div>
    );
  }
}
