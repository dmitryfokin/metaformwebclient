'use strict';

export default class SectionLeyoutApplication {
  constructor(name, options = {}) {
    this.parent = options.parent || null;
    this.parents = [];
    this.parentFirst = null;
    this.name = name;
    this.component = options.component;
    this.orientation = options.orientation || 'vertical';
    this.height = options.height || '100%';
    this.width = options.width || '100%';
    this.children = [];
    this.treeProjection = new Map;
    this.level = options.level || 0;
    this.jsonCache = '';
  }

  add(child) {
    this.children.push(child);
    this.treeProjection.set(child.name, child);
  }

  delete(child) {

  }

  toJSON() {
    obj: { };
  }
}
