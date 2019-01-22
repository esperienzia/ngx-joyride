import { JoyrideOptions } from "../models/joyride-options.class";
export declare const DEFAULT_THEME_COLOR = "#3b5560";
export declare const STEP_DEFAULT_POSITION = "bottom";
export declare class JoyrideOptionsService {
    private themeColor;
    private stepDefaultPosition;
    private logsEnabled;
    private showCounter;
    private showPrevButton;
    stepsOrder: string[];
    setOptions(options: JoyrideOptions): void;
    getBackdropColor(): string;
    getThemeColor(): string;
    getStepDefaultPosition(): string;
    getStepsOrder(): string[];
    areLogsEnabled(): boolean;
    isCounterVisible(): boolean;
    isPrevButtonVisible(): boolean;
    private hexToRgb;
}