import { Task } from './task';
import 'zone.js/dist/zone.js';
export declare class Runner {
    private name;
    private logger;
    private tasks;
    private currentZone;
    constructor(name: string, logger: any, tasks: Task[], opt?: CreateZoneOption);
    private createZone;
    getCurrentZone: () => Zone;
    getProps: (key?: string | undefined) => any;
    start(): void;
}
interface CreateZoneOption {
    data?: any;
}
export declare enum ResultCode {
    FAIL = 4000,
    SUCCESS = 2000,
    WAIT = 3000
}
export {};
