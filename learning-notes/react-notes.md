# React Notes

## What is React?

React is an **open-source view library** created and maintained by **Facebook**. It's designed to efficiently render the **User Interface (UI)** of modern web applications.

## JSX: JavaScript + HTML

React uses a syntax extension of JavaScript called **JSX** (JavaScript XML). JSX allows you to write HTML-like code directly within JavaScript.

### Why JSX?

- Lets you use the full power of JavaScript within HTML.
- Makes your code more readable and expressive.
- Feels familiar if you already know HTML, but with a few key differences.

### Example:

```jsx
const element = <h1>Hello, world!</h1>;
```
## Embedding JavaScript in JSX

Since JSX is a syntactic extension of JavaScript, you can embed actual JavaScript expressions inside JSX using curly braces {}.

```jsx
const name = 'React';
const element = <h1>Hello, {name}!</h1>;
```

## Compilation and Transpiling

JSX isn't valid JavaScript on its own. It must be compiled into plain JavaScript before browsers can understand it. This is where Babel comes in — a popular transpiler that takes your JSX and turns it into standard JavaScript.

> 🛠 In most development setups (like Create React App or these learning environments), Babel is already pre-configured and running behind the scenes.

If your JSX has syntax errors, Babel will throw an error and your code won’t render.

## Rendering with ReactDOM

Under the hood, JSX is rendered using:

```js
ReactDOM.render(JSX, document.getElementById('root'));
```

This function inserts your JSX into React's virtual DOM (a lightweight copy of the real DOM). React then compares the virtual DOM snapshots to update only the necessary parts of the actual DOM — making updates super fast and efficient.

---

> 📌 React = Declarative UI + Virtual DOM + JSX + Component-based architecture.

---

## Nested JSX and the One Parent Rule

JSX can represent more complex HTML structures — not just single elements. But here’s the catch: **JSX must return a single parent element**.

### ❗ Why?

JSX relies on returning a single wrapper to encapsulate all nested content. Multiple sibling elements without a parent wrapper will throw a syntax error during transpilation.

### ✅ Valid JSX:

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```
### ❌ Invalid JSX (no parent wrapper):
```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```
You’ll get a big ol’ red error because JSX doesn’t like siblings without a parent. You’ve gotta wrap them like it's the holidays.

---

### Creating a Complex JSX Element
Let’s define a JSX constant that includes an h1, a p, and a ul with three li items — all properly wrapped inside a div.

```jsx
const JSX = (
  <div>
    <h1>This is a Heading</h1>
    <p>This is a paragraph explaining the heading.</p>
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  </div>
);
```
> 🧠 Pro Tip: Wrapping JSX in parentheses like above isn’t required, but it improves readability — especially for multi-line JSX.

If you remove the <div> wrapper, this JSX won’t transpile. This pattern will show up again when returning JSX from React components. Always return a single parent!

## Commenting in JSX

JSX gets compiled into valid JavaScript, but because of its HTML-like structure, **commenting works a bit differently** than regular JS.

### 💬 JSX Comment Syntax:

To add comments *inside* JSX (i.e., within the return or render block), use:

```jsx
{/* This is a comment inside JSX */}
```
Example:
```jsx
const JSX = (
  <div>
    <h1>Welcome!</h1>
    {/* This paragraph explains the heading */}
    <p>This is a paragraph of text.</p>
  </div>
);
```
> ⚠️ Comments outside of JSX (like before the return statement) can still use regular // or /* */ JavaScript syntax. But inside JSX, you must use {/* comment */} or it’ll blow up in your face (syntax error).

## Rendering JSX with ReactDOM

You've already seen how JSX lets you write HTML-like code in JavaScript. But how does it actually end up on the page?

Enter: **ReactDOM** — the React library responsible for rendering elements to the DOM.

### 🛠 ReactDOM.render()

This method injects your JSX or React component into a specific location in your HTML.

```js
ReactDOM.render(componentToRender, targetNode);
```

- componentToRender: The JSX element or React component you want to render.
- targetNode: The DOM node where you want the content to appear — typically something like document.getElementById('root').

```jsx
const JSX = <h1>Hello from React!</h1>;

