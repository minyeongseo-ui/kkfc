import { Task } from './task';

export class Runner {
  name: string;
  logger: any;
  tasks: Task[];

  constructor(name: string, logger: any, tasks: Task[]) {
    this.name = name;
    this.logger = logger;
    this.tasks = tasks;
  }
}
