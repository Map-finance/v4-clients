// src/clients/modules/markets.ts
import { TimePeriod } from '../constants';
import { Data } from '../types';
import RestClient from './rest';

/**
 * @description REST endpoints for data unrelated to a particular address.
 */
export default class MarketsClient extends RestClient {
  async getPerpetualMarkets(market?: string): Promise<Data> {
    const uri = '/v4/perpetualMarkets';
    return this.get(uri, { ticker: market });
  }

  async getPerpetualMarketOrderbook(market: string): Promise<Data> {
    const uri = `/v4/orderbooks/perpetualMarket/${market}`;
    return this.get(uri);
  }

  async getPerpetualMarketTrades(
    market: string,
    startingBeforeOrAtHeight?: number | null,
    startingBeforeOrAt?: string | null,
    limit?: number | null,
    page?: number | null,
  ): Promise<Data> {
    const uri = `/v4/trades/perpetualMarket/${market}`;
    return this.get(uri, {
      createdBeforeOrAtHeight: startingBeforeOrAtHeight,
      createdBeforeOrAt: startingBeforeOrAt,
      limit,
      page,
    });
  }

  async getPerpetualMarketCandles(
    market: string,
    resolution: string,
    fromISO?: string | null,
    toISO?: string | null,
    limit?: number | null,
  ): Promise<Data> {
    const uri = `/v4/candles/perpetualMarkets/${market}`;
    return this.get(uri, {
      resolution,
      fromISO,
      toISO,
      limit,
    });
  }

  async getPerpetualMarketHistoricalFunding(
    market: string,
    effectiveBeforeOrAt?: string | null,
    effectiveBeforeOrAtHeight?: number | null,
    limit?: number | null,
  ): Promise<Data> {
    const uri = `/v4/historicalFunding/${market}`;
    return this.get(uri, {
      effectiveBeforeOrAt,
      effectiveBeforeOrAtHeight,
      limit,
    });
  }

  async getPerpetualMarketSparklines(period: string = TimePeriod.ONE_DAY): Promise<Data> {
    const uri = '/v4/sparklines';
    return this.get(uri, {
      timePeriod: period,
    });
  }

  // ========== 现货市场方法 ========== //

  /**
   * @description 获取所有现货市场或指定现货市场
   * GET /v4/spotMarkets
   *
   * @param ticker - 可选，现货交易对如 "BTC-USDC"
   * @param limit - 可选，返回的最大市场数量
   * @returns 现货市场数据
   */
  async getSpotMarkets(ticker?: string, limit?: number): Promise<Data> {
    const uri = '/v4/spotMarkets';
    return this.get(uri, { ticker, limit });
  }

  /**
   * @description 获取指定现货市场的订单簿
   * GET /v4/orderbooks/spotMarket/:ticker
   *
   * @param ticker - 现货交易对，如 "BTC-USDC"
   * @returns 现货订单簿数据
   */
  async getSpotMarketOrderbook(ticker: string): Promise<Data> {
    const uri = `/v4/orderbooks/spotMarket/${ticker}`;
    return this.get(uri);
  }

  /**
   * @description 获取指定现货市场的公开交易历史
   * GET /v4/trades/spotMarket/:ticker
   *
   * @param ticker - 现货交易对，如 "BTC-USDC"
   * @param createdBeforeOrAtHeight - 可选，区块高度筛选
   * @param createdBeforeOrAt - 可选，时间筛选 (ISO 8601)
   * @param limit - 可选，最大交易数量
   * @param page - 可选，分页页码
   * @returns 现货交易历史数据
   */
  async getSpotMarketTrades(
    ticker: string,
    createdBeforeOrAtHeight?: number | null,
    createdBeforeOrAt?: string | null,
    limit?: number | null,
    page?: number | null,
  ): Promise<Data> {
    const uri = `/v4/trades/spotMarket/${ticker}`;
    return this.get(uri, {
      createdBeforeOrAtHeight,
      createdBeforeOrAt,
      limit,
      page,
    });
  }

  /**
   * @description 获取指定现货市场的K线数据
   * GET /v4/candles/spotMarkets/:ticker
   *
   * @param ticker - 现货交易对，如 "BTC-USDC"
   * @param resolution - K线周期: 1MIN, 5MINS, 15MINS, 30MINS, 1HOUR, 4HOURS, 1DAY
   * @param fromISO - 可选，开始时间 (ISO 8601)
   * @param toISO - 可选，结束时间 (ISO 8601)
   * @param limit - 可选，最大K线数量
   * @returns 现货K线数据
   */
  async getSpotMarketCandles(
    ticker: string,
    resolution: string,
    fromISO?: string | null,
    toISO?: string | null,
    limit?: number | null,
  ): Promise<Data> {
    const uri = `/v4/candles/spotMarkets/${ticker}`;
    return this.get(uri, {
      resolution,
      fromISO,
      toISO,
      limit,
    });
  }

  /**
   * @description 获取走势图数据（包含永续和现货）
   * GET /v4/sparklines
   *
   * @param period - 时间周期，默认 ONE_DAY
   * @returns 走势图数据（自动包含现货市场）
   */
  async getSparklines(period: string = TimePeriod.ONE_DAY): Promise<Data> {
    const uri = '/v4/sparklines';
    return this.get(uri, {
      timePeriod: period,
    });
  }
}
