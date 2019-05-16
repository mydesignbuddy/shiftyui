import { Component, Prop } from "@stencil/core";

@Component({
  tag: "shft-checkbox",
  shadow: false
})
export class Checkbox {
  @Prop() disabled: boolean;
  @Prop() checked: boolean;
  @Prop() class: string;

  render() {
    return (
      <label class={"shft checkbox " + this.class}>
        <slot />
        <input
          type="checkbox"
          checked={this.checked}
          disabled={this.disabled}
        />
        <span class="checkmark" />
      </label>
    );
  }
}
