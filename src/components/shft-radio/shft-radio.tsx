import { Component, Element, Prop, h } from "@stencil/core";
import { Align, Justify } from "../common/flex";
import { applyClasses } from "../common/classes";

@Component({
  tag: "shft-radio",
  shadow: false
})
export class Checkbox {
  @Element() el: HTMLElement;
  @Prop() disabled: boolean;
  @Prop() checked: boolean;
  @Prop() class: string;
  @Prop() group: string;
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
      <label class={`shft radio ${applyClasses(this)}`}>
        <slot />
        <input type="radio" name={this.group} checked={this.checked} />
        <span class="checkmark" />
      </label>
    );
  }
}
