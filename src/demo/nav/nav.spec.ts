import { TestWindow } from '@stencil/core/testing';
import { Nav } from './nav';

describe('nav', () => {
  it('should build', () => {
    expect(new Nav()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLNavElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Nav],
        html: '<nav></nav>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
