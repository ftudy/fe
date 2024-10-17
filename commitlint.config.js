module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2, // 규칙을 오류로 설정
      "always",
      ["feat", "fix", "docs", "style", "refact", "perf", "test", "chore", "ci"], // 커밋 타입
    ],
    "type-case": [2, "always", "lower-case"], // 커밋 타입을 소문자로 제한
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
  },
};
