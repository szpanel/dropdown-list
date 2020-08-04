import React from "react";
import "../Item.css";
import IsDone from "./IsDone";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      word: props.word,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.word !== state.word) {
      return {
        word: props.word,
      };
    }
    return null;
  }

  render() {
    const word = this.state.word;
    let item = this.state.item;
    let title = item.title;
    const from = item.title.indexOf(word);
    if (from > -1) {
      const to = from + word.length;
      const bolded = item.title.substring(from, to);
      title = item.title.replace(bolded, bolded.bold());
    }
    return (
      <div className="Item">
        {/* <img src="https://picsum.photos/40" alt="Random"></img> */}
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
        <IsDone isDone={item.completed} />
      </div>
    );
  }
}

export default Item;
