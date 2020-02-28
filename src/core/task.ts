export class Task {
  tn: string;
  fn: Function | any;
  args: any[] | undefined;
  constructor(tn: string, fn: any | Function, args?: any[]) {
    this.tn = tn;
    this.fn = fn;
    this.args = args;
  }
}

/**
 * 실행로직 선언
 * 입력 (이벤트 (주기적, 단순), 데이터 || 처리)
 * 출력 (이벤트 (주기적, 단순), 데이터 || 처리)
 *
 * // 그리드 선택시 그리드 이벤트 띄우기
 * 클릭이벤트(이벤트 트리거) -> 데이터 패칭 -> 데이터 젙처리 -> 데이터 주입 -> 확인
 *
 * // 로그인
 * 입력 -> 로그인 (이벤트 트리거) -> 데이터 채킹 -> 데이터 전처리 -> 데이터 확인
 *
 * 트리거 (특정 엘리먼트 선택, 주기적 트리거[타이머], 키보드 이벤트)
 * 처리 (데이터 반환[http], 데이터 처리 ,데이터 유효성 검사)
 * 출력 (데이터 전달, 데이터 확인 및 처리, 데이터 전송)
 */
