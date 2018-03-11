# Reconsume

Reconsume is a set of re-usable React components and higher order functions that help you solve common problems when building a UI for your app

## The problem

In React we use `state` and `props` to to tell our components when they should get rerendered.
If a child component needs to be rerendered when something somewhere up the tree has changed, we use `setState()` and pass props all the way down to the child component that needs to work with this data. In larger apps this can become cubersome, because you'll have to keep track of a lot of props that need to be passed down all the time.

Libraries like [redux](https://github.com/reactjs/redux) and [mobX](https://github.com/mobxjs/mobx) solve this problem by allowing you to keep a global state and
injecting the required data in your components regardless of where they are in the render tree.

This works great. But in certain cases you want to scope the data based on the render tree. This library provides you with some components and helper functions which might be useful for that.

## Do not use in production

This library is far ready and I'm not even sure yet whether it's even a good idea.

##
