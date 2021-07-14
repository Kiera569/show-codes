/*
 * @Author: limengyu
 * @Date: 2021-07-14 17:13:25
 * @LastEditTime: 2021-07-14 17:32:56
 * @Desc: lighthouse 配置文件
 */

module.exports = {
  ci: {
    collect: {
      /* 如果网站是静态的，配置staticDistDir来只是静态文件所在的位置*/
      // staticDistDir: './lighthouse-public',
      // 非静态，配置 startServerCommand来指示启动服务器的命令,
      startServerCommand: 'npm run start',
      // 配置运行lighthouse的URL： 默认情况下，Lighthouse CI 将对每个 URL 运行 Lighthouse 3 次。
      url: ['http://localhost:8080']

    },
    assert: {
      // 对性能 / 可访问性 设置断言
      assertions: {
        'categories:performance': ['warn', {minScore: 1}], 
        'categories:accessibility': ['error', {minScore: 1}]  
      }
    },
    upload: {
      /* 将生成的lighthouse报告上传到临时公共存储（保留七天，自动删除） */
      target:"temporary-public-storage"
    },
  },
};