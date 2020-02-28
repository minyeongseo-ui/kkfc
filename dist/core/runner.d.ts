import { Task } from './task';
import 'zone.js/dist/zone.js';
export declare class Runner {
    name: string;
    logger: any;
    tasks: Task[];
    constructor(name: string, logger: any, tasks: Task[]);
    init(): void;
    getZone(name: string): Zone;
}
