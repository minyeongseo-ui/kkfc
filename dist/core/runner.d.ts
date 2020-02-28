import { Task } from './task';
import 'zone.js/dist/zone.js';
export declare class Runner {
    private name;
    private logger;
    private tasks;
    constructor(name: string, logger: any, tasks: Task[]);
    createZone(name: string, opt?: CreateZoneOption): Runner;
    run: any;
    getCurrentZone(): Zone;
}
interface CreateZoneOption {
    data?: any;
}
export {};
