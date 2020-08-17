import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];
  maxId: number;
  nextId: number;

  constructor() {
    this.arrPosts = [
      new Post(1, 'Cerveza PILSNER artesana ATRIO (Sigüenza)', 'Cerveza de color ambar claro de larga maduración en bodega, suave amargor y final seco, muy elegante, sabor a malta limpio y algo tostado proecedente de sus lúpulos nobles.', 'Catador experto', 'https://untappd.akamaized.net/photos/2020_07_31/f8e72b4625f1880b89d8cffbb8d796f6_640x640.jpg', '12/08/2020', 'Cervezas artesanas'),
      new Post(2, 'Cerveza APA artesana ATRIO (Sigüenza)', 'Cerveza de color amarillo luminoso de alta fermentación con aromas tropicales y cítricos que le aportan los lúpulos americanos.', 'Catador experto', 'https://s3.eu-west-2.amazonaws.com/mentta/producto/pack-cerveza-apa-lista.jpg', '13/08/2020', 'Cervezas artesanas'),
      new Post(3, 'Laugar, del autoconsumo a la profesionalización cervecera', 'Aunque su referencia más vendida en Euskadi es una Brown Ale denominada Kiskale, la base del prestigio de Laugar debe buscarse en sus Imperial Stout, las denominadas “petróleos”. Este estilo, que les ha conferido fabulosas críticas a nivel nacional e internacional, es el más consumido en la actualidad después del universo IPA. Se trata de cervezas negras, alcohólicas, de 10 grados en adelante, sedosas y complejas. De hecho, conforme adquieren en copa la temperatura ambiente, liberan sus verdaderos aromas. Algunas de ellas forman parte de su producción anual y otras corresponden a ediciones limitadas. Destacan Funeralópolis y Aupa Toravich, las cuales son ya un referente en el sector. Además, está su gama de latas de 44 cl. basadas en el lúpulo, con Murrusa, una Milkshake IPA, como puntal de su buen hacer. Por último, queda dejar constancia de sus colaboraciones con destacados brewers a través de las cuales han lanzado al mercado diversas ediciones limitadas. Despegan de Euskadi y aterrizan en el mundo entero…', 'OKasional-beer', 'https://okasional-beer.com/blog-cerveza-artesana/wp-content/uploads/2020/03/cervezas-laugar-1024x757.png', '12/08/2020', 'Cervezas artesanas'),
      new Post(4, 'Basqueland y su indiscutible conexión con el público artesanal', 'Su IPA Imparable se convirtió en su primer gran éxito. Otras de las referencias que formaban parte de su elaboración de base fueron la Amber Ale Arraun y su Pale Ale Aúpa. Al cabo del tiempo supieron captar el viraje del sector craft en el mundo que también, cómo no, influiría en España. Lúpulo, ediciones limitadas, formato de lata de 44 cl., colaboraciones con las mejores cerveceras y, consecuentemente, excelentes valoraciones en Untappd. Pero no sólo el lúpulo forma parte de su esencia a través de sus IPAs y New England IPAs. También las cervezas de estilo Sour e Imperial Stout han contribuido a su cadena de grandes éxitos. Recientemente, se han visto obligados a ampliar una vez más su capacidad productiva para igualar una crecida demanda tanto en España como en el extranjero. Con ello, han añadido su triunfante Zumo junto a Imparable al core de la fábrica. Además, destaca su enorme capacidad de lanzar al mercado multitud de referencias de ediciones limitadas con una excelsa calidad. Sin duda se han convertido en un estandarte de los gustos actuales de los consumidores. ¡Aúpa Basqueland!', 'Catador experto', 'https://okasional-beer.com/blog-cerveza-artesana/wp-content/uploads/2020/08/Basqueland-en-OKasional-Beer.jpg', '14/06/2020', 'Cervezas artesanas'),
      new Post(5, 'Descubrimos las claves de la Alhambra Reserva 1925', 'De carácter intenso, Alhambra Reserva 1925 es nuestra reinterpretación del estilo Pilsen Bohemia, elaborada con ‘Saaz’, una de las variedades de lúpulo aromático más exclusivas, que le aportan a nuestra cerveza sus característicos aromas florales. Una cerveza para disfrutar la vida a través de los detalles', 'Catador experto', 'https://www.cervezasalhambra.com/themes/alhambra/assets/img/cervezas/1925/img_intro_desktop.jpg', '17/05/2020', 'Tercios'),
      new Post(6, 'La cerveza preferida de Fernando Simón', 'La rueda de prensa del día de hoy, donde se han dado a conocer las novedades acerca de la incidencia y evolución de la COVID-19, nos ha brindado este maravilloso elogio de Fernando Simón hacia la que considera la mejor cerveza de barril del panorama español: "no me canso de decirlo, las mejores variedades de lúpulo y levadura se concentran en Mahou Cinco Estrellas. Una cerveza dorada, de espuma cremosa y consistente, con un sabor característico, moderado y fino, de aroma afrutado. Ni una almendra en tu garganta". El resto de marcas de la competencia no ha tardado en mostrar su disconformidad con las palabras del director del Centro de Coordinación y Alertas y Emergencias Sanitarias (CCAES), llegando incluso a pedir su dimisión.', 'Ignacio Escolar', 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/23/15902161658115.jpg', '13/08/2020', 'Cervezas de barril'),
      new Post(7, 'El botellin más especial de todo el sur', 'Cuidada e intensa, Alhambra Especial es una cerveza que te invita a descubrirla poco a poco, a conocer su origen e historia, mientras saboreas sus matices afrutados y florales. Inspirada en recetas clásicas de estilo Lager Pilsner checas, así como en el monumento de La Alhambra. En esta creación nuestros maestros cerveceros pusieron especial cuidado en la selección del lúpulo y de las maltas de cebada para conseguir una cerveza sugerente.', 'El Bebedista', 'https://images-na.ssl-images-amazon.com/images/I/41vbfoWTSAL._AC_.jpg', '13/08/2020', 'Botellines')
    ]
    this.maxId = this.arrPosts[this.arrPosts.length - 1].id;
    console.log(this.maxId)
    this.nextId = this.maxId + 1;
  }

  agregarPost(formValue): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      formValue.id = this.nextId;
      this.arrPosts.push(formValue)
      resolve(this.arrPosts)
    });
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts)
    });
  }

  getPostsByCategoria(cat): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts.filter(post => {
        return post.categoria === cat
      }))
    });
  }

  getPostsById(pId): Promise<Post> {
    return new Promise((resolve, reject) => {
      let post = this.arrPosts.find(post => {
        return post.id == pId;
      })
      resolve(post);
    });
  }
}

