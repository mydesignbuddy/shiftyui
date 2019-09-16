import { Component } from '@stencil/core';


@Component({
    tag: 'demo-nav',
    styleUrl: 'nav.css'
})
export class Nav {

    

    render() {
        return (
            <div>
                <ul>
                    <li>Typography</li>
                    <li>Colors</li>
                    <li>Layout</li>
                    <li>Buttons</li>
                    <li>Indicators &amp; meters</li>
                    <li>Forms &amp; Inputs</li>
                    <li>Windows, Dialogs &amp; Modals</li>
                    <li>Tables, Lists, &amp; Trees</li>
                    <li>Navigation</li>
                </ul>
            </div>
        );
    }
}
