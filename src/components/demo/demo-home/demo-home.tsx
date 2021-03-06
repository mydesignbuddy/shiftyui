import { Component, h } from '@stencil/core';

@Component({
  tag: 'demo-home',
  styleUrl: 'demo-home.scss',
  shadow: false
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <stencil-route-link url='/button'>
          <button>
            Buttons
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