ReactDOM.render(JSX, document.getElementById('root'));
```
> 🧠 Just like variables, JSX elements must be declared before they’re used. So always define your JSX before calling ReactDOM.render() — or you'll run into reference errors that’ll ruin your vibe.

## JSX vs. HTML: Key Differences

At first glance, JSX looks *almost* identical to HTML. But don’t be fooled — there are a few important differences that can catch you slipping if you’re not careful.

### 🚫 `class` is a Reserved Word

In HTML, you’d write:

```html
<div class="container"></div>
```
But in JSX, this will throw a syntax error because class is a reserved word in JavaScript.

## ✅ Use className in JSX:
```jsx
<div className="container"></div>
```
Yep, className is the JSX-approved way to apply CSS classes.

---

## 🔀 Attribute Names are camelCase
In JSX, all HTML attributes and event handlers follow camelCase naming conventions.
| HTML        | JSX         |
| ----------- | ----------- |
| `onclick`   | `onClick`   |
| `onchange`  | `onChange`  |
| `maxlength` | `maxLength` |
| `tabindex`  | `tabIndex`  |

### Example:
```jsx
<button onClick={handleClick}>Click Me</button>
<input onChange={handleChange} maxLength={30} />
```
> 💡 TL;DR: When in doubt, camelCase it. If it feels like regular HTML, double check the attribute names!

## Self-Closing Tags in JSX

You've already tackled the `className` vs `class` difference — now it’s time to unpack how **self-closing tags** work in JSX (spoiler: it’s different from HTML).

### 🧱 HTML vs JSX: Void Elements

In HTML, most tags have an open/close format:

```html
<div></div>
```

But there are void elements (elements with no content) like:
```html
<br>
<img>
<input>
```

These can optionally be written like <br />, but HTML doesn’t require it — and writing <br></br> is actually invalid.

---

## 🚀 JSX Requires Explicit Closing
In JSX, every element must be properly closed. So void elements like <br> must be written as:

```jsx
<br />
<img src="image.png" />
<input type="text" />
```
This is mandatory — JSX won't compile if you forget the slash!

---

### ✅ Even Non-Void Tags Can Be Self-Closed
JSX lets you self-close any tag — but only if it has no children.

```jsx
// Normal div
<div></div>

// Self-closed div (no children allowed)
<div />
```
> ⚠️ Use <div /> only when the element doesn’t wrap anything. Otherwise, use <div></div> to include child content inside.

## 💡 Why This Matters:
You’ll use this syntax a lot when rendering custom React components that don’t have children — kinda like writing:

```jsx
<MyComponent />
```
Instead of:

```jsx
<MyComponent></MyComponent>
```
Same output, cleaner syntax.

## Creating Stateless Functional Components

React is all about components. If your app was a band, components would be every single member *and* their instruments — working together to make a banger UI.

### 🎭 What is a Component?

A **component** is a reusable, isolated piece of UI. Think of each component like a building block — stack enough of them together, and boom 💥, you've got a full-blown web app.

---

### ✌️ Two Ways to Create a Component

This section covers the **first** method: **stateless functional components** (a.k.a. function components).

### ✅ Functional Component Syntax:

```jsx
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

- Must start with a capital letter (DemoComponent) — otherwise React treats it like a regular HTML tag.
- Must return JSX or null.
- className is used instead of class (you know the drill).

---

## 📦 What Makes It "Stateless"?
A stateless functional component:

- Can receive props (data).
- Can render JSX.
- ❌ Does not track or manage state.

> Don’t worry — we’ll get into state soon. Right now, think of this as a dumb component that takes stuff in and shows it off.

## 🧱 Composing Components
One of React’s biggest strengths is component composition — breaking your UI into smaller parts and assembling them like LEGO bricks.

```jsx
const Header = () => <h1>Welcome</h1>;
const Body = () => <p>This is the main content.</p>;

const App = () => (
  <div>
    <Header />
    <Body />
  </div>
);
```

Now App is a combo meal made of two tasty components 🍔.

## Creating Class Components in React (ES6 Style)

We’ve seen how to create **functional components**, which are great for simple rendering. But if you want your component to *do* more (think internal state, lifecycle methods, etc.), it’s time to bring out the big guns: **ES6 class components**.

