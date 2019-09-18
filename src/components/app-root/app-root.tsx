import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: false
})
export class AppRoot {

  render() {
    return (
      <div class="app-root">
        <div class="sidebar">
          <h1>Shifty UI</h1>
          <demo-nav></demo-nav>
        </div>
        <main class="shft">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='demo-home' exact={true} />
              <stencil-route url='/button' component='demo-button' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
