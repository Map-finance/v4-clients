/**
 * BigIntLong - A Long-compatible class using bigint for 18+ decimal precision support
 * This replaces the 'long' library which has precision limitations
 */

export class BigIntLong {
  private readonly value: bigint;
  public readonly unsigned: boolean;

  constructor(value: bigint | string | number, unsigned: boolean = false) {
    if (typeof value === 'bigint') {
      this.value = value;
    } else if (typeof value === 'string') {
      this.value = BigInt(value);
    } else if (typeof value === 'number') {
      this.value = BigInt(value);
    } else {
      throw new Error(`Invalid value type for BigIntLong: ${typeof value}`);
    }
    this.unsigned = unsigned;
  }

  // Static factory methods
  static fromString(str: string, unsigned: boolean = false): BigIntLong {
    return new BigIntLong(BigInt(str), unsigned);
  }

  static fromNumber(num: number, unsigned: boolean = false): BigIntLong {
    // 对于安全整数范围内的值，直接转换（最快且精确）
    if (Number.isSafeInteger(num)) {
      return new BigIntLong(BigInt(num), unsigned);
    }
    // 对于超过安全整数范围的值，使用 toString() 来获取最精确的字符串表示
    // 注意：如果原始 number 已经超过安全整数范围，它本身可能已经丢失精度
    // 但使用 toString() 可以获取这个 number 能表示的最精确值
    const numStr = num.toString();
    return new BigIntLong(BigInt(numStr), unsigned);
  }

  static fromInt(num: number, unsigned: boolean = false): BigIntLong {
    // 使用与 fromNumber 相同的逻辑来保持精度
    return BigIntLong.fromNumber(num, unsigned);
  }

  static fromBytes(bytes: number[] | Uint8Array, unsigned: boolean = false, le: boolean = true): BigIntLong {
    const bytesArray = Array.from(bytes);
    let value = BigInt(0);
    
    if (le) {
      // Little-endian: bytes[0] is least significant
      for (let i = 0; i < bytesArray.length; i++) {
        value += BigInt(bytesArray[i]) << BigInt(i * 8);
      }
    } else {
      // Big-endian: bytes[0] is most significant
      for (let i = 0; i < bytesArray.length; i++) {
        value = (value << BigInt(8)) + BigInt(bytesArray[i]);
      }
    }

    // Handle signed/unsigned conversion
    if (!unsigned && bytesArray.length === 8) {
      // For signed 64-bit, check if the high bit is set
      const highByte = le ? bytesArray[7] : bytesArray[0];
      if (highByte & 0x80) {
        // Negative number - convert from two's complement
        const maxValue = BigInt('0xffffffffffffffff');
        value = value - (maxValue + BigInt(1));
      }
    }

    return new BigIntLong(value, unsigned);
  }

  static fromValue(value: string | number | bigint | BigIntLong | { toString(): string }, unsigned: boolean = false): BigIntLong {
    if (value instanceof BigIntLong) {
      return new BigIntLong(value.value, unsigned || value.unsigned);
    }
    if (typeof value === 'bigint') {
      return new BigIntLong(value, unsigned);
    }
    if (typeof value === 'string' || typeof value === 'number') {
      return new BigIntLong(BigInt(value), unsigned);
    }
    if (value && typeof value.toString === 'function') {
      return new BigIntLong(BigInt(value.toString()), unsigned);
    }
    throw new Error(`Cannot convert value to BigIntLong: ${value}`);
  }

  // Static constants
  static readonly ZERO = new BigIntLong(0, false);
  static readonly UZERO = new BigIntLong(0, true);
  static readonly ONE = new BigIntLong(1, false);
  static readonly UONE = new BigIntLong(1, true);
  static readonly NEG_ONE = new BigIntLong(-1, false);
  static readonly MAX_VALUE = new BigIntLong('9223372036854775807', false); // 2^63 - 1
  static readonly MIN_VALUE = new BigIntLong('-9223372036854775808', false); // -2^63
  static readonly MAX_UNSIGNED_VALUE = new BigIntLong('18446744073709551615', true); // 2^64 - 1

  // Instance methods
  toString(): string {
    return this.value.toString();
  }

  toNumber(): number {
    const num = Number(this.value);
    // if (!Number.isSafeInteger(num)) {
    //   throw new Error(`Value ${this.value} is too large to convert to number`);
    // }
    return num;
  }

  toBigInt(): bigint {
    return this.value;
  }

  neg(): BigIntLong {
    return new BigIntLong(-this.value, this.unsigned);
  }

  abs(): BigIntLong {
    return new BigIntLong(this.value < BigInt(0) ? -this.value : this.value, this.unsigned);
  }

