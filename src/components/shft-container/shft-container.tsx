import { Component, Prop } from "@stencil/core";

@Component({
  tag: "shft-container",
  shadow: false
})
export class Container {
  @Prop() class: string;

  render() {
    return (
      <div class={`shft container ${this.class}`}>
        <slot />
      </div>
    );
  }
}