---

### 🧠 Syntax Breakdown

```jsx
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```
### Here’s what’s going on:

- Kitten is a class component.
- It extends React.Component → giving it access to all the juicy React features like state and lifecycle methods.
- It has a constructor(props) which:

  - Calls super(props) → this is required to initialize the component properly.
  - Will later be used to set up state or bind methods.

---

## 🧰 Why Use a Class Component?
Use class components when:

- You need to manage state internally.
- You want to tap into lifecycle hooks (like componentDidMount, componentDidUpdate, etc.).
- You’re building something more complex than just a static render.

---

## 📏 Pro Tips
- Always call super(props) inside the constructor. No super, no soup for you 🍜.
- Even if your constructor is empty for now, include it when you’re laying the foundation — future-you will thank present-you.

---

### 🔮 Spoiler Alert
We’ll get into state, props, and lifecycle methods soon. For now, just know that class components unlock the ability to go beyond just “rendering stuff.”

## Composing Multiple Components Together

So you’ve got a few components — `Navbar`, `Dashboard`, and `Footer`. Cool. But now you want to actually *build* something with them. That’s where **composition** comes in.

---

### 🧩 What is Component Composition?

It’s the idea of combining **smaller components** inside a **larger one** to create a full UI. Think of it like nesting boxes inside a bigger box 🎁.

### 🏗️ Example: Assembling an App

```jsx
const App = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
};
```
In this example:

- App is the parent component.
- Navbar, Dashboard, and Footer are child components.
- They’re rendered inside <App /> using custom HTML-like tags.

React recognizes these tags (like <Navbar />) as references to other components, and will render them right where you call them. It's like slotting in a fully built mini-UI wherever you want.

---

## 🧠 Parent/Child Dynamics
- The App component owns the layout.
- Each child component (like <Navbar />) handles its own little corner of the screen.
- You can pass data down from parent to child using props (more on that soon 👀).

### ⚠️ Important:
Don’t confuse:

```jsx
<App>
  <Navbar />
  <Dashboard />
  <Footer />
</App>
```
with the actual way React renders children. Unless App is set up to receive children, this won’t do what you think it does (yet). The correct pattern looks like:

```jsx
ReactDOM.render(<App />, document.getElementById("root"));
```

---

### ✅ TL;DR
React lets you compose components like LEGO bricks to create more complex UIs. It’s clean, modular, and insanely powerful.

## Thinking in Components 🧱

Component composition isn’t just a flex — it’s the *core mindset* of React.

---

### 🧠 What Is Component Composition, Really?

You’re not just building with React — you’re *architecting*. And React’s **component model** lets you slice your UI into clean, reusable chunks.

Imagine your UI is a cake 🍰. Instead of baking the whole thing in one go, you:

- Build the layers (`Header`, `Body`, `Footer`)
- Frost each piece (`Buttons`, `Text`, `Images`)
- Then stack 'em up in one clean `App`

Boom. Reusable, maintainable, and way easier to debug than one giant blob of HTML and spaghetti JS.

---

### 🧩 Why Break Stuff Into Components?

- **Separation of concerns**: UI in one file, logic in another.
- **Reusability**: Write once, use everywhere.
- **Scalability**: Easy to manage when things get big.
- **Debuggability**: Smaller, isolated components are easier to test and troubleshoot.

---

### 🛠️ Example Breakdown

Let’s say you’re building a blog page. Your components might look like this:

- `App`
  - `Header`
  - `PostList`
    - `PostItem`
  - `Sidebar`
    - `Tags`
    - `AboutAuthor`
  - `Footer`

Each piece handles its own job. Together, they build a beautiful page. It’s like assembling a team of specialized mini-bots. 🤖

---

### 🧬 Pro Tip:

> If you're ever stuck structuring your components, just ask:
> **“Can this thing be reused or isolated?”**  
> If yes → make it a component. If not → keep it simple.

---

### ✅ TL;DR

**Think like a component architect.**  
Break your UI into logical, self-contained pieces. It’ll save you time, sanity, and energy when your app grows from tiny toy to enterprise beast. 💼🐉

---

