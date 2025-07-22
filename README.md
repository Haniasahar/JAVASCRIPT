# 📚 JavaScript Practice Assignments

A collection of fundamental to intermediate JavaScript exercises covering core concepts. Each assignment is self-contained with `index.js` and `index.html` files.

## 🗂 Folder Structure

```js-assignments
├── 01-variables-data-types/ # Primitive types, variables, constants
├── 02-operators-functions/ # Operators, function declarations
├── 03-arrays-objects/ # Array methods, object manipulation
├── 04-dom-manipulation/ # DOM selection, event handling
├── 05-async-js/ # Callbacks, promises, async/await
├── 06-oop/ # Classes, inheritance, prototypes
├── 07-error-handling/ # Try/catch, custom errors
├── 08-modern-js/ # ES6+ features
└── 09-mini-projects/ # Practical applications
```

## 💡 Covered JavaScript Topics

### Fundamentals
• Variables (`let`, `const`, `var`)  
• Data Types (Primitives & Objects)  
• Operators (Arithmetic, Logical, Ternary)  
• Control Flow (If-else, Switch)  
• Loops (For, While, For...of/in)  

### Intermediate Concepts
• Functions (Declarations, Expressions, Arrow)  
• Arrays (Methods: map/filter/reduce)  
• Objects (Properties, Methods, Destructuring)  
• DOM Manipulation (Selectors, Events)  
• Async Programming (Callbacks, Promises)  

### ES6+ Features
• Template Literals  
• Spread/Rest Operators  
• Destructuring Assignment  
• Modules (Import/Export)  
• Classes & Inheritance  

## 🚀 How to Use

1. Clone the repository:
```bash
git clone https://github.com/your-username/js-assignments.git
```
2. Navigate to any assignment folder:
```bash
cd js-assignments/03-arrays-objects
```

3. Open index.html in browser:
```bash
open index.html  # Mac
start index.html # Windows
explorer.exe index.html # Linux
```

## 📝 Assignment Structure
Each folder contains:

index.html (Basic HTML boilerplate)

index.js (JavaScript solution file)

README.md (Problem statement - if applicable)

## 🔍 Sample Code Structure
`index.html`

html
<!DOCTYPE html>
<html>
<head>
  <title>Array Methods Practice</title>
</head>
<body>
  <script src="index.js"></script>
</body>
</html>

`index.js` (Example from arrays assignment)

```javascript
// Array Methods Practice
const numbers = [1, 2, 3];

// Map - Create new array
const squared = numbers.map(num => num * num);

// Filter - Select elements
const evens = numbers.filter(num => num % 2 === 0);

// Reduce - Accumulate values
const sum = numbers.reduce((total, num) => total + num, 0);
```

## 🛠 Recommended Setup
Use VS Code with Live Server extension

Chrome DevTools for debugging

ESLint for code quality (optional)

<div align="center"> <sub>Maintained by <a href="https://github.com/Haniasahar">Haniya Sahar</a></sub> </div> ```
