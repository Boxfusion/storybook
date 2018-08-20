import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/components.js');
  require('../src/stories/content.js');
  require('../src/stories/layout.js');
  require('../src/stories/utilities.js');
}

configure(loadStories, module);