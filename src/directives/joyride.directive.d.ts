import { AfterViewInit, ViewContainerRef, TemplateRef, EventEmitter } from '@angular/core';
import { JoyrideStepsContainerService } from '../services/joyride-steps-container.service';
import { Router } from '@angular/router';
import { DomRefService } from '../services/dom.service';
import { TemplatesService } from '../services/templates.service';
import { Observable } from 'rxjs';
export declare const NO_POSITION = "NO_POSITION";
export declare class JoyrideDirective implements AfterViewInit {
    private readonly joyrideStepsContainer;
    private viewContainerRef;
    private readonly domService;
    private readonly router;
    private readonly templateService;
    private platformId;
    name: string;
    nextStep?: string;
    title?: string | Observable<string>;
    text?: string | Observable<string>;
    stepPosition?: string;
    stepContent?: TemplateRef<any>;
    stepContentParams?: Object;
    prevTemplate?: TemplateRef<any>;
    nextTemplate?: TemplateRef<any>;
    doneTemplate?: TemplateRef<any>;
    counterTemplate?: TemplateRef<any>;
    prev?: EventEmitter<any>;
    next?: EventEmitter<any>;
    done?: EventEmitter<any>;
    private windowRef;
    constructor(joyrideStepsContainer: JoyrideStepsContainerService, viewContainerRef: ViewContainerRef, domService: DomRefService, router: Router, templateService: TemplatesService, platformId: Object);
    ngAfterViewInit(): void;
    private isElementFixed;
    private setAsyncText;
    private isAncestorsFixed;
}