import { Task } from './task';
export declare class Runner {
    name: string;
    logger: any;
    tasks: Task[];
    constructor(name: string, logger: any, tasks: Task[]);
}
