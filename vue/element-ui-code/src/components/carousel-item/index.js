import CarouselItem from '../carousel/src/item';
// install 概念
CarouselItem.install = function(Vue) {
  Vue.component(CarouselItem.name, CarouselItem);
};

export default CarouselItem;