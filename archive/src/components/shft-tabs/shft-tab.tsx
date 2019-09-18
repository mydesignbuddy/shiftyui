import { Component, Prop } from "@stencil/core";

@Component({
  tag: "shft-tab",
  shadow: false
})
export class Tabs {
    @Prop() key: string;
  @Prop() disabled: boolean;
  @Prop() class: string;

  render() {
    return (
      <div key={this.key} class="shft shft-tab">
        <slot name="title" />
        <slot />
      </div>
    );
  }
}
