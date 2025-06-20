class Veiculo {
  constructor({ id, placa, ...rest }) {
    this.id = id;
    this.placa = placa;
    this.bloqueado = rest.bloqueado || false; 
  }
}
