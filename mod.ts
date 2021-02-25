
declare interface DOMRect {
   x: number;
   y: number;
   width: number;
   height: number;
   readonly top: number;
   readonly bottom: number;
   readonly right: number;
   readonly left: number;
}

declare interface ScrollToOptions {
   top: number;
   left: number;
   behaviour: 'smooth' | 'auto';
}

declare interface Attr {
   readonly name: string
   readonly namespaceURI: string;
   readonly localName: string;
   readonly prefix: string | null;
   readonly specified: boolean;
   value: string;
}

declare interface Node extends EventTarget {
   readonly baseURI: string;
   readonly childNodes: NodeList;
   readonly firstChild: Node | null;
   readonly lastChild: Node | null;
   readonly nextSibling: Node | null;
   readonly previousSibling: Node | null;
   readonly parentNode: Node | null;
   readonly parentElement: Element | null;
   readonly nodeName: string;
   readonly nodeType: number;
   readonly isConnected: boolean;
   readonly ownerDocument: Document | null;
   nodeValue: string | null;
   textContent: string | null;
   appendChild(childNode: Node): void;
   cloneNode(): Node;
   contains(node: Node): boolean;
   hasChildNodes(): boolean;
   insertBefore(newNode: Node, referenceNode: Node | null): void;
   isEqualNode(node: Node): boolean;
   isSameNode(node: Node): boolean;
   removeChild(child: Node): Node;
   replaceChild(newChild: Node, oldChild: Node): Node;
}

declare interface HTMLCollection {
   readonly length: number;
   item(index: number): Node | null;
   [index: number]: Node | undefined;
}

declare interface DOMTokenList {
   readonly length: number;
   value: string;
   item(index: number): string;
   contains(token: string): boolean;
   add(...tokens: string[]): void;
   remove(...tokens: string[]): void;
   replace(oldToken: string, newToken: string): void;
   toggle(token: string, force?: boolean): void;
   entries(): IterableIterator<[number, string]>;
   keys(): IterableIterator<number>;
   values(): IterableIterator<string>;
}

declare interface NodeList {
   readonly length: number;
   item(index: number): Node | null;
   forEach(cb: (node: Node) => void): void;
   entries(): IterableIterator<[number, Node]>;
   keys(): IterableIterator<number>;
   values(): IterableIterator<Node>;
   [Symbol.iterator](): IterableIterator<Node>;
}

declare interface NamedNodeMap {
   readonly length: number;
   getNamedItem(name: string): Attr | null;
   setNamedItem(name: string, attr: Attr): void;
   removeNamedItem(name: string): void;
   item(index: number): Attr | null;
}

declare interface Element extends Node {
   readonly attributes: NamedNodeMap;
   readonly classList: DOMTokenList;
   className: string;
   readonly clientWidth: number;
   readonly clientHeight: number;
   readonly clientLeft: number;
   readonly clientTop: number;
   id: string;
   innerHTML: string;
   outerHTML: string;
   readonly localName: string;
   readonly namespaceURI: string;
   readonly nextElementSibling: Element | null;
   readonly previousElementSibling: Element | null;
   part: DOMTokenList;
   readonly prefix: string | null;
   readonly scrollHeight: number;
   readonly scrollWidth: number;
   scrollLeft: number;
   scrollTop: number;
   readonly shadowRoot: any;
   readonly tagName: string;
   closest(): Element;
   attachShadow(shadow: any): void;
   getAttribute(name: string): string | null;
   getAttributeNames(): string[];
   getAttributeNS(namespace: string, name: string): string | null;
   getBoundingClientRect(): DOMRect;
   getClientRects(): DOMRect[];
   getElementsByClassName(names: string): HTMLCollection;
   getElementsByTagName(tag: string): HTMLCollection;
   getElementsByTagNameNS(namespace: string, name: string): HTMLCollection;
   hasAttribute(name: string): boolean;
   hasAttributes(): boolean;
   hasAttributeNS(namespace: string, name: string): boolean;
   matches(selector: string): boolean;
   querySelector(selector: string): HTMLElement | null;
   querySelectorAll(selector: string): NodeList;
   remove(): void;
   removeAttribute(name: string): void;
   removeAttributeNS(namespace: string, name: string): void;
   scroll(opts: ScrollToOptions): void;
   scroll(x: number, y: number): void;
   scrollBy(opts: ScrollToOptions): void;
   scrollBy(x: number, y: number): void;
   scrollTo(opts: ScrollToOptions): void;
   scrollTo(x: number, y: number): void;
   setAttribute(name: string, value: string): void;
   setAttributeNS(namespace: string, name: string, value: string): void;
   toggleAttribute(name: string, force?: boolean): boolean;
}

declare interface HTMLElement extends Element {
   // TODO:
}

declare interface EventHandler {
   (event: any): void;
}

declare interface EventTarget {
   addEventListener(type: string, handler: EventHandler): void;
   removeEventListener(type: string, handler: EventHandler): void;
   dispatchEvent(event: Event): boolean;
}

declare interface Document extends Node {
   getElementById(id: string): HTMLElement;
   // TODO:
}

declare interface HTMLDocument extends Document {
   // TODO:
}

declare const document: HTMLDocument;
