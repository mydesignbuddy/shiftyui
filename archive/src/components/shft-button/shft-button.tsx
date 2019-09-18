import { Component, Prop } from "@stencil/core";
import { Sizes, Variance, Type } from "../common/styles";

@Component({
  tag: "shft-button",
  shadow: false
})
export class Button {
  @Prop() disabled: boolean;
  @Prop() class: string;
  @Prop() size: Sizes;
  @Prop() variance: Variance;
  @Prop() type: Type;

  private applyClasses = (): string => {
    let classes = [this.class];
    classes.push('shft-button');
    if (this.size !== null) {
      classes.push(this.size);
    }
    if (this.variance !== null) {
      classes.push(this.variance);
    }
    if (this.type !== null) {
      classes.push(this.type);
    }
    return classes.join(" ");
  };

  render() {
    return (
      <button class={this.applyClasses()} disabled={this.disabled}>
        <slot />
      </button>
    );
  }
}
