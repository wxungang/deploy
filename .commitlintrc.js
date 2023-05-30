
module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'body-leading-blank': [1, 'always'],
		'body-max-line-length': [2, 'always', 100],
		'footer-leading-blank': [1, 'always'],
		'footer-max-line-length': [2, 'always', 100],
		'header-max-length': [2, 'always', 100],
		'scope-case': [1, 'always', 'lower-case'],
		'subject-case': [1, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
		// 具体内容不能为空
		'subject-empty': [2, 'never'],

		'subject-full-stop': [1, 'never', '.'],
		// 类型小写
		'type-case': [2, 'always', 'lower-case'],
		// 不能为空
		'type-empty': [2, 'never'],
		/*
		 * type(scope?): subject  #scope is optional
		 *
		 * build: 打包相关
		 * lint: 构建过程或辅助工具的变动 (eslint\ignore\pretty等)
		 * ci_cd: 集成、自动化部署相关 (eg:Travis，Jenkins，GitLab CI，Circle 等)
		 * docs: 文档相关
		 * feat: 新增功能 (feature)
		 * fix: 已有功能 bug 修复
		 * perf: 性能、优化相关 (performance)
		 * refactor: 项目重构 (不增加新功能、不改 bug 等)
		 * revert: 代码回退
		 * style: 样式相关
		 * test: 测试相关
		 *
		 */
		'type-enum': [2, 'always', ['build', 'lint', 'ci_cd', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']],
	},
}
