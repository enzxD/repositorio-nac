export interface productos{
    name: string,
    categoria: number,
    moneda: productosprecio,
    descripcion: string,
    precio: number

}

export interface productosprecio{
    costo: number,
    tasa: number,
    precio: number
}