module.exports = {
    extends: ["@commitlint/config-conventional"],
    "rules": {
        "header-max-length": [2, "always", 150],
        "type-enum": [2, "always", ["feat", "fix", "chore", "docs", "style", "refactor", "test", "revert", "perf"]],

        // chore:, docs:, style:, refactor:, perf:, test:
        //
    },
    "helpUrl": "https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
};
