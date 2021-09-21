export function toCelcius(absoluteTemp) {
  return Math.round(absoluteTemp - 273) + ' ℃';
}

export function toFahrenheit(absoluteTemp) {
  return Math.round(((absoluteTemp - 273) * 9) / 5 + 32) + ' ℉';
}
