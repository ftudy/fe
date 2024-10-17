const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    require.resolve("@vercel/style-guide/eslint/next"),
    "turbo",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [".*.js", "node_modules/"],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
        varsIgnorePattern: "^_", // 미사용 변수로 취급하지 않을 변수명 패턴
        argsIgnorePattern: "^_",
      },
    ],
    "import/order": [
      "error",
      {
        // groups 배열 순서대로 그룹 순서 지정
        groups: [
          ["builtin", "external"], // node.js 기본 모듈과 npm으로 설치한 외부 모듈 그룹
          "internal", // 프로젝트 내 생성한 모듈
          ["parent", "sibling"], // 부모 디렉토리(../)에 있는 모듈과 같은 디렉토리(./) 레벨에 있는 모듈
          "index", // 현재 디렉토리의 index.js | .ts 파일
          "object", // 모듈 전체를 객체로 가져올 때 (e.g. import * as utils from "./")
        ],
        pathGroups: [
          // group으로 지정할 패턴 정의
          {
            pattern: "~/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "@*",
            group: "external",
            position: "after",
          },
          {
            pattern: "@*/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "react-dom"], // 순서 정렬에서 제외 후 최상단 위치
        "newlines-between": "always", // 그룹 사이 빈 줄 추가
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
