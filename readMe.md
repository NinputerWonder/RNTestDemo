# 参考资料

[RN中文网](https://reactnative.cn/docs/environment-setup)

[RN Testing Library](https://callstack.github.io/react-native-testing-library/docs/getting-started)

[RN接入TS的姿势](https://juejin.cn/post/6844904049146331144)

#  运行

1. git clone，进入目录执行```yarn```
2. 进入ios目录，下载pod。执行```pod install```
3. 运行app。```yarn ios```

# 添加测试环境步骤

1. 安装testing-library（```yarn add --dev @testing-library/react-native```）

   1. 注意，Demo的jest版本过低，可以更改为29.3.1

2. 安装jest对native的支持（```yarn add --dev @testing-library/jest-native```）

3. 在package.json或者jest.config.js中添加jest的配置

   ```json
   {
     "preset": "react-native",
     "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"]
   }
   ```

# 支持TS步骤

1. 为项目添加TS```yarn add --dev typescript```

2. 生成tsconfig.json ```yarn tsc --init --pretty --jsx react```,修改内容具体见commit diff

3. 为项目添加react-native-typescript-transformer， ```yarn add --dev react-native-typescript-transformer```

4. 生成transfomer的配置文件， ```touch rn-cli.config.js```,修改内容见commit diff

5. 为React和ReactNative添加类型定义库，```yarn add --dev @types/react **@types**/react-native```

# 测试方法

## [快照测试](https://jestjs.io/zh-Hans/docs/snapshot-testing)

每当你想要确保你的UI不会有意外的改变，快照测试是非常有用的工具。

典型的做法是在渲染了UI组件之后，保存一个快照文件， 检测他是否与保存在单元测试旁的快照文件相匹配。 若两个快照不匹配，测试将失败：有可能做了意外的更改，或者UI组件已经更新到了新版本。





