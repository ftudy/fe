### 실행 가이드

pnpm 및 turbo의 전역 설치가 필요합니다.

```
npm install -g pnpm
pnpm install turbo --global
```

모든 프로젝트 설치 패키지 설치

```
pnpm install
```

모노레포 실행
```
pnpm run dev
```

### 예상 오류
Q1. eslint 설정 미작동 시

A1. eslint 캐시 삭제 및 eslint 서버 재시작

Step1. (mac 기준) 대상 프로젝트 폴더로 이동 후 eslint cache를 비워줍니다.

```
rm -f .eslintcache
```
Step2.  eslint 서버 재시작. command + shift + p > Restart ESLint server 클릭합니다. 

