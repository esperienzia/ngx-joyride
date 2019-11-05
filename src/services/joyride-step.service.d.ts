import { JoyrideBackdropService } from './joyride-backdrop.service';
import { EventListenerService } from './event-listener.service';
import { JoyrideStepsContainerService } from './joyride-steps-container.service';
import { DocumentService } from './document.service';
import { StepDrawerService } from './step-drawer.service';
import { DomRefService } from './dom.service';
import { JoyrideOptionsService } from './joyride-options.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JoyrideStepInfo } from '../models/joyride-step-info.class';
import { LoggerService } from './logger.service';
export declare const DISTANCE_FROM_TARGET = 15;
export declare const ARROW_SIZE = 10;
export interface IJoyrideStepService {
    startTour(): Observable<JoyrideStepInfo>;
    close(): any;
    prev(): any;
    next(): any;
}
export declare class JoyrideStepService implements IJoyrideStepService {
    private readonly backDropService;
    private readonly eventListener;
    stepsContainerService: JoyrideStepsContainerService;
    private readonly documentService;
    private readonly DOMService;
    private readonly stepDrawerService;
    optionsService: JoyrideOptionsService;
    private readonly router;
    private readonly logger;
    private currentStep;
    private winTopPosition;
    private winBottomPosition;
    private stepsObserver;
    constructor(backDropService: JoyrideBackdropService, eventListener: EventListenerService, stepsContainerService: JoyrideStepsContainerService, documentService: DocumentService, DOMService: DomRefService, stepDrawerService: StepDrawerService, optionsService: JoyrideOptionsService, router: Router, logger: LoggerService);
    private initViewportPositions;
    private subscribeToScrollEvents;
    private subscribeToResizeEvents;
    private drawStep;
    startTour(): Observable<JoyrideStepInfo>;
    close(): void;
    prev(): void;
    next(): void;
    private navigateToStepPage;
    private subscribeToStepsUpdates;
    private tryShowStep;
    private showStep;
    private notifyStepClicked;
    private notifyTourIsFinished;
    private removeCurrentStep;
    private scrollIfStepAndTargetAreNotVisible;
    private scrollWhenTargetOrStepAreHiddenBottom;
    private scrollWhenTargetOrStepAreHiddenTop;
    private getMaxTargetAndStepBottomPosition;
    private getMaxTargetAndStepTopPosition;
    private scrollIfElementBeyondOtherElements;
    private isElementBeyondOthers;
}
