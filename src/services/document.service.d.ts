import { ElementRef } from '@angular/core';
import { DomRefService } from './dom.service';
export declare class DocumentService {
    private readonly DOMService;
    private documentHeight;
    constructor(DOMService: DomRefService);
    getElementFixedTop(elementRef: ElementRef): any;
    getElementFixedLeft(elementRef: ElementRef): any;
    getElementAbsoluteTop(elementRef: ElementRef): any;
    getElementAbsoluteLeft(elementRef: ElementRef): any;
    setDocumentHeight(): void;
    getDocumentHeight(): number;
    getFirstScrollableParent(node: any): any;
    private calculateDocumentHeight;
    private getScrollOffsets;
}