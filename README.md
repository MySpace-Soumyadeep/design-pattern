
# JavaScript Design Patterns Collection

This repository contains examples of various design patterns implemented in JavaScript. Each pattern is organized in its own folder with code and documentation.

## Structure
- `singleton/` — Demonstrates the Singleton pattern using a shopping scenario.
  - Contains: `Logger.js`, `Shopper.js`, `Store.js`, `index.js`, etc.
- `prototypePattern/` — Demonstrates the Prototype pattern for object cloning and creation.
  - Contains: `index.js`, `index_pp.js`, `scout_prototype.js`, `Shopper.js`, etc.
- More pattern folders will be added here (e.g., `factoryPattern/`, `observer/`, `strategy/`, etc.)

## How to Use
1. Navigate to the folder for the pattern you want to explore (e.g., `singleton`, `prototypePattern`).
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

## About the Singleton Example
- The `Logger` class is intended to be used as a singleton, but the current implementation does **not** enforce a true singleton. Each `new Logger()` creates a new instance. To enforce a singleton, export a single instance from `Logger.js` instead of the class itself.

## About the Prototype Example
- The `prototypePattern` folder demonstrates object cloning using prototypes. You can see how new objects are created by copying properties and methods from a prototype object.

---
Created August 2025
