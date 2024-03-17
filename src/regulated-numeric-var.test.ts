import { RegulatedNumericVar } from './regulated-numeric-var';

describe('RegulatedNumericVar', () => {

  it('should constrain plasticity values within the 0 to 1 range at instantiation', () => {
    // GIVEN
    const lowerPlasticity = -1;
    const higherPlasticity = 2;

    // WHEN
    const lowerPlasticicityVar = new RegulatedNumericVar(lowerPlasticity);
    const higherPlasticityVar = new RegulatedNumericVar(higherPlasticity);

    // THEN
    expect(lowerPlasticicityVar.plasticity).toBe(0);
    expect(higherPlasticityVar.plasticity).toBe(1);
  });

  it('should constrain plasticity values within the 0 to 1 range after instantiation', () => {
    // GIVEN
    const lowerPlasticity = -1;
    const higherPlasticity = 2;
    const lowerPlasticicityVar = new RegulatedNumericVar(.5);
    const higherPlasticityVar = new RegulatedNumericVar(.5);

    // WHEN
    lowerPlasticicityVar.plasticity = lowerPlasticity;
    higherPlasticityVar.plasticity = higherPlasticity;

    // THEN
    expect(lowerPlasticicityVar.plasticity).toBe(0);
    expect(higherPlasticityVar.plasticity).toBe(1);
  });


  it('should be undefined', () => {
    // GIVEN
    const regulatedVar = new RegulatedNumericVar(1);

    // THEN
    expect(regulatedVar.isUndefined()).toBe(true);
    expect(regulatedVar.isDefined()).toBe(false);
  });


  it('should be defined', () => {
    // GIVEN
    const regulatedVar = new RegulatedNumericVar(1, 42);

    // THEN
    expect(regulatedVar.isUndefined()).toBe(false);
    expect(regulatedVar.isDefined()).toBe(true);
  });


  it('should return the initial value', () => {
    // GIVEN
    const initialValue = 42;

    // THEN
    const regulatedVar = new RegulatedNumericVar(1, initialValue);

    // THEN
    expect(regulatedVar.value).toBe(initialValue);
  });


  it('should return first assigned value when RegulatedNumericVar is instantiated without initial value even if plasticity is zero', () => {
    // GIVEN
    const plasticity = 0;
    const assignedValue = 42;

    // WHEN
    const regulatedVar = new RegulatedNumericVar(plasticity);
    regulatedVar.value = assignedValue;

    // THEN
    expect(regulatedVar.value).toBe(assignedValue);
  });


  [
    { plasticity: -1, initialValue: 20, newValue: 10, expectedResult: 20 },
    { plasticity: 0, initialValue: 20, newValue: 10, expectedResult: 20 },
    { plasticity: .5, initialValue: 20, newValue: 10, expectedResult: 15 },
    { plasticity: 1, initialValue: 20, newValue: 10, expectedResult: 10 },
    { plasticity: 2, initialValue: 20, newValue: 10, expectedResult: 10 },
  ].forEach(({ plasticity, initialValue, newValue, expectedResult}) => {
    it(`should return ${expectedResult} when plasticity is ${plasticity}, initial value is ${initialValue} and new value is ${newValue}`, () => {
      // WHEN
      const regulatedVar = new RegulatedNumericVar(plasticity, initialValue);
      regulatedVar.value = newValue;

      // THEN
      expect(regulatedVar.value).toBe(expectedResult);
    })
  });

});
