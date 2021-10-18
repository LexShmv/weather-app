export function toFahrenheit(absoluteTemp) {
  return Math.round(((absoluteTemp - 273) * 9) / 5 + 32);
}
