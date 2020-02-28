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

  getZone() {
    const z1 = Zone.current.fork({name: 'z'});
    console.log(z1.name);
  }
}

