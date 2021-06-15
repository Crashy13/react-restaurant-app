import { Component } from 'react';
import './App.css';
import MenuList from './MenuList'
import Order from './Order';

const buttons = [
  { name: "All", value: "All"},
  { name: "Pizza", value: "Pizza" },
  { name: "Salad", value: "Salad" },
  { name: "Sides", value: "Sides" },
  { name: "Drinks", value: "Drinks"}
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      order: [],
      filterItems: [],
    };

    this.addItemToOrder = this.addItemToOrder.bind(this);
    this.removeItemFromOrder = this.removeItemFromOrder.bind(this);
  }

  componentDidMount() {
    const items = [
        {
          name: "Pepperoni",
          description: "A round crust with sauce, cheese, and pepperonis",
          price: 13,
          category: "Pizza",
        },
        {
          name: "Vegan Delight",
          description: "A cornmeal, carrot and chia crust with sauce, vegan cheese, onions, peppers, mushrooms and broccoli",
          price: 13,
          category: "Pizza",
        },
        {
          name: "Cheese",
          description: "A simple yet delicious pie with a three cheese blend",
          price: 11,
          category: "Pizza",
        },

        {
          name: "Caesar",
          description: "Crisp romaine lettuce mixed with crutons and parmesan cheese tossed in caesar dressing",
          price: 10,
          category: "Salad",
        },
        {
          name: "Garden",
          description: "Spring leaf mix with tomato, cheese, crutons, and red onion",
          price: 8,
          category: "Salad",
        },
        {
          name: "Grilled Chicken",
          description: "Chicken on lettuce",
          price: 10,
          category: "Salad",
        },

        {
          name: "Breadsticks",
          description: "Freshly baked breadsticks drizzled in garlic butter",
          price: 6,
          category: "Side",
        },
        {
          name: "Garlic Knots",
          description: "Bite sized bread knots slathered with a garlic butter",
          price: 6,
          category: "Side",
        },
        {
          name: "Fried Ravioli",
          description: "Cheese stuffed ravioli fried to golden perfection",
          price: 8,
          category: "Side",
        },

        {
          name: "Hot Tea",
          description: "Ask the server for daily choices",
          price: 3,
          category: "Drink",
        },
        {
          name: "Soda",
          description: "Coke products only",
          price: 3,
          category: "Drink",
        },
        {
          name: "Sangria",
          description: "A chilled fruity red wine",
          price: 5,
          category: "Drink",
        }
      ];
    this.setState({ items });
  }

  addItemToOrder(item){
    const order = [...this.state.order];
    order.push(item);
    this.setState({order});
  }

  removeItemFromOrder(itemName) {
    const order = [...this.state.order];
    const index = order.findIndex(item => item.name === itemName);
    order.splice(index, 1);
    this.setState({order});
  }

  handleClick = name => {
    let filterItems = [];
    if (name === "All") {
      filterItems = this.state.items;
    } else {
      filterItems = this.state.items.filter(
        item => item.category === name
      );
    }

    this.setState({ filterItems });
  };

  render() {

    return(
      <>
        {buttons.map(({ name, value }) => (
          <button key={name} value={value} onClick={this.handleClick.bind(this, name)}>
          {name}
        </button>
        ))}
        <h1>Vic's Pizza</h1>
        <MenuList items={this.state.items} addItemToOrder={this.addItemToOrder}/>
        <Order order={this.state.order} removeItemFromOrder={this.removeItemFromOrder} className="order"/>
      </>
    )
  }
}


export default App;
