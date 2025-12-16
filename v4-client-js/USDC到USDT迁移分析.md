# v4-client-js SDK 从 USDC 迁移到 USDT 分析

## 📋 概述

当前 SDK 中有多处 USDC 相关的硬编码，需要修改以支持 USDT。本文档分析了所有需要修改的地方。

---

## 🔍 需要修改的地方

### 1. **类型定义** - `DenomConfig` 接口

**位置**: `src/clients/types.ts`

**当前代码**:
```typescript
export interface DenomConfig {
  USDC_DENOM: string;
  USDC_DECIMALS: number;
  USDC_GAS_DENOM?: string;

  CHAINTOKEN_DENOM: string;
  CHAINTOKEN_DECIMALS: number;
  CHAINTOKEN_GAS_DENOM?: string;
}
```

**问题**: 硬编码了 `USDC_*` 字段名

**建议修改方案**:
- **方案 A（推荐）**: 重命名为通用名称，支持配置
```typescript
export interface DenomConfig {
  // 保持向后兼容，但标记为废弃
  USDC_DENOM?: string;
  USDC_DECIMALS?: number;
  USDC_GAS_DENOM?: string;
  
  // 新的通用字段
  QUOTE_DENOM: string;  // 或 STABLE_DENOM
  QUOTE_DECIMALS: number;
  QUOTE_GAS_DENOM?: string;

  CHAINTOKEN_DENOM: string;
  CHAINTOKEN_DECIMALS: number;
  CHAINTOKEN_GAS_DENOM?: string;
}
```

- **方案 B**: 添加 USDT 字段，同时支持两种资产
```typescript
export interface DenomConfig {
  USDC_DENOM?: string;
  USDC_DECIMALS?: number;
  USDC_GAS_DENOM?: string;
  
  USDT_DENOM?: string;
  USDT_DECIMALS?: number;
  USDT_GAS_DENOM?: string;
  
  // 默认使用的资产类型
  DEFAULT_QUOTE_ASSET: 'USDC' | 'USDT';
  
  CHAINTOKEN_DENOM: string;
  CHAINTOKEN_DECIMALS: number;
  CHAINTOKEN_GAS_DENOM?: string;
}
```

---

### 2. **Gas Denom 枚举**

**位置**: `src/clients/constants.ts`

**当前代码**:
```typescript
export enum SelectedGasDenom {
  NATIVE = 'NATIVE',
  USDC = 'USDC',
}
```

**建议修改**:
```typescript
export enum SelectedGasDenom {
  NATIVE = 'NATIVE',
  USDC = 'USDC',
  USDT = 'USDT',  // 添加 USDT 选项
  QUOTE = 'QUOTE',  // 或使用通用名称
}
```

---

### 3. **网络配置中的硬编码值**

**位置**: `src/clients/constants.ts` - `Network` 类

**当前代码**:
```typescript
static mainnet(): Network {
  // ...
  {
    CHAINTOKEN_DENOM: 'adydx',
    USDC_DENOM: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
    USDC_GAS_DENOM: 'uusdc',
    USDC_DECIMALS: 6,
    CHAINTOKEN_DECIMALS: 18,
  },
}
```

**建议修改**: 
- 如果使用方案 A，改为 `QUOTE_DENOM` 等
- 如果使用方案 B，添加 USDT 配置，并设置 `DEFAULT_QUOTE_ASSET: 'USDT'`

---

### 4. **CompositeClient 中的金额解析**

**位置**: `src/clients/composite-client.ts`

**需要修改的函数**:
- `transferMessage()` - 第 901 行
- `depositToSubaccountMessage()` - 第 957 行  
- `withdrawFromSubaccountMessage()` - 第 1017 行

**当前代码**:
```typescript
const quantums = parseUnits(amount, validatorClient.config.denoms.USDC_DECIMALS);
```

**建议修改**: 创建辅助函数获取当前使用的 quote asset decimals
```typescript
private getQuoteDecimals(): number {
  // 方案 A
  return this._validatorClient?.config.denoms.QUOTE_DECIMALS 
    ?? this._validatorClient?.config.denoms.USDC_DECIMALS 
    ?? 6;
  
  // 方案 B
  const config = this._validatorClient?.config.denoms;
  if (config?.DEFAULT_QUOTE_ASSET === 'USDT') {
    return config.USDT_DECIMALS ?? 6;
  }
  return config?.USDC_DECIMALS ?? 6;
}

// 使用
const quantums = parseUnits(amount, this.getQuoteDecimals());
```

---

### 5. **Post 模块中的 Gas 价格配置**

**位置**: `src/clients/modules/post.ts`

**当前代码**:
```typescript
public selectedGasDenom: SelectedGasDenom = SelectedGasDenom.USDC;

this.defaultGasPrice = GasPrice.fromString(
  `0.025${denoms.USDC_GAS_DENOM !== undefined ? denoms.USDC_GAS_DENOM : denoms.USDC_DENOM}`,
);
```

**建议修改**: 
```typescript
// 方案 A
private getQuoteGasDenom(): string {
  return this.denoms.QUOTE_GAS_DENOM 
    ?? this.denoms.QUOTE_DENOM 
    ?? this.denoms.USDC_GAS_DENOM 
    ?? this.denoms.USDC_DENOM;
}

this.defaultGasPrice = GasPrice.fromString(
  `0.025${this.getQuoteGasDenom()}`,
);
```

