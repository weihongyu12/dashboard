权限拦截，该组件可能会跳转页面：
- 如果用户未登录，跳转到登录页面
- 如果登录用户的角色编码不在 `roles` 数组中，跳转到 403 页面

用于 views 根组件

```jsx static
<AuthGuard roles={[/*...roles*/]}>
  {/*...*/}
</AuthGuard>
```
