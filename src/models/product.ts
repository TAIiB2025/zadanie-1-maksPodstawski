export default class Product{
  nazwa:string;
  cena:number;
  dataUtworzenia: Date;
  liczbaSztuk: number;
  czyPromocja: boolean;

  constructor(nazwa:string,cena:number,dataUtworzenia:Date, czyPromocja:boolean){
    this.nazwa = nazwa;
    this.cena = cena;
    this.liczbaSztuk = 0;
    this.dataUtworzenia = dataUtworzenia;
    this.czyPromocja = czyPromocja;
  }
}
