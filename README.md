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

## Component

*all React components must act like pure function concerning their props*
## JSX
1. AN html-like syntax called JSX, it will convert all the thing into actual JavaScript
## Props
1. props is a singler object, that allow to pass data from our custom tag to the JSX template
```jsx
    <Product name="Product 1" price={100} />

    <Fragment><h1>{this.props.name + ' ' + this.props.price}</h1></Fragment>
```
2. props should be *readonly*

## State
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
2. The words start with "use" like useState, useEffect, useContext, useReducer are examples of React Hooks

### useState
1. a function, that apply for function components to manage state across re-renders and setter function to update the state

```jsx
    const [state, setState] = useState(initialState);
```
2. state may be any type of data including objects and arrays. while working with objects and arrays, should create a new object or array to update the state
```jsx
  const [todos, setTodos] = useState([
  { id: 1, text: "Learn React", done: false },
  ]);


  setTodos([...todos, { id: Date.now(), text, done: false }]);
```

3. If the next value depends on the previous one, use the updater function:
```jsx
  setCount((c) => c + 1);
```


4. Mini cookbook
```jsx
function addN(n) {
  setCount(c => c + n);
}
setIsOpen(o => !o);

setList(l => [...l, item]);                       // add
setList(l => l.map(x => x.id===id ? {...x, v:1} : x)); // update
setList(l => l.filter(x => x.id !== id));         // remove

const initial = { a: 1, b: 2 };
const [state, setState] = useState(initial);
const reset = () => setState(initial); // if initial is constant
  ```

  ### useEffect
1. To run along side while react rendering the component
```jsx
useEffect(() => {
  //perform effect

  //clean up function
  return () => {}
}, 
//variables to watch
[var1, var2]
)
```

2. When in doubt, ask: Am I syncing with something outside React? If not, you probably don’t need an effect.