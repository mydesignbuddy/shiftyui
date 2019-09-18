import { Component, Prop, State, Element, Method, Watch, h } from "@stencil/core";
import { waitFor } from '../common/classes';

class TabNode {
  public key: string;
  public title: string;

  constructor(init?:Partial<TabNode>){
    Object.assign(this, init);
  }
}

@Component({
  tag: "shft-tabs",
  shadow: false
})
export class Tabs {
  @Element() host: HTMLElement;
  @Prop() disabled: boolean;
  @Prop() class: string;
  @State() tabs: TabNode[] = [];
  @State() currentTabKey: string;

  @State() tabButtons: any;


  componentDidLoad() {
    const tabNodes = this.host.querySelectorAll('shft-tab');
    const tabs = Object.keys(tabNodes).map(i => tabNodes[i]);
    this.tabs = tabs.map(t => new TabNode({
      key: t.getAttribute("key"),
      title: t.querySelector('slot[name="title"]').innerHTML
    }))

    this.tabButtons = this.tabs.map(t => <shft-button data-key={t.key} onClick={() => this.setActiveTab(t.key)}>{t.title}</shft-button>);

    this.setActiveTab(this.tabs[0].key);
  }

  @Method()
  setActiveTab(key: string) {
    this.host.querySelectorAll('shft-tab').forEach((t: HTMLElement) => {
      t.style.display = "none";
    });
    this.host.querySelector<HTMLElement>(`shft-tab[key=${key}]`).style.display = "inherit";

    const allTabButtons = this.host.querySelectorAll(`.shft-tabs-tabs > shft-button`);
    allTabButtons.forEach(i => i.classList.remove('active'));

    this.currentTabKey = key;
  }

  @Watch('currentTabKey')
  onActiveTabChange() {
    const selector = `.shft-tabs-tabs > shft-button[data-key=${this.currentTabKey}]`;
    waitFor(selector).then((activeTabButton: HTMLElement) => {
      activeTabButton.classList.add('active');
    }).catch(e => console.log(e));
  }

  render() {
    return (
      <div class="shft shft-tabs">
        <div class="shft-tabs-tabs">
          {this.tabButtons}
        </div>
        <div class="shft-tabs-content shft-card">
          <slot/>
        </div>
      </div>
    );
  }
}
