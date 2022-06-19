# 5 day

## Compilation Context

- 타입스크립트를 자바스크립트로 변환하는 프로그램은 타입스크립트 컴파일러
- 타입스크립트 컴파일러가 어떤 파일과 어떤 방식으로 컴파일할 것인지 규명해둔 context(맥락)을 Compilation Context이라고 한다.
- tsconfig.json 파일에 선언되어 있다.

## tsconfig 최상위 프로퍼티

- compileOnSave
- extends
- compileOptions \*1
- files \*2
- include \*2
- exclude \*2
- references

*1 어떤 설정으로 컴파일할 것인지 여러 맥락이 들어있음
*2 어떤 파일을 컴파일 할 것인지 결정하는데 사용

## compileOnSave

- true : 파일을 저장할 때마다 컴파일을 활성화하겠다
  `complieOnSave : true,`
  default 값은 `false`
- 에디터 같은 곳에서 저장을 인지해서 컴파일 시키겠다는 연결점이 있기 때문에 vs code 같은 에디터에서만 사용 가능

## extends

- 상속할 때 사용하는 키워드
- 상속을 받아올 설정이 들어있는 파일의 상대 path(경로)를 적어주면 된다.
  `extends: "./base.json", `
- 컴파일 단위의 폴더 안에 tsconfig 파일이 있고 그 파일에 공통 tsconfig를 extends 하는 방향으로 많이 쓰인다.

## files, include, exclude

- 어떤 디렉토리 안에 있는 어떤 파일을 컴파일할 것인지 결정
- files, include, exclude 프로퍼티가 tsconfig에 없으면 컴파일러는 모든 파일을 컴파일한다.
  - 상대 혹은 절대 경로의 리스트 배열
- exclude로 설정되어 있는 파일을 컴파일 제외시켜준다. 그러나 files에 있는 파일을 제외시키지는 못함
  - glob 패턴으로 쓰임
  - node_modules는 default로 제외시켜줌
- include로 설정되어 있는 파일을 컴파일 시켜준다.
  - glob 패턴으로 쓰임

## compileOptions

- typeRoots
  - 배열 안에 들어있는 경로들 아래에서만 가져와 사용
- types
  - 배열 안의 모듈 또는 node_modules에서 @types 폴더 안에서의 모듈 이름에서 찾아와 사용
- typeRoots, types은 같이 사용하지 않는다.
- 외부 라이브에는 타입스크립트에 대한 타입이 선언이 안 되어 있다.
- 외부 라이브러리에 대한 타이핑을 도와주는 역할을 해주는 것이 따로 있다.

- target
  - 어떤 런타임에서 컴파일할 지 설정할 수 있다.
  - default는 ES3
  - 버전에 따라 컴파일된 코드가 다르다는 것을 확인할 수 있다.
- lib

  - target에 따라 선택되는 lib가 다르고 기본적으로 설정되어 있다.
  - 선언된 파일 중에 어떤 것을 사용할지 set으로 세팅할 수 있다.
  - lib를 지정하면 지정된 lib 배열로만 라이브러리 사용한다.

- outFile
  - 모듈이 amd, system 방식일 때만 사용가능한 옵션이다.
  - 지정해주면 하나의 자바스크립트 파일로 번들 ( 여러 파일을 하나로)
- outDir
  - rootDir에 지정된 경로를 기준으로 똑같은 폴더, 파일 구조가 outDir에 지정한 폴더로 컴파일 된다.
- rootDir

  - rootDir에 경로가 설정되어 있지 않으면 최상위 폴더를 기준으로 컴파일된다.
  - 어떤 폴더를 중심으로 컴파일할 것인지 경로를 설정할 수 있다.

- strict
  - `strict : true` 가 기본
    - 엄격하게 타입을 확인하는 옵션을 활성화한다는 의미
  - `--noImplicitAny`
    - 암묵적 any 타입 사용을 (에러를 발생시켜) 방지한다.
  - `--noImplicitThit`
    - 암묵적 any 타입을 this 표현식에서 사용하는 것을 방지한다.
    - this에 대한 타입 설정해야 한다.
  - `--strictNullChecks`
    - 모든 타입의 null과 undefined를 빼준다.
    - null과 undefined를 가지려면 조건부로 union type을 사용하는 것을 권장한다.
  - `--strictFunctionTypes`
    - 함수에서 반환 타입은 공변적이고 인자 타입은 반공변적이어야 한다.
    - 타입스크립트에서 인자타입은 공변적이면서 반공변적이기 때문에 이러한 문제를 해결해주는 옵션이다.
  - `--strictPropertyInitialization`
    - 정의되지 않은 클래스의 속성이 생성자에서 초기화되었는지 확인 `--strictNullChecks` 같이 사용
    - `!:` 로 나중에 초기화될 것임을 명시할 수도 있다.
  - `--strictBindCallApply`
    - bind, call, apply에 대해 엄격한 검사를 한다
  - `--alwaysStrict`
    - 소스 파일에 대해 자바스크립트의 strict mode로 분석하고 에러를 밖으로 보낸다.
