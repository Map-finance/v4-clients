/**
 * Long compatibility module - exports BigIntLong as Long for backward compatibility
 * This allows us to replace 'long' library with bigint-based implementation
 * while maintaining the same API
 */
export { BigIntLong as Long, BigIntLong } from './bigint-long';
export { default } from './bigint-long';

