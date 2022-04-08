function aiTurn(max) {
  const coordinate = [];
  coordinate.push(Math.floor(Math.random() * max));
  coordinate.push(Math.floor(Math.random() * max));
  return coordinate;
}

export { aiTurn };