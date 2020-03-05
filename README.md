[EN](https://github.com/load28/kkfc) | [KR](https://github.com/load28/kkfc/blob/master/README_kr.md)

**KKFC**
****

* **Purpose**

    create workflow and logic fastly, simply
    
    
* **Example**
    
    ```ts
    const t1 = new Task( 'print',  200 );
    const t2 = new Task( 'print', ( a: number ) => `value: ${a * 10}` );
    const t3 = new Task( 'print', ( a: string ) => console.log(a) );
    const r2 = new Runner( 'r2', undefined, [ t1, t2, t3 ] );
    r2.start();  
    ```
  
* **Current progress**

    * create task, runner
    * start function implementation complete 
    
* **Future plans**

    * Execute function auto tracing
    * Logging according to Auto Trace
    * Log level options
    * utility function support (http, promise, response state(custom))
    * consider deleting Task instances

***

**LICENSE**
    
  * MIT license
