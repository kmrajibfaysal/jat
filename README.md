1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById returns a single element by its unique ID, making it the fastest option when you know the exact identifier. getElementsByClassName retrieves a live collection of elements that share a class, which updates automatically if the DOM changes. querySelector is more flexible since it accepts any CSS selector but only returns the first match, while querySelectorAll also accepts CSS selectors and returns a static list of all matches that doesn’t update with DOM changes. In short: use getElementById for unique IDs, getElementsByClassName for class groups, and querySelector/querySelectorAll for complex CSS-style selections.


2. How do you create and insert a new element into the DOM?
- At first I will create an element using document.createElement() method, after that i will append that to the selected dom node or container.

3. What is Event Bubbling? And how does it work?
- Event bubbling is a term used to  demonstrate the event propagating way of javascript. normally when we use multiple event on a single element if we do any evening like click event on that particular element the event goes to its up most parents this is called event bubbling. If we need to stop this we can stop propagation further using various method.

4. What is Event Delegation in JavaScript? Why is it useful?
- Event Delegation in JavaScript is a technique where we attach a single event listener to a parent element instead of adding listeners to each individual child. This works because of event bubbling, where an event triggered on a child element propagates up through its ancestors

5. What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() we use this to stop browser default behavior like submitting form (page reloads) and on the other hand stopPropagation() prevents the event bubbling up which is also a default behavior of javascript if not controlled manually.
