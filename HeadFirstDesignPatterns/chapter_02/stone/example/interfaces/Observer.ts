interface Obsever {
  update: (temp: number, humidity: number, pressure: number) => void
}

export default Obsever
