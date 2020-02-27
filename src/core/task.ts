export class Task {
  tn: string;
  fns: Function[];
  constructor(tn: string, fns: Function[]) {
    this.tn = tn;
    this.fns = fns;
  }
}
