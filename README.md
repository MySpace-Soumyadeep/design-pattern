
# JavaScript Design Patterns Collection

This repository contains examples of various design patterns implemented in JavaScript. Each pattern is organized in its own folder with code and documentation.

## Structure
- `creational-patterns/singleton/` — Demonstrates the Singleton pattern using a shopping scenario.
  - Contains: `Logger.js`, `Shopper.js`, `Store.js`, `index.js`, etc.
- `creational-patterns/prototypePattern/` — Demonstrates the Prototype pattern for object cloning and creation.
  - Contains: `index.js`, `index_pp.js`, `scout_prototype.js`, `Shopper.js`, etc.
- `creational-patterns/FactoryPattern/` — Demonstrates the Factory pattern for flexible object creation.
  - Contains: `Employee.js`, `Shopper.js`, `userFactory.js`, `index.js`, `notes.txt`, etc.
- More pattern folders will be added here (e.g., `observer/`, `strategy/`, etc.)

## How to Use
1. Navigate to the folder for the pattern you want to explore (e.g., `singleton`, `prototypePattern`, `creational-patterns/FactoryPattern`).
2. Follow the instructions in the folder's README (if available) or run the main entry point (usually `index.js`).
3. Example for Singleton:
   ```powershell
   cd singleton
   node index.js
   ```
4. Example for Prototype:
   ```powershell
   cd prototypePattern
   node index.js
   ```
5. Example for Factory:
   ```powershell
   cd creational-patterns/FactoryPattern
   node index.js
   ```

## About the Singleton Example
- The `Logger` class is intended to be used as a singleton, but the current implementation does **not** enforce a true singleton. Each `new Logger()` creates a new instance. To enforce a singleton, export a single instance from `Logger.js` instead of the class itself.

## About the Prototype Example
- The `prototypePattern` folder demonstrates object cloning using prototypes. You can see how new objects are created by copying properties and methods from a prototype object.

## About the Factory Example
- The `FactoryPattern` folder shows how to centralize and simplify object creation. Instead of using constructors directly, a factory function or class creates different types of users (like Employee, Shopper, Manager, Developer, Distributor, etc.), making the code easier to scale and maintain.

---
Created August 2025
