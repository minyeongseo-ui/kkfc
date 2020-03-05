[EN](https://github.com/load28/kkfc) | [KR](https://github.com/load28/kkfc/blob/master/README_kr.md)

**KKFC**
****

* **목적**

    간단하고 빠르게 로직 생성을 위한 유틸리티
    
* **예제**
    
    ```ts
    const t1 = new Task( 'param',  200 );
    const t2 = new Task( 'make log', ( a: number ) => `value: ${a * 10}` );
    const t3 = new Task( 'print', ( a: string ) => console.log(a) );
    const r2 = new Runner( 'r2', undefined, [ t1, t2, t3 ] );
    r2.start();  
    ```
  
* **현재 진행상황**

    * task, runner 구현체 생성
    * 시작 함수를 통한 로직 실행 
    
* **앞으로의 계획**

    * 실행 함수 자동 추적
    * 자동 추적에 따른 로깅
    * 로깅 레벨 옵션
    * 유틸 함수 제공 (http, promise, 사용자 정의 응답 구현체)
    * Task 인스턴스 삭제 고려


***

**LICENSE**
    
  * MIT license
