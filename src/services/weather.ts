/**
 * Represents weather information, including temperature and conditions.
 */
export interface Weather {
  /**
   * The temperature in Fahrenheit.
   */
  temperatureFarenheit: number;
  /**
   * The weather conditions (e.g., Sunny, Cloudy, Rainy).
   */
  conditions: string;
}

/**
 * Asynchronously retrieves weather information for a given location.
 * @returns A promise that resolves to a Weather object containing temperature and conditions.
 */
export async function getWeather(): Promise<Weather> {
  // TODO: Implement this by calling an API.
  return {
    temperatureFarenheit: 73,
    conditions: 'Sunny',
  };
}
