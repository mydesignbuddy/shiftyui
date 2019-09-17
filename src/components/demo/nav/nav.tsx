import { Component } from "@stencil/core";
import '@stencil/router';

@Component({
  tag: "demo-nav",
  styleUrl: "nav.scss"
})
export class Nav {
  render() {
    return (
      <div class="demo">
        <ul class="demo-nav">
          <li>Typography</li>
          <li>Colors</li>
          <li>Layout</li>
          <li><stencil-route-link url="/button">Buttons</stencil-route-link></li>
          <li>Indicators &amp; meters</li>
          <li>Forms &amp; Inputs</li>
          <li>Windows, Dialogs &amp; Modals</li>
          <li>Tables, Lists, &amp; Trees</li>
          <li>Navigation</li>
        </ul>
        <div class="demo-container">
          <stencil-router titleSuffix=" - My App">
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="demo-button" exact={true} />
              <stencil-route url="/button" component="demos-button" />
              <stencil-route component="page-not-found" />
            </stencil-route-switch>
          </stencil-router>
        </div>
      </div>
    );
  }
}
