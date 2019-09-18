import { Component, Prop, State, h } from "@stencil/core";
import Fragment from "stencil-fragment";
import { generateId } from "../common/classes";

@Component({
  tag: "shft-textbox",
  shadow: false
})
export class Textbox {
  @Prop() disabled: boolean;
  @Prop() class: string;

  @Prop() multiline: boolean;
  @Prop({
    mutable: true
  })
  value: string;
  @State() labelForId = generateId("textbox");

  render() {
    return (
      <Fragment>
        <label htmlFor={this.labelForId}>
          <slot />
        </label>
        {!this.multiline && (
          <input id={this.labelForId} type="text" value={this.value} />
        )}
        {this.multiline && (
          <textarea id={this.labelForId}>{this.value}</textarea>
        )}
      </Fragment>
    );
  }
}
