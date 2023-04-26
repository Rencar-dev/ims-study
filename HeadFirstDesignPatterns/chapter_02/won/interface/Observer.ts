export interface Observer {
  id:string;
  update({
    temp,
    humidity,
    pressure,
  }: {
    temp: number;
    humidity: number;
    pressure: number;
  });
}
