import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/layouts.js');
  require('../src/stories/typography.js');
  require('../src/stories/buttons.js');
  require('../src/stories/forms.js');
  require('../src/stories/lists.js');
  require('../src/stories/code.js');
  require('../src/stories/tables.js');
  require('../src/stories/components.js');
  require('../src/stories/templates.js');
}

configure(loadStories, module);