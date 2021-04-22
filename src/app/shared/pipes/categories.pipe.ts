import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categories'
})

export class CategoriesPipe implements PipeTransform {

  transform(categories: any): any {
  
    const categoriesID = [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ]

    const categoria = [];

    categories.forEach(element => {
      const id = element
      categoriesID.forEach(element => {
        const catId = element.id
        const catName = element.name
        //console.log(catId);
        //console.log(catName);
        //console.log(id);
        if (id === catId) {
          
          //console.log(catName);
          categoria.push(' ' + catName )
        }
      });
      
    });

    return categoria;
  }

}