---

### 6. **Post 模块中的手续费处理**

**位置**: `src/clients/modules/post.ts` - `simulateTransaction()` 方法

**当前代码**:
```typescript
if (coin.denom === 'uusdc') {
  return {
    amount: coin.amount,
    denom: this.denoms.USDC_DENOM,
  };
}
```

**建议修改**: 支持 USDT 的 denom 识别
```typescript
// 方案 A
const quoteDenom = this.denoms.QUOTE_DENOM ?? this.denoms.USDC_DENOM;
if (coin.denom === 'uusdc' || coin.denom === 'uusdt' || coin.denom === quoteDenom) {
  return {
    amount: coin.amount,
    denom: quoteDenom,
  };
}

// 方案 B
if (coin.denom === 'uusdc') {
  return {
    amount: coin.amount,
    denom: this.denoms.USDC_DENOM ?? this.denoms.QUOTE_DENOM,
  };
}
if (coin.denom === 'uusdt') {
  return {
    amount: coin.amount,
    denom: this.denoms.USDT_DENOM ?? this.denoms.QUOTE_DENOM,
  };
}
```

---

### 7. **CompositeClient 默认 Gas Denom**

**位置**: `src/clients/composite-client.ts`

**当前代码**:
```typescript
public gasDenom: SelectedGasDenom = SelectedGasDenom.USDC;
```

**建议修改**: 
```typescript
public gasDenom: SelectedGasDenom = SelectedGasDenom.USDT; // 或 SelectedGasDenom.QUOTE
```

---

### 8. **Native 客户端配置**

**位置**: `src/clients/native.ts` - `connectNetwork()` 函数

**当前代码**:
```typescript
const {
  USDC_DENOM,
  USDC_DECIMALS,
  USDC_GAS_DENOM,
  // ...
} = params;
```

**建议修改**: 支持新的配置字段，同时保持向后兼容

---

### 9. **函数参数和变量名**

**位置**: 多个文件

**需要重命名的地方**:
- `amountUsdc` → `amountQuote` 或 `amountStable`
- 注释中的 "USDC" → "USDT" 或 "quote asset"

**示例**:
```typescript
// 当前
depositToMegavaultMessage(subaccount: SubaccountInfo, amountUsdc: number)

// 建议
depositToMegavaultMessage(subaccount: SubaccountInfo, amountQuote: number)
```

---

### 10. **网络优化器配置**

**位置**: `src/network_optimizer.ts`

**当前代码**:
```typescript
USDC_DENOM: 'uusdc',
USDC_DECIMALS: 6,
```

**建议修改**: 根据实际使用的资产更新

---

### 11. **Noble 客户端**

**位置**: `src/clients/noble-client.ts`

**当前代码**:
```typescript
gasPrice: GasPrice = GasPrice.fromString('0.1uusdc'),
```

**建议修改**: 根据配置动态设置

---

## 📝 修改建议总结

### 推荐方案：**方案 A - 通用化字段名**

**优点**:
- 更灵活，不绑定特定资产
- 未来可以支持其他稳定币
- 代码更通用

**缺点**:
- 需要大量重构
- 可能影响现有代码

### 备选方案：**方案 B - 同时支持 USDC 和 USDT**

**优点**:
- 向后兼容性好
- 可以同时支持两种资产
- 修改量相对较小

**缺点**:
- 配置更复杂
- 需要维护两套字段

---

## 🔧 实施步骤

1. **第一步**: 修改 `DenomConfig` 接口，添加新字段（保持向后兼容）
2. **第二步**: 创建辅助函数获取当前使用的 quote asset 配置
3. **第三步**: 逐步替换所有 `USDC_DECIMALS` 的使用
4. **第四步**: 更新网络配置，使用 USDT 的值
5. **第五步**: 更新默认值和枚举
6. **第六步**: 测试所有功能
7. **第七步**: 更新文档和注释

---

## ⚠️ 注意事项

1. **向后兼容性**: 如果其他项目依赖这个 SDK，需要考虑兼容性
2. **测试**: 确保所有使用 USDC 的地方都正确迁移
3. **文档**: 更新 README 和 API 文档
4. **版本**: 建议作为 major version 更新（如果破坏向后兼容）

---

## 📍 关键文件清单

需要修改的文件：
1. `src/clients/types.ts` - DenomConfig 接口
2. `src/clients/constants.ts` - 网络配置和枚举
3. `src/clients/composite-client.ts` - 金额解析和默认值
4. `src/clients/modules/post.ts` - Gas 价格和手续费处理
5. `src/clients/native.ts` - Native 客户端配置
6. `src/network_optimizer.ts` - 网络优化器
7. `src/clients/noble-client.ts` - Noble 客户端

---

## 🎯 快速修改方案（最小改动）

如果时间紧迫，可以只修改以下关键点：

1. 在 `DenomConfig` 中添加 `USDT_*` 字段
2. 修改网络配置，使用 USDT 的值填充 `USDC_*` 字段（临时方案）
3. 更新默认 gas denom 为 USDT
4. 更新注释和文档

**注意**: 这只是临时方案，长期建议使用方案 A 或 B。

