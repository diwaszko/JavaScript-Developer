import products from '../mocks/products'; 

class ProductsService {

  static getProductsByCategory(categoryName) {
    return products.filter((product)=> product.category === categoryName && product.featured);
  }

  static getProductsByFilters(manufacturerName, typedText) {    
    const text = RegExp(`.*${typedText.toLowerCase().split('').join('.*')}.*`);

    if (manufacturerName === "All" && typedText === ""){
        return products;    
    }else if (manufacturerName === "All" && typedText !== "") {
        return products.filter(product => product.name.toLowerCase().match(text));    
    }else if (manufacturerName !== "All" && typedText === "") {
      return products.filter((product)=> product.manufacture === manufacturerName);
    }else{
      return products.filter((product)=> product.manufacture === manufacturerName && product.name.toLowerCase().match(text));
    }
  }
}

export default ProductsService;
