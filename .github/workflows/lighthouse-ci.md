<!--
 * @Author: limengyu
 * @Date: 2021-07-14 16:51:37
 * @LastEditTime: 2021-07-14 16:55:26
 * @Desc: 此配置设置了一个由单个作业组成的工作流，只要将新代码推送到存储库，该作业就会运行
-->

这项工作有四个步骤：
    1. 查看将运行lighthouse CI的存储库
    2. 安装和配置节点
    3. 安装所需的npm包
    4. 运行lighthouse CI并将结果上传到临时公共存储

执行push操作的时候会将其推送到github并触发运行
github---> action  查看最近提交的lighthouse CI报告

