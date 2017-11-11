# spa应用的项目基础模版

> 主要基于vue2.5 + vue-router + vuex + axios + webpack 的基础模版，主要目的是为了方便后面快速创建项目，省去重复配置的麻烦。在vue-cli的webpack模版的基础上做了代码简化，同时结合项目情况引入vuex和一些基础组件。

## Usage

可使用 [vue-temp-cli]() 工具 快速创建生成基于此模版的spa项目

``` bash
$ npm install -g vue_temp_cli
$ vue_temp init my-project
$ cd my-project
$ npm install
$ npm run dev
```

也可使用 [vue-cli](https://github.com/vuejs/vue-cli) 来创建基于此模版的spa项目

``` bash
$ npm install -g vue-cli
$ vue init webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```