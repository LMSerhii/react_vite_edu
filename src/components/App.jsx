import Product from './Product';
import BookList from './BookList';
import favouriteBooks from './data';

export default function App() {
  return (
    <div>
      <h1>App</h1>

      <h2>Best sellings</h2>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product name="Fries and Burger" price={14.29} />

      <h2>Books of the week</h2>

      <BookList books={favouriteBooks} />
    </div>
  );
}
