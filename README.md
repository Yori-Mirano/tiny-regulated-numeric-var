# Tiny RegulatedNumericVar

## Description

The `RegulatedNumericVar` class is a utility for managing a numeric variable that may be regulated by 'plasticity'. This plasticity, ranging from 0 (unchangeable) to 1 (completely flexible), impacts the manner in which the numeric variable can be altered.

## Properties

- `plasticity`: Plasticity coefficient to regulate changes to the variable value. It is constrained between 0 (unchangeable) and 1 (completely flexible).
- `value`: Numeric value regulated by the plasticity.

## Methods

- `constructor(plasticity: number, initialValue?: number)`: The class constructor. You can optionally specify an initial value for the numeric variable.
- `isUndefined()`: Returns a boolean indicating whether the value of the numeric variable is undefined.
- `isDefined()`: Returns a boolean indicating whether the value of the numeric variable is defined.

## Usage
```typescript
let regulatedVar = new RegulatedNumericVar(0.5, 10);
regulatedVar.value = 20; // the value will now be 15
```

In this example, since the plasticity is 0.5, when the value changes, the new value is a compromise between the old and new value.
