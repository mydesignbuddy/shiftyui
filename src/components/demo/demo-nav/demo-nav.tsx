import { Component, h } from "@stencil/core";
import "@stencil/router";

@Component({
  tag: "demo-nav",
  styleUrl: "demo-nav.scss",
  shadow: false
})
export class Nav {
  render() {
    return (
      <ul class="demo-nav">
        <li>Typography</li>
        <li>Colors</li>
        <li>Layout</li>
        <li>
          <stencil-route-link url="/button">Buttons</stencil-route-link>
        </li>
        <li>Indicators &amp; meters</li>
        <li>Forms &amp; Inputs</li>
        <li>Windows, Dialogs &amp; Modals</li>
        <li>Tables, Lists, &amp; Trees</li>
        <li>Navigation</li>
      </ul>
    );
  }
}
