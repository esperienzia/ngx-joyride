import {
    Injectable,
    ComponentRef,
    ComponentFactoryResolver,
    ApplicationRef,
    Injector,
    EmbeddedViewRef
} from '@angular/core';
import {JoyrideStepComponent} from "../components/step/joyride-step.component";
import {JoyrideStep} from '../models/joyride-step.class';

@Injectable()
export class StepDrawerService {

    private refMap: { [key: string]: ComponentRef<JoyrideStepComponent>; } = {};

    constructor(
        private readonly componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {
    }

    draw(step: JoyrideStep) {

        // 1. Create a component reference from the component 
        const ref: ComponentRef<JoyrideStepComponent> = this.componentFactoryResolver
            .resolveComponentFactory(JoyrideStepComponent)
            .create(this.injector);

        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(ref.hostView);

        // 3. Get DOM element from component
        const domElem = (ref.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        if (step.delayEmitter) {
            step.delayEmitter.subscribe(() => {
                if (step.startsHidden) {
                    domElem.hidden = false;
                    setTimeout(() => {
                        if (step.startsInvisible) {
                            domElem.setAttribute("style", "visibility: visible");
                        }
                    }, 500);
                } else {
                    domElem.setAttribute("style", "visibility: visible");
                }
            });
        }
        if (step.startsInvisible) {
            domElem.setAttribute("style", "visibility: hidden");
        }
        if (step.startsHidden) {
            domElem.hidden = true;
        }

        // 4. Append DOM element to the body
        document.body.appendChild(domElem);

        const instance: JoyrideStepComponent = ref.instance;
        instance.step = step;
        ref.changeDetectorRef.detectChanges();
        step.stepInstance = instance;

        this.refMap[step.name] = ref;

    }

    remove(step: JoyrideStep) {
        this.appRef.detachView(this.refMap[step.name].hostView);
        this.refMap[step.name].destroy();
    }

}