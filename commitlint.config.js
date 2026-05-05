module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "duck-format": ({ header }) => {
          const pattern = /^(feat|fix|chore|docs): DUCK-\d{8} .+/;
          if (!pattern.test(header)) {
            return [
              false,
              "Commit message must start with (feat|fix|chore|docs): DUCK-XXXXXXXX format followed by space and description",
            ];
          }
          return [true];
        },
      },
    },
  ],
  rules: {
    "duck-format": [2, "always"],
    "type-enum": [2, "always", ["feat", "fix", "docs", "chore"]],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "subject-empty": [0],
    "header-max-length": [0],
  },
};
