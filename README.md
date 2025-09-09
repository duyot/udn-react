# This is to track the knowledge of ReactJS
## Roadmap
1. Components, JSX, 
2. Props, State, Events Handling and Forms
3. Hooks: useState/useEffect/useContext/useReducer
4. Component Lifecycle & Effects
5. Routing and State Management
6. Practice and Projects

## Introduction
1. React is a library deveploped by Facebook for creating SPA applications
2. React apps are make up by *components*, that contains a JSX template, utimated output HTML elements

## Setup an React app
```bash
npm create vite@latest my-app

cd my-app

npm install

npm run dev
```

## why reacts?
1. Composable: can created easily reuseable and interchargeable that can be combined in various ways in a complex system
2. Declarative: 

### Component

*all React components must act like pure function concerning their props*
### JSX
1. AN html-like syntax called JSX, it will convert all the thing into actual JavaScript
### Props
1. props is a singler object, that allow to pass data from our custom tag to the JSX template
```jsx
    <Product name="Product 1" price={100} />

    <Fragment><h1>{this.props.name + ' ' + this.props.price}</h1></Fragment>
```
2. props should be *readonly*

### State
1. Its similar to props, as an objects but its private and controlled by component
2. State changes -> UI re-render
```jsx
  constructor(props){
    super(props);
    this.state = {rating: this.props.rating};
  }
  ```

### Hooks
1. What is Hooks: can now use function components to manage state and side effects.