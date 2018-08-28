import { LitElement, html } from "@polymer/lit-element/";
import { render } from "lit-html";

import morphdom from "morphdom";
import SizeAndPositionManager from "./size-position-manager";

const STYLE_INNER = 'position:relative; overflow:hidden; width:100%; min-height:100%; will-change: transform;';
const STYLE_CONTENT = 'position:absolute; top:0; left:0; height:100%; width:100%; overflow:visible;';

// https://github.com/clauderic/virtualized-list/blob/master/src/VirtualList/index.js

class NabcList extends LitElement {
  static get properties() {
    return {
      containerHeight: Number,
      averageRowHeight: Number,
      initialIndex: Number
    };
  }

  constructor() {
    super();
    this.averageRowHeight = 100;
  }

  _getListItems() {
    return this.querySelectorAll("[label]");
  }

  _initializeSizeAndPositionManager(count) {
    this._sizeAndPositionManager = new SizeAndPositionManager({
      itemCount: count,
      itemSizeGetter: this.getRowHeight,
      estimatedItemSize: this.estimatedRowHeight || 100
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.listItems = this._getListItems();

    for (let [i, item] of this.listItems.entries()) {
      item.setAttribute("slot", "item");
    }
    this.rowCount = this.listItems.entries();
    this.state = {};
    this._initializeSizeAndPositionManager(this.rowCount);
  }

  handleScroll(e) {
    console.log("scrolling scrolling scrolling scroll");
  }

  getRowHeight(index) {
    const { rowHeight } = this.options;

    if (typeof rowHeight === "function") {
      return rowHeight(index);
    }

    return Array.isArray(rowHeight) ? rowHeight[index] : rowHeight;
  }

  getRowOffset(index) {
    const { offset } = this._sizeAndPositionManager.getSizeAndPositionForIndex(
      index
    );

    return offset;
  }

  scrollToIndex(index, alignment) {
    const { height } = this.state;
    const offset = this._sizeAndPositionManager.getUpdatedOffsetForIndex({
      align: alignment,
      containerSize: height,
      targetIndex: index
    });

    this.container.scrollTop = offset;
  }

  setRowCount(count) {
    this._initializeSizeAndPositionManager(count);
    this.render();
  }

  onRowsRendered(renderedRows) {
    const { onRowsRendered } = this.options;

    if (typeof onRowsRendered === "function") {
      onRowsRendered(renderedRows);
    }
  }

  _render({ containerHeight }) {
    return html`
    <style>
      ol {
        max-height: ${containerHeight}px;
        overflow-y: scroll;
        list-style: none;
        margin: 0;
        padding: 0;
      }
    </style>
    <ol on-scroll="${{
      handleEvent: e => this.handleScroll(e),
      options: { passive: true }
    }}">
      <slot name="item"></slot>
    </ol>
	`;
  }
}

customElements.define("nabc-list", NabcList);
