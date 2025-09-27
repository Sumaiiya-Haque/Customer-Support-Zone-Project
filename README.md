
What is JSX, and why is it used?

Ans: JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.
React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.


What is the difference between State and Props?

Ans:1.The Data is passed from one component to another.
The Data is passed within the component only.

2.It is Immutable (cannot be modified).
It is Mutable ( can be modified).

3.Props can be used with state and functional components.
The state can be used only with the state components/class component (Before 16.0).

4.Props are read-only.
The state is both read and write.



What is the useState hook, and how does it work?

Ans:The React useState Hook allows us to track state in a function component.
State generally refers to data or properties that need to be tracking in an application.
The useState() hook works by handling and managing state in your applications. The useState() hook takes the first (initial) value of the state variable as its argument. The second value then sets your state, which is why it's always initiated as setState .


How can you share state between components in React?

Ans:Sharing state between components in React can be achieved through several methods, depending on the relationship between the components and the complexity of the state:
1. Lifting State Up:
This is the most common and fundamental method for sharing state between sibling components or a parent and its direct children. 
Process:
Identify the closest common parent component of the components that need to share state.
Move the shared state and its update functions from the child components to this common parent.
2. React Context API:
For sharing state across deeply nested components without explicitly passing props down through every level, the Context API is a suitable solution.
Process:
Create a Context using React.createContext().
Wrap the parent component (or the entire application) with a Context.Provider and provide the shared state and update functions as its value prop.


How is event handling done in React?

Ans:Event handling in React is performed using a synthetic event system that wraps the browser's native event system, ensuring cross-browser consistency. This system allows for declarative event handling directly within JSX.
Key aspects of event handling in React:
Synthetic Events: React creates synthetic events to normalize event behavior across different browsers. When an event is triggered (e.g., a click), React creates a SyntheticEvent object, which is passed to the event handler function. This object provides consistent properties regardless of the underlying browser implementation.
CamelCase Naming Convention: Event handlers in React are named using camelCase within JSX, unlike the lowercase convention in plain HTML. For example, onclick in HTML becomes onClick in React, and onsubmit becomes onSubmit.