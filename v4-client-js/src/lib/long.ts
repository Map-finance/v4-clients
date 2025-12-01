/**
 * Long compatibility module - exports BigIntLong as Long for backward compatibility
 * This allows us to replace 'long' library with bigint-based implementation
 * while maintaining the same API
 */
import { BigIntLong } from './bigint-long';

// Export BigIntLong as Long for compatibility
export { BigIntLong as Long, BigIntLong } from './bigint-long';
export { default } from './bigint-long';

// Global type augmentation for protobuf.js compatibility
declare global {
  namespace protobuf {
    namespace util {
      // Make protobuf.util.Long accept BigIntLong
      type Long = BigIntLong;
    }
  }
}

