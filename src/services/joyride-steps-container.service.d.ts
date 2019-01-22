import { JoyrideStep } from "../models/joyride-step.class";
import { Subject } from "rxjs";
import { JoyrideOptionsService } from "./joyride-options.service";
export declare class JoyrideStepsContainerService {
    private readonly stepOptions;
    private steps;
    private stepsOriginal;
    stepHasBeenModified: Subject<JoyrideStep>;
    constructor(stepOptions: JoyrideOptionsService);
    get(index: number): JoyrideStep;
    getStepRoute(index: number): string;
    getStepPosition(step: JoyrideStep): number;
    addStep(stepToAdd: JoyrideStep): void;
    getNumberOfSteps(): number;
    setPosition(step: JoyrideStep, position: string): void;
    initSteps(): void;
    private sortSteps;
    private getStepIndex;
    private getStepName;
}