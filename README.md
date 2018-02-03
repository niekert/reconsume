# React-ui-analytics

React-ui-analytics is a simple higher-order-component that helps you manage tracking a user's location in your app without having to
pass props to each of those components. It uses React's new Context api API (currently polyfilled with `react-broadcast`) to achieve this

## API Docs

### `withAnalytics()`

```js
withAnalytics(
  analyticsProps: (ownerProps: Object) => Object | Object
): HigherOrderComponent
```

Accepts an object with props or a function that maps owner props to a new collection of props.
The given props are merged with the the analytics props set somewhere higher in the tree.

### Example

Check out the [example project](/example/source) which is hosted here: http://react-ui-analytics.surge.sh/
