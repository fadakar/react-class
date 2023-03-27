import React, { Component } from "react";
import GirdRow from "./gird-row";
import GridColumn from "./grid-column";
import styles from "./grid.module.css";

export default class GridBody extends Component {
  render() {
    console.log(this.props.dataList);
    return (
      <div className={styles["grid-body"]}>
        {this.props.dataList.map((data) => (
          <GirdRow
            key={data.id}
            striped={this.props.striped}
            hover={this.props.hover}
          >
            {this.props.columns.map((column, idx) => (
              <GridColumn
                key={idx}
                width={column.width}
                label={data[column.fieldValue]}
              />
            ))}
          </GirdRow>
        ))}
      </div>
    );
  }
}
