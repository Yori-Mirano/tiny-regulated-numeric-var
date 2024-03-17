export class RegulatedNumericVar {

  private _value?: number;
  private _plasticity!: number;

  constructor(plasticity: number, initialValue?: number) {
    this.plasticity = plasticity;

    if (initialValue) {
      this._value = initialValue;
    }
  }

  get plasticity(): number {
    return this._plasticity;
  }

  set plasticity(plasticity: number) {
    this._plasticity = Math.min(Math.max(plasticity, 0), 1);
  }

  get value(): number | undefined {
    return this._value;
  }

  set value(newValue: number) {
    if (typeof this._value === 'undefined') {
      this._value = newValue;

    } else {
      switch (this.plasticity) {
        case 1:
          this._value = newValue;
          break;

        case 0:
          // Do nothing
          break;

        default:
          this._value = this._value * (1 - this.plasticity) + newValue * this.plasticity;
      }
    }
  }

}
