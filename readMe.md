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

