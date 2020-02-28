var Runner =
/** @class */
function () {
  function Runner(name, logger, tasks) {
    this.name = name;
    this.logger = logger;
    this.tasks = tasks;
  }

  return Runner;
}();

var Task =
/** @class */
function () {
  function Task(tn, fns) {
    this.tn = tn;
    this.fns = fns;
  }

  return Task;
}();
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

var Logger =
/** @class */
function () {
  function Logger() {}

  return Logger;
}();

export { Logger, Runner, Task };
