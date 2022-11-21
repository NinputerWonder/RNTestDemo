# 参考资料

[RN中文网](https://reactnative.cn/docs/environment-setup)

[RN Testing Library](https://callstack.github.io/react-native-testing-library/docs/getting-started)

#  运行

1. git clone，进入目录执行```yarn```
2. 进入ios目录，下载pod。执行```pod install```
3. 运行app。```yarn ios```

# 添加测试环境步骤

1. 安装testing-library（```npm install --save-dev @testing-library/react-native```）

   1. 注意，Demo的jest版本过低，可以更改为29.3.1

2. 安装jest对native的支持（```npm install --save-dev @testing-library/jest-native```）

3. 在package.json或者jest.config.js中添加jest的配置

   ```json
   {
     "preset": "react-native",
     "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"]
   }
   ```

   