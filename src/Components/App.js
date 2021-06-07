import { Component } from 'react';
import './App.css';
import MenuList from './MenuList'
import MenuItem from './MenuItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
  }
}

componentDidMount() {
  const items = [
      {
        name: "Pepperoni",
        description: "A round crust with sauce, cheese, and pepperonis",
        price: 13,
        tag: "pizza",
      },
      {
        name: "Vegan Delight",
        description: "A cornmeal, carrot and chia crust with sauce, vegan cheese, onions, peppers, mushrooms and broccoli",
        price: 13,
        tag: "pizza",
      },
      {
        name: "Cheese",
        description: "A simple yet delicious pie with a three cheese blend",
        price: 11,
        tag: "pizza",
      },

      {
        name: "Caesar",
        description: "Crisp romaine lettuce mixed with crutons and parmesan cheese tossed in caesar dressing",
        price: 10,
        tag: "salad",
      },
      {
        name: "Garden",
        description: "Spring leaf mix with tomato, cheese, crutons, and red onion",
        price: 8,
        tag: "salad",
      },
      {
        name: "Grilled Chicken",
        description: "Chicken on lettuce",
        price: 10,
        tag: "salad",
      },

      {
        name: "Breadsticks",
        description: "Freshly baked breadsticks drizzled in garlic butter",
        price: 6,
        tag: "side",
      },
      {
        name: "Garlic Knots",
        description: "Bite sized bread knots slathered with a garlic butter",
        price: 6,
        tag: "side",
      },
      {
        name: "Fried Ravioli",
        description: "Cheese stuffed ravioli fried to golden perfection",
        price: 8,
        tag: "side",
      },

      {
        name: "Hot Tea",
        description: "Ask the server for daily choices",
        price: 3,
        tag: "drink",
      },
      {
        name: "Soda",
        description: "Coke products only",
        price: 3,
        tag: "drink",
      },
      {
        name: "Sangria",
        description: "A chilled fruity red wine",
        price: 5,
        tag: "drink",
      }
    ];

    this.setState({ items })
}


  render() {

    return(
      <>
        <h1>Vic's Pizza</h1>
        <h2>Menu</h2>
        <MenuList items={this.state.items} />
      </>
    )
  }
}


export default App;
