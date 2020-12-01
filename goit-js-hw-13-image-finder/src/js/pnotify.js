import { error } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/BrightTheme.css';

export const myPnotify = title => error({ title, delay: 2000 }, 200);