  add(other: BigIntLong | string | number | bigint): BigIntLong {
    const otherValue = this.toBigIntValue(other);
    return new BigIntLong(this.value + otherValue, this.unsigned);
  }

  subtract(other: BigIntLong | string | number | bigint): BigIntLong {
    const otherValue = this.toBigIntValue(other);
    return new BigIntLong(this.value - otherValue, this.unsigned);
  }

  // Alias for subtract (Long library compatibility)
  sub(other: BigIntLong | string | number | bigint): BigIntLong {
    return this.subtract(other);
  }

  multiply(other: BigIntLong | string | number | bigint): BigIntLong {
    const otherValue = this.toBigIntValue(other);
    return new BigIntLong(this.value * otherValue, this.unsigned);
  }

  divide(other: BigIntLong | string | number | bigint): BigIntLong {
    const otherValue = this.toBigIntValue(other);
    return new BigIntLong(this.value / otherValue, this.unsigned);
  }

  mod(other: BigIntLong | string | number | bigint): BigIntLong {
    const otherValue = this.toBigIntValue(other);
    return new BigIntLong(this.value % otherValue, this.unsigned);
  }

  equals(other: BigIntLong | string | number | bigint): boolean {
    const otherValue = this.toBigIntValue(other);
    return this.value === otherValue;
  }

  notEquals(other: BigIntLong | string | number | bigint): boolean {
    return !this.equals(other);
  }

  lessThan(other: BigIntLong | string | number | bigint): boolean {
    const otherValue = this.toBigIntValue(other);
    return this.value < otherValue;
  }

  lessThanOrEqual(other: BigIntLong | string | number | bigint): boolean {
    const otherValue = this.toBigIntValue(other);
    return this.value <= otherValue;
  }

  greaterThan(other: BigIntLong | string | number | bigint): boolean {
    const otherValue = this.toBigIntValue(other);
    return this.value > otherValue;
  }

  greaterThanOrEqual(other: BigIntLong | string | number | bigint): boolean {
    const otherValue = this.toBigIntValue(other);
    return this.value >= otherValue;
  }

  // Check if value is zero
  isZero(): boolean {
    return this.value === BigInt(0);
  }

  // Protobuf.js compatibility methods
  toInt(): number {
    return this.toNumber();
  }

  toInt32(): number {
    const num = Number(this.value);
    return num | 0; // Force to 32-bit signed integer
  }

  toInt32Unsigned(): number {
    const num = Number(this.value);
    return num >>> 0; // Force to 32-bit unsigned integer
  }

  toBytes(le: boolean = false): number[] {
    const bytes: number[] = [];
    let val = this.value;
    const isNegative = val < BigInt(0);
    
    // Handle negative numbers using two's complement
    if (isNegative) {
      // Convert to two's complement: invert bits and add 1
      const mask = BigInt('0xffffffffffffffff');
      val = (~val + BigInt(1)) & mask;
    }

    // Convert to bytes (little-endian by default for protobuf)
    for (let i = 0; i < 8; i++) {
      bytes.push(Number(val & BigInt(0xff)));
      val = val >> BigInt(8);
    }

    if (le) {
      return bytes;
    } else {
      return bytes.reverse();
    }
  }

  // Static utility methods
  static isLong(value: any): value is BigIntLong {
    return value instanceof BigIntLong;
  }

  // Helper method to convert various types to bigint
  private toBigIntValue(other: BigIntLong | string | number | bigint): bigint {
    if (other instanceof BigIntLong) {
      return other.value;
    }
    if (typeof other === 'bigint') {
      return other;
    }
    if (typeof other === 'string' || typeof other === 'number') {
      return BigInt(other);
    }
    throw new Error(`Cannot convert ${typeof other} to bigint`);
  }

  // Protobuf.js expects these properties
  // For negative numbers, we need to handle two's complement correctly
  get low(): number {
    // Convert to unsigned 32-bit integer (low 32 bits)
    const mask = BigInt('0xffffffff');
    return Number(this.value & mask) >>> 0;
  }

  get high(): number {
    // Convert to signed 32-bit integer (high 32 bits)
    // For proper sign extension with negative numbers
    const mask = BigInt('0xffffffff');
    const highBits = Number((this.value >> BigInt(32)) & mask);
    // If the value is negative, we need to ensure sign extension
    // JavaScript bitwise operations automatically handle sign extension
    return highBits | 0; // Force to signed 32-bit integer
  }

  isUnsigned(): boolean {
    return this.unsigned;
  }
}

// Export as default for compatibility with Long import style
export default BigIntLong;

