for (let item of itensColetados) {
  if (
    item === itensNecessario1 &&
    item === itensNecessario2 &&
    item &&
    itensNecessario3
  ) {
    return "Pode passar";
  } else {
    return "Não pode passar";
  }
}
