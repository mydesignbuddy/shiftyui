import { Component, Prop } from "@stencil/core";

@Component({
  tag: "shft-window",
  shadow: false
})
export class Window {
  @Prop() disabled: boolean;
  @Prop() class: string;

  @Prop() title: string;
  @Prop() minimize: boolean = false;
  @Prop() maximize: boolean = false;
  @Prop() close: boolean = false;

  private hasActions(): boolean {
    let actionsCount = 3;
    actionsCount += !this.minimize ? -1 : 0;
    actionsCount += !this.maximize ? -1 : 0;
    actionsCount += !this.close ? -1 : 0;
    return actionsCount > 0;
  }

  render() {
    return (
      <div class="shft shft-window">
        <div class="titlebar">
          <slot name="before-title" />
          <div class="title">{this.title}</div>
          <slot name="after-title" />
          {this.hasActions() && (
            <div class="actions">
              {this.minimize && <div class="titlebar-button minimize" />}
              {this.maximize && <div class="titlebar-button maximize" />}
              {this.close && <div class="titlebar-button close" />}
            </div>
          )}
        </div>
        <div class="shft-content">
          <slot />
        </div>
      </div>
    );
  }
}
