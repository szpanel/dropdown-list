import React from "react";
import Item from "./Item";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 2,
      items: [],
      itemsCopy: [],
      word: "",
      sort: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkSort = this.checkSort.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((response) =>
        response.filter((item) => item.userId === this.state.userId)
      )
      .then((response) =>
        this.setState({ items: response, itemsCopy: response })
      );
  }

  handleChange(e) {
    const value = e.target.value;
    if (value.length > 2) {
      this.setState((state) => ({
        itemsCopy: this.checkSort(
          [...state.items].filter((item) => item.title.includes(value)),
          this.state.sort
        ),
        word: value,
      }));
    } else {
      this.setState((state) => ({ itemsCopy: state.items, word: value }));
    }
  }

  checkSort(arr, sort) {
    if (sort) {
      switch (sort.toLowerCase()) {
        case "alphaa":
          return arr.sort(this.compareByTitle);
        case "alphad":
          return arr.sort(this.compareByTitle).reverse();
        case "done":
          return arr.sort(this.compareByIsDone);
        case "todo":
          return arr.sort(this.compareByIsDone).reverse();
        default:
          return arr;
      }
    }
    return arr;
  }

  compareByIsDone(a, b) {
    return b.completed ? 1 : -1 || 0;
  }

  compareByTitle(a, b) {
    const aTitle = a.title.substring(0, 3);
    const bTitle = b.title.substring(0, 3);
    if (aTitle < bTitle) {
      return -1;
    }
    if (aTitle > bTitle) {
      return 1;
    }
    return 0;
  }

  handleSort(e) {
    const target = e.target;
    this.setState({ sort: target.options[target.selectedIndex].value });
    this.setState((state) => ({
      itemsCopy: this.checkSort(
        state.itemsCopy,
        target.options[target.selectedIndex].value
      ),
    }));
  }

  render() {
    const items = this.state.itemsCopy;
    let itemsAsComponents = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      itemsAsComponents.push(
        <Item item={item} word={this.state.word} key={item.id} />
      );
    }
    return (
      <div className="container">
        <div className="form-group mt-2">
          <input
            placeholder="Find TODO by title"
            className="form-control col-sm-4"
            id="search"
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <select
            defaultValue="sort"
            className="form-control col-sm-4"
            id="sort"
            onChange={this.handleSort}
          >
            <option value="sort" disabled>
              Sort type
            </option>
            <option value="alphaA">Alphabetically - ASC</option>
            <option value="alphaD">Alphabetically - DESC</option>
            <option value="done">Status - Done</option>
            <option value="todo">Status - Todo</option>
          </select>
        </div>
        <p className="h5 mt-3">TODO list of user: {this.state.userId}</p>
        <div>{itemsAsComponents}</div>
      </div>
    );
  }
}

export default Todos;
