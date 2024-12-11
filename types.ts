import { Plugin } from 'obsidian';
import { Utils } from './utils';

declare module 'obsidian' {
    interface Plugin {
        Utils: typeof Utils;
    }
}

