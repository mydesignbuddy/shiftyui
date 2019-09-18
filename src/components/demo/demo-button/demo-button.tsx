import { Component, h } from '@stencil/core';

@Component({
    tag: 'demo-button',
    styleUrl: 'demo-button.css',
    shadow: false
})
export class DemoButton {
    render() {
        return (
            <div>
              <shft-button>Default Button</shft-button>
              <shft-button>Primary Button</shft-button>
            </div>
        );
    }
}
