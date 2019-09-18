import { Component, Prop, Element, h } from "@stencil/core";
import { Direction, Align, Justify } from "../common/flex";
import { applyClasses } from "../common/classes";

@Component({
  tag: "shft-flex",
  shadow: false
})
export class Flex {
  @Element() el: HTMLElement;
  @Prop() class: string;
  @Prop() inline: boolean;
  @Prop() flexDirection: Direction;
  @Prop() alignContent: Align;
  @Prop() alignItems: Align;
  @Prop() alignSelf: Align;
  @Prop() justifyContent: Justify;
  @Prop() justifyItems: Justify;
  @Prop() justifySelf: Justify;

  supportedClasses = [
    "flex-direction",
    "align-content",
    "align-items",
    "align-self",
    "justify-content",
    "justify-items",
    "justify-self"
  ];

  private _applyClasses = () =>
    applyClasses(this, (c: string[]) => {
      if (this.inline) {
        c.push("inline");
      }
    });

  render() {
    return (
      <div class={`shft flex ${this._applyClasses()}`}>
        <slot />
      </div>
    );
  }
}
