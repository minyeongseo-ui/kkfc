import { Task } from './task';
import 'zone.js/dist/zone.js';
import { goS } from 'fxjs2-typescript';

export class Runner {
  private name: string;
  private logger: any;
  private tasks: Task[];

  private currentZone: Zone | any = undefined;

  constructor( name: string, logger: any, tasks: Task[], opt?: CreateZoneOption ) {
    this.name = name;
    this.logger = logger;
    this.tasks = tasks;
    this.createZone( name, tasks, opt );
  }

  private createZone( name: string, tasks: Task[], opt?: CreateZoneOption ): void {
    this.currentZone = Zone.current.fork( {
      name,
      properties: {
        props: {
          data: opt?.data ? opt?.data : undefined,
          status: { code: [ ResultCode.WAIT ], result: [] }
        }
      }
    } );
    tasks[0].fn instanceof Function ?
      this.currentZone.run( tasks[0].fn ) : tasks[1].fn ?
      this.currentZone.run( tasks[1].fn ) : console.error( 'no function' );
  }

  getCurrentZone = (): Zone => this.currentZone;

  getProps = ( key?: string ): any => key ? this.currentZone.get( 'props' )[key] : this.currentZone.get( 'props' );

  start() {
    const fns = this.tasks.map( ( t: Task ) => t.fn );
    goS.apply( null, fns );
  }
}

interface CreateZoneOption {
  data?: any;
}

export enum ResultCode {
  FAIL = 4000,
  SUCCESS = 2000,
  WAIT = 3000
}

interface RunnerStatus {
  code: ResultCode[],
  result: any[]
}

