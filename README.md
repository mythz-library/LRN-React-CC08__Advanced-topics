# Learn React - Advanced Topics

Under the advanced topics we'll discuss about the latest features of React

<br/>

---

<br/>

## React Context API

- **File Naming Convention:** camel-case (e.g., userContext.js)

<br/>

- Application can have many different contexts like,
  - UserContext: _to share currently logged in user_
  - ThemeContext: _to share current theme across components_

<br/>

- After create a context, we should
  - provide it on Root (component that has state we're trying to globalize)
  - consume it on child

<br/>

- Each context has 3 different properties
  - Provider: _used to provide the context on root_
  - Consumer: _used to consume the context on child_
  - displayName: _used to rename the display name of context on component hierarchy. To evaluate, use 'React Dev Tools'_

> 📝 `<UserContext.Consumer>` component expects a function as a child. To return child component through a function we can use lambda expression as follows

```js
<UserContext.Consumer>
    // Returns child by using lambda expression
    {userContext => <div>Movie List</div>}
<UserContext.Consumer>
```

<br/><br/>

### > <ins>Context in Class Components</ins>

- In some situations, we have to use/consume the context out side of the `render()` method. How to do that? There are 2 ways to achieve it.

  1. After creating the class of the component, set one of its static property as follows

     ```js
     // Let's assume this component is 'MovieList'
     MovieList.contextType = UserContext;
     ```

     ```js
     // Accessing context in componentDidMount() method
     componentDidMount() {
      console.log("context", this.context)
     }

     ```

  2. Instead set context after creating the class, set it as a part of the class

     ```js
      class MovieList extends Component {
       static contextType = UserContext;

       ...
      }
     ```

<!-- ### <ins>Context in Class Component</ins> -->
