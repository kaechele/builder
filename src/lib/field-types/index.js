import ContentField from './ContentField.svelte';
import GroupField from './GroupField.svelte';
import Image from './Image.svelte';
import Information from './Information.svelte';
import Link from './Link.svelte';
import Markdown from './Markdown.svelte';
import Number from './Number.svelte';
import RepeaterField from './RepeaterField.svelte';
import Select from './Select.svelte';
import Switch from './Switch.svelte';
import URL from './URL.svelte';
// import ColorPicker from './ColorPicker.svelte'

export default [
  {
    id: 'repeater',
    label: 'Repeater',
    component: RepeaterField,
  },
  {
    id: 'group',
    label: 'Group',
    component: GroupField,
  },
  {
    id: 'text',
    label: 'Text',
    component: ContentField,
  },
  {
    id: 'markdown',
    label: 'Markdown',
    component: Markdown,
  },
  {
    id: 'image',
    label: 'Image',
    component: Image,
  },
  {
    id: 'number',
    label: 'Number',
    component: Number,
  },
  {
    id: 'switch',
    label: 'Switch',
    component: Switch,
  },
  {
    id: 'url',
    label: 'URL',
    component: URL,
  },
  {
    id: 'link',
    label: 'Link',
    component: Link,
  },
  {
    id: 'select',
    label: 'Select',
    component: Select,
  },
  {
    id: 'info',
    label: 'Info',
    component: Information,
  },
  // {
  //   id: 'color',
  //   label: 'Color Picker',
  //   component: ColorPicker
  // }
];
