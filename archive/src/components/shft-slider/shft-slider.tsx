import { Component, Prop, State } from "@stencil/core";
import { generateId } from "../common/classes";

@Component({
  tag: "shft-slider",
  shadow: false
})
export class Slider {
  @Prop() disabled: boolean;
  @Prop() class: string;
  @Prop() tickIntervals: number = 0;

  @State() dataListId = generateId("slider");

  private renderDataList() {
    let buffer = [];
    for (let i = 0; i < 100; i += this.tickIntervals) {
      buffer.push(<option value={i} />);
    }
    buffer.push(<option value="100" />);
    return <datalist id={this.dataListId}>{buffer}</datalist>;
  }

  render() {
    return (
      <label>
        {this.tickIntervals > 0 && this.renderDataList()}
        {this.tickIntervals > 0 && (
          <input class="shft" type="range" list={this.dataListId} />
        )}
        {this.tickIntervals <= 0 && <input class="shft" type="range" />}
      </label>
    );
  }
}
