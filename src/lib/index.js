import Primo from './Primo.svelte';

import { registerProcessors } from './component';
import { Page, Site } from './const';
import { validate_site_structure_v2 } from './converter';
import {
  database_subscribe,
  realtime_subscribe,
  storage_subscribe,
} from './database';
import { deploy, deploy_subscribe } from './deploy';
import PrimoFieldTypes from './field-types';
import activePage from './stores/app/activePage';
import fieldTypes from './stores/app/fieldTypes';
import {
  locale,
  locked_blocks,
  onMobile,
  saved,
  userRole,
} from './stores/app/misc';
import modal from './stores/app/modal';
import { content, site } from './stores/data/site';
import { buildStaticPage } from './stores/helpers';
import { processCode } from './utils';
import PrimoPage from './views/editor/Page.svelte';

import * as components from './components';
import * as utils from './utils';

const stores = {
  saved,
  onMobile,
  userRole,
};

export {
  Page,
  PrimoFieldTypes,
  PrimoPage,
  Site,
  activePage,
  buildStaticPage,
  components,
  content,
  database_subscribe,
  deploy,
  deploy_subscribe,
  fieldTypes,
  locale,
  locked_blocks,
  modal,
  processCode,
  realtime_subscribe,
  registerProcessors,
  site,
  storage_subscribe,
  stores,
  utils,
  validate_site_structure_v2,
};
export default Primo;
