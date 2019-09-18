import { Component, Prop, Element, h } from "@stencil/core";
import { Align, Justify } from "../common/flex";
import { applyClasses } from "../common/classes";

@Component({
  tag: "shft-dropdown",
  shadow: false
})
export class Dropdown {
  @Element() el: HTMLElement;
  @Prop() disabled: boolean;
  @Prop() class: string;
  @Prop() flexGrow: number;
  @Prop() flexShrink: number;
  @Prop() alignSelf: Align;
  @Prop() justifySelf: Justify;

  supportedHostClasses = [
    "flex-grow",
    "flex-shrink",
    "align-self",
    "justify-self"
  ];

  render() {
    return (
      <label class={`shft dropdown ${applyClasses(this)}`}>
        <span class="label">
          <slot />
        </span>
        <select disabled={this.disabled}>
          <option>Item 1</option>
          <option>Item 2 asd asd </option>
          <option>Item 2</option>
          <option>Item 2</option>
        </select>
        <span class="button" />
      </label>
    );
  }
}
