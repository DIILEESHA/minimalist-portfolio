// const MyComponent = React.lazy(() => import('./MyComponent'));

function MyLazyComponent() {
return (
<React.Suspense fallback={<div>Loading...</div>}>
<MyComponent />
</React.Suspense>
);
}