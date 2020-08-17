export class Post {
    id: number;
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: string;
    categoria: string;

    constructor(pId: number, pTitulo: string, pTexto: string, pAutor: string, pImagen: string = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', pFecha: string, pCategoria: string) {
        this.id = pId;
        this.titulo = pTitulo;
        this.texto = pTexto;
        this.autor = pAutor;
        this.imagen = pImagen;
        this.fecha = pFecha;
        this.categoria = pCategoria;
    }
}