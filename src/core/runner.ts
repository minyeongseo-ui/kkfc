import { Task } from './task';
import 'zone.js/dist/zone.js';

export class Runner {
  name: string;
  logger: any;
  tasks: Task[];

  constructor(name: string, logger: any, tasks: Task[]) {
    this.name = name;
    this.logger = logger;
    this.tasks = tasks;
  }

  init(name: string) {
    const z1 = this.getZone(name);
    return z1.get('data').name;
  }

  getZone(name: string) {
    return Zone.current.fork({
      name,
      properties: {
        data: {
          name
        }
      }
    });
  }
}

