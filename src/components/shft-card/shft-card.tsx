import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "shft-card",
  shadow: false
})
export class Card {
  @Prop() class: string;
  render() {
    return (
      <section class={"shft shft-card " + this.class}>
        <slot />
      </section>
    );
  }
}
