import { Component } from '@stencil/core';

@Component({
    tag: 'demo-button',
    styleUrl: 'demo-button.css'
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
