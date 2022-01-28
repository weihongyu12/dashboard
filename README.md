# README

## 技术栈和相关文档（太长不看版）

![架构图](https://user-images.githubusercontent.com/19792747/120105931-845a6c00-c18d-11eb-9d8a-dc25cc170a0b.png)

- 框架：[React](https://zh-hans.reactjs.org/) + [TypeScript](https://www.typescriptlang.org/zh/)
- 脚手架：[Create React App](https://create-react-app.dev/)
- 构建方案：[Webpack 4](https://webpack.js.org/)
- UI 组件库：[MUI](https://mui.com/zh/)
- 路由：[React Router](https://reactrouter.com/web/)
- 状态管理：[Redux Toolkit](https://redux-toolkit.js.org/)
- CSS 工具：
  - CSS in JS（[@mui/styles](https://mui.com/zh/styles/basics/)）
  - [SCSS](https://sass-lang.com/)
- 静态检查：
  - [ESLint](https://eslint.org/)
    - [Airbnb JavaScript Style Guide for TypeScript](https://github.com/iamturns/eslint-config-airbnb-typescript)
    - [Airbnb JavaScript Style Guide for React Hooks](https://airbnb.io/javascript/)
    - [TypeScript ESLint Plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
    - [MUI unused classes Plugin](https://github.com/jens-ox/eslint-plugin-material-ui-unused-classes)
  - [stylelint](https://stylelint.io/)
    - [Bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap)
- 单元测试：[Jest](https://jestjs.io/zh-Hans/) + [React Testing Library](https://testing-library.com/react)
- E2E测试：[Nightwatch.js](https://nightwatchjs.org/)
- 原生渲染：
  - 桌面：[Electron](https://www.electronjs.org/)
  - 移动：[Capacitor](https://capacitorjs.com/)
- 组件文档：[React Styleguidist](https://react-styleguidist.js.org/)

## 框架

框架选用了 React，并且使用了 React Router 和 Redux Toolkit，使整个框架的功能更加完善。

之所以选用 React 不使用 Vue，是因为 React 是我工作中使用的就是此框架。虽然现在 React 和 Vue 的功能日趋于一致，但是从开发人员上手难度而言（本次项目只有我了），使用更熟悉的框架会是更好的选择。

由于没有历史负债，此次代码基本是函数组件而非 class 组件，并且用了大量的 React Hooks 特性提升代码的复用率，也增加了代码的可读性。

由于框架内包含了 Electron 和 Capacitor，可能会存在客户端运行的情况，所以路由采取的模式是 Hash 模式。

Redux Toolkit 是一个 Redux 的工具集，用于简化 Redux 的操作，它包括了 Redux、Redux Thunk 和 Immer，可用于 Redux 异步操作，并附带了可变数据结构来优化性能。

由于 React 对 TypeScript 的支持非常好，由微软官方提供的支持，在这方面而言，优于 Vue 2.x 甚至是 Vue 3.x。TypeScript 可以在运行前识别某些类型的问题。还可以通过增加自动补全等功能来改善开发者的工作流程。基于这些原因，在大型项目中使用 TypeScript 是一个更好的选择。

### 相关依赖

| Package                                                                                | License            |
|----------------------------------------------------------------------------------------|--------------------|
| [async-es](https://caolan.github.io/async/v3/)                                         | MIT                |
| [axios](https://github.com/axios/axios)                                                | MIT                |
| [crypto-js](http://github.com/brix/crypto-js)                                          | MIT                |
| [date-fns](https://date-fns.org/)                                                      | MIT                |
| [draft-js](http://draftjs.org/)                                                        | MIT                |
| [fontawesome](https://fontawesome.com/)                                                | MIT                |
| [fullcalendar](https://fullcalendar.io/)                                               | MIT                |
| [js-cookie](https://github.com/js-cookie/js-cookie)                                    | MIT                |
| [js-file-download](https://github.com/kennethjiang/js-file-download)                   | MIT                |
| [localforage](https://localforage.github.io/localForage/)                              | Apache License 2.0 |
| [lodash](https://lodash.com/)                                                          | MIT                |
| [lottie-web](https://airbnb.io/lottie)                                                 | MIT                |
| [material-ui-confirm](https://github.com/jonatanklosko/material-ui-confirm)            | MIT                |
| [mathjs](https://mathjs.org/)                                                          | Apache License 2.0 |
| [mdi-material-ui](https://github.com/TeamWertarbyte/mdi-material-ui)                   | WTFPL              |
| [notistack](https://www.iamhosseindhv.com/notistack)                                   | MIT                |
| [nzh](http://cnwhy.github.io/nzh)                                                      | MIT                |
| [print-js](https://printjs.crabbly.com/)                                               | MIT                |
| [prismjs](https://prismjs.com/)                                                        | MIT                |
| [qs](https://github.com/ljharb/qs)                                                     | BSD-3-Clause       |
| [react-apexcharts](https://www.npmjs.com/package/react-apexcharts)                     | MIT                |
| [react-beautiful-dnd](https://react-beautiful-dnd.netlify.com)                         | Apache License 2.0 |
| [react-big-calendar](https://jquense.github.io/react-big-calendar/examples/index.html) | MIT                |
| [react-draggable](https://github.com/react-grid-layout/react-draggable)                | MIT                |
| [react-dropzone](https://react-dropzone.js.org/)                                       | MIT                |
| [react-helmet-async](https://github.com/staylor/react-helmet-async)                    | Apache License 2.0 |
| [react-image-file-resizer](https://github.com/onurzorluer/react-image-file-resizer)    | MIT                |
| [react-infinite-scroll-component](https://react-infinite-scroll-component.netlify.com) | MIT                |
| [react-markdown](https://remarkjs.github.io/react-markdown/)                           | MIT                |
| [react-number-format](https://github.com/s-yadav/react-number-format)                  | MIT                |
| [react-perfect-scrollbar](https://www.npmjs.com/package/react-perfect-scrollbar)       | MIT                |
| [react-window](https://react-window.now.sh)                                            | MIT                |
| [tai-password-strength](https://tests-always-included.github.io/password-strength/)    | MIT                |
| [uuid](https://github.com/uuidjs/uuid)                                                 | MIT                |
| [validate.js](http://validatejs.org/)                                                  | MIT                |
| [web-vitals](https://web.dev/vitals)                                                   | MIT                |
| [workbox](https://developers.google.com/web/tools/workbox)                             | MIT                |

## 目录结构

```
simple-pocket-book/
├── android/
├── build/
├── config/
├── electron/
├── ios/
├── public/
├── script/
├── src/
|   ├── assets/
|   ├── components/
|   ├── layouts/
|   ├── mock/
|   ├── reducers/
|   ├── routes/
│   |   └── navigationConfig.ts
|   ├── service/
|   ├── store/
|   ├── theme/
|   ├── types/
|   ├── utils/
|   ├── views/
|   ├── App.tsx
|   ├── index.tsx
|   ├── react-app-env.d.tsx
|   ├── reportWebVitals.tsx
|   ├── service-worker.ts
|   ├── serviceWorkerRegistration.ts
|   ├── setupProxy.js
│   └── setupTests.ts
├── tests/
│   └── e2e/
├── .browserslistrc
├── .editorconfig
├── .env.development
├── .env.production
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .gitlab-ci.yml
├── .lighthouserc.js
├── babel.config.js
├── capacitor.config.json
├── commitlint.config.js
├── jest.config.js
├── nightwatch.conf.js
├── package.json
├── package-lock.json
├── purgecss.config.js
├── styleguide.config.js
├── stylelint.config.js
└── tsconfig.json
```

- `android/` `ios/`：原生 APP 代码，非相关人员请不要进行开发
- `build/`：项目构建结果
- `config/`：webpack 配置
- `electron/`：Electron 相关代码
- `public/`：静态文件，不受webpack影响
- `scripts/`：命令行相关脚本
- `src/`：**项目源代码**
- `tests/`：测试源代码
  - `e2e/`：E2E 测试代码
- `.browserslistrc`：Browserslist 配置文件，配置浏览器兼容性
- `.editorconfig`：编辑器配置
- `.env.development` `.env.production`：环境配置
- `.eslintignore`：忽略不需要 ESLint 检查的目录或文件
- `.eslintrc.js`：ESLint 配置
- `.gitignore`：忽略不需要 Git 提交的目录或文件
- `.gitlab-ci.yml`：Gitlab CI 配置
- `.lighthouserc.js`：lighthouse 检查配置，在 CI 环境下运行
- `babel.config.js`：Babel 配置
- `capacitor.config.json`：Capacitor 配置
- `commitlint.config.js`：commitlint 配置
- `jest.config.js`：Jest 配置
- `nightwatch.conf.js`：Nightwatch.js 配置
- `package.json`
- `package-lock.json`
- `purgecss.config.js`：PurgeCSS 配置
- `styleguide.config.js`：React Styleguidist 配置
- `stylelint.config.js`：stylelint 配置
- `tsconfig.json`：TypeScript 配置

### `src/`

- `reducers/` `store/`：Redux相关代码
- `assets/`：静态文件目录（例如图片）
- `components/`：项目公共组件
- `layouts/`：页面布局组件
- `mock/`：mock，模拟 HTTP 请求
- `routes/`：路由配置目录
  - `navigationConfig.js`：侧边导航配置文件
- `services/`：HTTP 请求封装方法
- `theme/`：页面主题配置（颜色，字体大小等）
- `types/`：公用 Types
- `utils/`：工具 JS 函数
- `views/`：**页面组件**
- `App.tsx`：根组件
- `index.tsx`：页面入口文件
- `react-app-env.d`：React Types
- `reportWebVitals.ts` `service-worker.ts` `serviceWorkerRegistration.ts`：PWA 相关代码
- `setupProxy.js`：HTTP 代理配置，正式环境不会运行，用于开发时联调 RESTful 接口
- `setupTests.ts`：测试代码公用前置代码

## 构建流程

本次项目使用 CRA 脚手架直接生成，虽然完全自己搭框架也不难，但是 CRA 官方的功能已经很全面，并且提供一个非常完善的文档，这在团队内部沟通的时候，节省了很多配置上的沟通成本。

现在的 CRA 脚手架基于 Webpack 4，但是在此基础上，我对 Webpack 配置做了些许改造，用于优化构建效率和优化产出结果。

### 优化构建效率

我使用了以下方法，来提升项目的构建效率：

- `thread-loader`：启用多线程执行 Babel/TypeScript 转译
- `cache-loader`：缓存 Babel/TypeScript 转译

### 优化产出结果

对于项目产出结果，使用了以下方法优化：

- `compression-webpack-plugin`：产生 Brotli 和 Gzip 压缩文件，与 nginx 配合可以降低服务器 CPU 的负载
- `imagemin-webpack-plugin`：使用 Imagemin 压缩图片，优化图片的加载效率
- `preload-webpack-plugin`：产生 preload 和 prefetch 文件，用于文件预加载
- `prerender-spa-plugin`：部分页面使用预渲染模式，减少 JS 文件加载等待时间的白屏
- `webpack-subresource-integrity`：为资源文件生成 subresource integrity，提高资源的安全性
- 第三方库优化：一些第三方库自带 Webpack 插件或者 Babel 插件，可使第三方库的代码具备 Tree Shaking
- 常规优化：平常用的优化手段，如：代码分割、代码压缩、产生 hash 文件名等等

> 使用此类插件，虽然优化了产出结果，但是相应的会让项目的构建时间变长（特别是 Imagemin 插件）。不过我认为，在性能优化和安全性提升下，这个收益损耗比是值得的，特别是在正式项目会有 CI 的情况下，使得构建时间长的问题不是那么明显。

> 后续有条件的话，会升级到 Webpack 5

## 代码维护

对于团队项目而言，代码维护除了团队 Code Review、使用设计模式、重构等方法，还可以通过以下非人工的工具来提升代码质量从而加强代码维护性，使开发人员的精力更集中在代码设计上。

我一直坚信，更加严格的代码，才能产出更好质量的项目。

### 代码检查

#### ESLint

与许多项目一样，这里使用了 ESLint 作为代码检查工具，但是配置则使用了比较严格的配置：

- **Airbnb JavaScript Style Guide for TypeScript**：Airbnb 的 JavaScript 风格检查，支持 React 和 TypeScript
- **Airbnb JavaScript Style Guide for React Hooks**：Airbnb 对于 React Hooks 检查的扩展
- **TypeScript ESLint Plugin**：TypeScript 的代码检查
- **MUI unused classes Plugin**：检查 MUI 是否有未使用的 class

> 相比于 JavaScript Standard Style，Airbnb JavaScript Style 更加严格，对 Git 更加友好，并且 Airbnb 公司身为 React 框架的资深实践者，对于 React 的支持更好。

#### stylelint

此项目使用了 stylelint 用于检查 CSS，规范则是 Bootstrap 相关规范。

> Bootstrap 规范对 CSS-in-JS 不是特别友好，如果有特别好的 CSS-in-JS 代码检查规范，可以推荐给我。

### 静态类型

TypeScript 作为一种类型语言，TypeScript 可以在构建时发现 bug 和错误，这样程序运行时就可以避免此类错误，从而提供开发效率。

### 单元测试

React 使用组件化的开发方式，使得代码的测试更为简单。

Jest 是 Facebook 出品的 JavaScript 测试运行器。它可以使用 `jsdom` 操作 DOM 。并且它功能强大且易于编写测试代码。对 React 项目可以开箱即用。

React Testing Library 是用于测试 React 组件的非常轻量级的解决方案。它在 `react-dom` 和 `react-dom/test-utils` 的基础上提供了轻量级的实用程序功能。与 Enzyme 不同， React Testing Library 更倾向于实际的 DOM 节点一起使用。

> 这里之所以选用了 React Testing Library 而不选用 Enzyme，是因为 React Testing Library 更贴近实际组件的使用方式，而 Enzyme 更关注组件的实现细节。并且现在 Enzyme 还不支持 React 17，在得到官方支持后，可以探索 Enzyme 和 React Testing Library 并存的方案。

> 这里单元测试仅仅只针对了基础组件，对于业务组件在紧张的开发周期和复杂的需求变更下，如何编写单元测试还值得探索和讨论

### E2E 测试

E2E 测试使用了，Nightwatch.js。 它使用 W3C 推荐的 WebDriver API ，而且支持 Selenium Server 。

> 此次没有编写 E2E 测试代码，因为我认为 E2E 测试偏向于 UI 测试，属于测试金字塔的顶层，应该由测试开发人员编写

## 性能优化

性能优化是长期过程，下面仅仅列出一部分。

### 路由懒加载

通过路由懒加载，可以避免在构建时出现 bundle 过大的而影响加载的情况，而且可以启用 PRPL 模式。

React 自带 `lazy` 方法，可以用于路由懒加载。

### 避免非必要的渲染

由于本次项目使用的全是函数组件，没有 `shouldComponentUpdate`，但是可以用几个 Hooks 来触发此功能：

- `useCallback`：缓存函数，允许你在重新渲染之间保持对相同的回调引用以使得 `shouldComponentUpdate` 继续工作
- `useMemo`：缓存数据，有助于避免在每次渲染时都进行高开销的计算

### 节流和防抖

节流和防抖阻止函数被调用太快或者太多次，从而在执行上优化性能。

- 节流（throttle）：阻止函数在给定时间窗口内被调不能超过一次
- 防抖（debounce）：防抖确保函数不会在上一次被调用之后一定量的时间内被执行

### 预渲染

预渲染是指通过渲染机制，直接生成静态的 HTML 结构，而非使用 JavaScript 执行后生成。

相对于不使用预渲染的页面，使用预渲染可以达到更快的内容到达时间 (time-to-content)，特别是对于缓慢的网络情况或运行缓慢的设备。无需等待所有的 JavaScript 都完成下载并执行，才显示页面。而是在HTML 和 CSS 加载完之后即开始渲染页面，减少了白屏等待时间。

> 此外，预渲染也有助于改善 SEO，但是此类平台的 SEO 收益并不大。同理，也因为成本收益问题，使用了预渲染而没有使用 SSR。预渲染只用于首页、登录注册页、错误页面等不需要经常变动的页面

> webpack 会生成部分页面的预渲染

### PWA

严格来说，把 PWA 放在性能优化里并不合适，PWA 不仅仅提升了性能，还提升了用户体验、安全性，增加了用户对应用的粘性。

PWA 使用了 Service Worker，并且用了 Cache API，把文件缓存起来，并提供离线缓存，在弱网络环境的情况下，这能减少用户在页面等待的时间。

在应用发生更新之后，利用 Service Worker 的生命周期，可以把旧应用先提供给用户，在 Service Worker install 之后，给予用户选择权刷新页面或者等待下次访问时更新。

### PRPL 模式

PRPL 模式是 Push（Preload）、Render、Pre-cache、Lazy load 的缩写，是一种让网页加载变得更快速的模式

- HTTP/2 Server Push：HTTP/2 引入了服务器推送，允许服务器直接提供浏览器渲染页面所需资源，而无须浏览器在收到、解析页面后再提起一轮请求，节约了加载时间
- `dns-prefetch`：DNS 预解析，尝试在请求资源之前解析域名，减少延迟以提升加载性能
- `preconnect`：提前建立 TCP 连接以及执行 TLS 握手，减少延迟以提升加载性能
- `preload`：先获取和缓存对应资源，对关键资源使用
- `prefetch`：事先获取和缓存未来的浏览有可能需要加载目标资源，优化用户体验
- pre-cache：使用 Service Worker 提前缓存资源，以便后续离线使用
- lazyload：懒加载其他路由和非关键资源

> webpack 会生成 preload/prefetch 资源

### 服务器优化

- HTTP 缓存：通过复用以前获取的资源，减少了等待时间和网络流量。`Cache-Control`、`Expires`、`ETag` 可以控制缓存
- Brotli/Gzip：通过启用 HTTP 压缩，可以减少资源的加载时间，降低对于带宽的要求

## 安全性

安全性也是一个长期过程，并且比较依赖于服务器，本文也仅仅列出一部分。

### 对提交参数进行校验

虽然对表单的校验工作更应该由后端进行，但是前端也需要进行前端校验，不仅仅是为后端 API，保驾护航，还提升了前端自身安全性，更提升了用户体验。

### HTTPS

HTTPS 经由 HTTP 进行通信，但利用 SSL/TLS 来加密数据包。HTTPS 的主要目的，是提供对网站服务器的身份认证，保护交换资料的隐私与完整性。

启用 HTTPS 不仅对安全性有所提升，而且他还能启用 PWA、Brotli、HTTP/2 以及一些安全环境的API，对应用的性能和用户体验均有所提升。收益颇高。

### 内容安全策略

CSP 通过要求开发人员将其资源从中检索的源列入白名单来削弱 XSS 攻击。它有助于减少跨域脚本和减少数据包监听攻击。

> 美中不足的是，因为 CSS-in-JS 的缘故，要完美解决 CSP 需要使用 `Content-Security-Policy: style-src: 'self' 'nonce-<base64-value>;` 这样的配置，但是这需要使用 SSR 才能使用。

### 子资源完整性

子资源完整性(SRI)是允许浏览器检查其获得的资源是否被篡改的一项安全特性。它通过验证获取文件的哈希值是否和你提供的哈希值一样来判断资源是否被篡改。

在使用 CDN 的场景下，启用 SRI 可以避免因为 CDN 被攻击导致的文件篡改从而引发的 XSS 攻击。

> SRI 会由 webpack 生成

### HTTP 安全 Headers

可以配置一些 HTTP Headers，增加安全性：

- `Referrer-Policy: strict-origin-when-cross-origin`：对于同源的请求，会发送完整的URL作为 `Referrer`；在同等安全级别的情况下，发送文件的源作为 `Referrer`(HTTPS->HTTPS)；在降级的情况下不发送此 Headers (HTTPS->HTTP)
- `X-Content-Type-Options: nosniff`：提示客户端一定要遵循在 `Content-Type` 首部中对  MIME 类型 的设定，而不能对其进行修改
- `X-Frame-Options: DENY`：不允许在 frame 中展示，即便是在相同域名的页面中嵌套也不允许
- `X-XSS-Protection: 1; mode=block`：启用XSS过滤。 如果检测到攻击，浏览器将不会清除页面，而是阻止页面加载
- `X-Download-Options: noopen`：禁用 IE 下下载框 Open 按钮，防止 IE 下下载文件默认被打开 XSS

## 原生渲染

作为扩展能力，框架内置了 Electron 和 Capacitor，分别作为桌面应用和手机 APP 的构建工具，同时也能完善一部分原生场景的开发。

- **Electron**：Electron 是使用 Web 技术构建桌面应用的框架。它可以创建 Windows 、 macOS 和 Linux 跨平台的桌面应用
- **Capacitor**：Capacitor 可以用来构建 iOS APP 和 Android APP，并且兼容 Cordova 插件。

> Capacitor 是本次项目过程中的最大发现（我们实际项目用的依然是 Cordova 作为手机 APP 构建平台），但是如果落实到具体产品，我希望永远不要用到这个。使用 Capacitor/Cordova 是出于成本上的考量（我们团队APP不是主力产品，并且没有专职的开发工程师），在成本条件允许的情况下，我更倾向于 APP 产品使用 React Native 、 Flutter 甚至是原生开发，这样能获得更完善的开发生态和APP性能。

> 本次项目因为时间关系，没有针对 Electron 和 Capacitor 进行开发，仅仅作为框架层面的预留

## 文档

对于内置的公共组件，我们使用了 React Styleguidist 生成文档方便团队内部参阅。同时，这也提高了组件 Props 的注释率。

对于函数和模块，推荐使用 JSDoc 的方式注释代码。

## 用户体验

UI 框架使用了 MUI，它基于 Google 的 Material Design，提供统一化的视觉风格。在 React 生态的 UI 框架中，MUI 的社区相对而言比较活跃，组件和文档也非常成熟。

本次项目也使用了响应式设计，能同时支持多个设备的浏览。

由于 PWA 的启用，能在桌面和移动端进行安装，从而提升了用户粘性。

> 相比较于 Ant Design，MUI 在风格上更贴近于操作系统，即便出现 UI 的同质化，系统级别的同质化还是比应用级别的同质化更容易被人接受。

## CLI

### `start`

运行开发模式

```bash
npm start
```

### `build`

构建生产 bundle

```bash
npm run build
```

### `test:unit`

运行单元测试

```bash
npm run test:unit
```

### `test:unit:watch`

使用 watch 模式运行单元测试，用于测试开发过程

```bash
npm run test:unit:watch
```

### `test:coverage`

运行代码覆盖率测试

```bash
npm run test:coverage
```

### `test:e2e`/`test:e2e:chrome`/`test:e2e:firefox`

运行 E2E 测试

```bash
npm run test:e2e # 运行所有环境的 E2E 测试
npm run test:e2e:chrome # 运行 Chrome 环境的 E2E 测试
npm run test:e2e:firefox # 运行 Firefox 环境的 E2E 测试
```

### `lighthouse`

运行 Lighthouse 测试

```bash
npm run lighthouse
```

> 建议在 CI 环境运行

### `lint`/`lint:css`/`lint:js`

运行代码检查

- CSS： 使用 stylelint 检查（包括 CSS-in-JS）
- JS/TS： 使用 ESLint 检查

```bash
npm run lint
npm run lint:css
npm run lint:js
```

### `format`/`format:css`/`format:js`

格式化代码

```bash
npm run format # 格式化所有代码
npm run format:css # 格式化 CSS 代码（包括 CSS-in-JS）
npm run format:js # 格式化 JS/TS 代码
```

> 注意：该命令可能失败，无法格式化的代码请手动处理

### `styleguide`

预览组件文档

```bash
npm run styleguide
```

### `styleguide:build`

生成组件文档

```bash
npm run styleguide:build
```

### `changelog`

生成 `CHANGELOG.md` 文件

```bash
npm run changelog
```

### `analyze`

生成 bundle 分析报告，以便进行性能优化

```bash
npm run analyze
```
