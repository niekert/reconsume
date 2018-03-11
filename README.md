# Reconsume

Reconsume is a set of re-usable React components and higher order functions that makes it easier for you to deal with state of components higher in the render tree.

## The problem

In React we use `state` and `props` to to tell our components when they should get rerendered.
If a child component needs to be rerendered when something somewhere up the tree has changed, we use `setState()` and pass props all the way down to the child component that needs to work with this data. In larger apps this can become cubersome, because you'll have to keep track of a lot of props that need to be passed down all the time.

Libraries like [redux](https://github.com/reactjs/redux) and [mobX](https://github.com/mobxjs/mobx) solve this problem by allowing you to keep a global state and
injecting the required data in your components regardless of where they are in the render tree.

This works great. But in certain cases you want to scope the data based on the render tree. This library provides you with some components and helper functions which might be useful for that.

## Do not use in production

This library is far ready and I'm not even sure yet whether it's even a good idea.

## API Docs

### MergedContext

#### MergedContextConsumer

MergedContextConsumer provides a way for you to provide your components with an object that is merged with the closest `<MergedContextConsumer />` object higher up in the component tree
This is a contrived example, but keep in mind that each `<MergedContextConsumer>`s in the example can be places anywhere in your app.

This can be useful when you're doing UI analaytics, and want to include some contexts of where a component is rendered in your tree, as you can easily inherit props from parent components without having to explicitely pass them down

```js
const Example = () => (
  <MergedContextConsumer value={{ page: 'example-page' }}>
    {values => ( // { page: example-page }
      <Header>
        <MergedContextConsumer value={{ layout: 'header' }}>
          {values => (
            // Values is
            // { page: 'example-page', layout: 'header' }
          )}
        </MergedContextConsumer>
      </Header>
      <PageContent>
        <MergedContextConsumer value={{ layout: 'content' }}>
          {values => (
            // Values is
            // { page: 'example-page', layout: 'content' }
          )}
        </MergedContextConsumer>
      </PageContent>
    )}
  </MergedContextConsumer>
);
```

### withMergedContext

Instead of using the render prop API, you can also choose to use a HOC, which is useful if you need the props in component lifecycle methods or
if you want to compose with another component

```js
withMergedContext(
  propsMapper: (ownerProps: Object) => Object | Object,
): HigherOrderComponent
```

```js
const enhanced = compose(
  withMergedContext({ page: 'example-page' }),
  // Imagine these HOCS are used in separete components, this is just for illustration
  withMergedContext(props => ({ layout: `${props.page}-header` })),\
)(ExampleComponent);

const ExampleComponent = ({ contextValues }) => {
  /**
   * contextValues are
   * { page: 'example-page', layout: 'example-page-header' }
}
```

### ViewportSizeProvider / ViewportSizeConsumer

ViewportSizeProvider is useful if you want a any of components below it in the render tree to be able to get the browser's ViewportSize using `ViewportSizeConsumer`.
ViewportSizeProvider binds a resize listener to the window object so you only have to use it at a single location in your app.

```js
import { ViewportSizeProvider, ViewportSizeConsumer } from 'reconsume';

const App = () => (
  <ViewportSizeProvider>
    <Header>// Header code</Header>
    <ExampleComponent />
  </ViewportSizeProvider>
);

const ExampleComponent = () => (
  <ViewportSizeConsumer>
    {({ innerWidth, innerHeight }) => {
      // do stuff with browser size here.
    }}
  </ViewportSizeConsumer>
);
```

### ContainerSizeProvider / ContainerSizeConsumer

ContainerSizeProvider and ContainerSizeConsumer provide a way for components deeper in the render tree to react to the resizing of a component higher-up in the tree.

```js
import { ContainerSizeProvider, ContainerSizeConsumer } from 'reconsume';
const App = () => (
  <ContainerSizeProvider>
    {setElementRef => (
      <Header>
        // Header code
      </Header>
      <div ref={setElementRef}> // Pass the setElementRef to the component that you want to measure
        <ExampleComponent />
      </div>
    )}
  </ContainerSizeProvider>
)

const ExampleComponent = () => (
  <ContainerSizeConsumer>
    {({ left, right, top, width, height }) => {
      // You can do things based on the parent component's size here
    }}
  </ContainerSizeConsumer>
)
```
