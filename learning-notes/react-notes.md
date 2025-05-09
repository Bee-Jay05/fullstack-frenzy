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

🛠 In most development setups (like Create React App or these learning environments), Babel is already pre-configured and running behind the scenes.

If your JSX has syntax errors, Babel will throw an error and your code won’t render.

## Rendering with ReactDOM

Under the hood, JSX is rendered using:

```js
ReactDOM.render(JSX, document.getElementById('root'));
```

This function inserts your JSX into React's virtual DOM (a lightweight copy of the real DOM). React then compares the virtual DOM snapshots to update only the necessary parts of the actual DOM — making updates super fast and efficient.

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

### 🧠 Pro Tip: Wrapping JSX in parentheses like above isn’t required, but it improves readability — especially for multi-line JSX.

If you remove the <div> wrapper, this JSX won’t transpile. This pattern will show up again when returning JSX from React components. Always return a single parent!

## Commenting in JSX

JSX gets compiled into valid JavaScript, but because of its HTML-like structure, **commenting works a bit differently** than regular JS.

### 💬 JSX Comment Syntax:

To add comments *inside* JSX (i.e., within the return or render block), use:

```jsx
{/* This is a comment inside JSX */}
```

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
🧠 Just like variables, JSX elements must be declared before they’re used. So always define your JSX before calling ReactDOM.render() — or you'll run into reference errors that’ll ruin your vibe.

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
💡 TL;DR: When in doubt, camelCase it. If it feels like regular HTML, double check the attribute names!

