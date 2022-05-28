# 2 day

- js는 Dynamic Types라서 type이 잘못되었는지 런타임에서만 확인할 수 있다.
- ts는 Static Types라서 type이 잘못되었는지 개발하면서 그때그때 확인할 수 있다.

- Primtive Type
    - 실제 값을 저장하는 자료형
    - boolean, number, string, symbol, null, undefined 이 있다.
    - literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.
        - true; // true는 boolean 타입의 서브타입
    - 래퍼 객체를 만들 수 있지만, 순수 자료형과는 다르다.
    - 대문자로 시작하는 래퍼 타입은 타입으로 이용해서는 안 된다.

- number
    - ts의 모든 숫자는 부동 소수점 값이다.
    - 16진수, 10진수 외에도 2진수, 8진수를 지원한다. 
    - NaN, 1_000_000과 같은 표기도 가능하다.

- string
    - "" , '' 사용
    - 템플릿 스트링 사용 가능

- Symbol
    - 원시타입의 값을 담아서 사용
    - 고유하고 수정 불가능한 값으로 만들어준다.
    - 접근 제어할 때 쓰이는 경우가 많다.

- undefined & null
    - ts에서 undefined는 undefined 타입을 갖는다.
    - ts에서 null은 null 타입을 갖는다.
    - `"strict": true` 를 해제하면 number 같은 원시값에 null, undefined를 할당할 수 있다.
    - `--srtictNullCheck` 를 사용하면 null과 nudefined는 나 자신들에게만 할당할 수 있다.
    - null과 undefined를 원시값에 할당하고 싶다면 union type을 이용해야 한다.
    - null은 무언가가 있는데, 사용할 준비가 덜 된 상태
        - null 타입은 null 이라는 값만 가질 수 있다.
    - undefined는 무언가가 아예 준비가 안된 상태
        - undefined 라는 값은 undefined 타입과 void 타입을 가질 수 있다.
