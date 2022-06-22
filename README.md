# 트리플 프론트엔드 과제

<div align='center'>

![triple-assignment](https://user-images.githubusercontent.com/78616893/174986424-7617f1f1-3280-4335-8414-a3d85a2affcb.gif)

</div>

## 기술 스택

> TypeScript, React, Styled Components

### 선정 이유

* TypeScript
  * 정적 타입을 지원하는 타입스크립트를 사용
  * 타입 추론으로 에러를 방지

* Styled Components
  * 컴포넌트 단위 스타일을 하기 위해 사용
  * 스타일에서 props를 활용하기 위해 사용

<br>

## 프로젝트 실행 방법

1. 레포지토리 클론

```
git clone https://github.com/Leejin-Yang/triple-assignment.git
```

2. dependencies 설치

```
npm install
```

3. 실행

```
npm run start
```

<br>

## 구현 방법

### 영역별 등장 애니메이션

* CSS keyframes를 활용해 구현
* animation-duration: 700ms
* animation-delay: 이전값 + 100ms
* 초기 투명도 0
* animation-fill-mode: forwards
  * 100%에 도달했을 때 마지막 keyframe 유지 (위치, 투명도 1)

### 숫자 올라가는 애니메이션

* `useCounter` 커스텀 훅
  * `requestAnimationFrame()`을 이용해 애니메이션 구현

