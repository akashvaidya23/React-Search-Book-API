import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Display from "../Display/Display";
import styles from "./Book.module.css";

const Book = () => {
  const [input, setInput] = useState("");
  const inputChangeHandler = (e) => {
    var value = e.target.value;
    setInput(value);
  };

  const [btnText, setBtnText] = useState([]);
  const btnClickHandler = () => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
      .then((response) => {
        console.log(response.data.items);
        setBtnText(response.data.items);
      });
  };

  return (
    <>
      <div className={styles.main}>
        <div>
          <Input inputChangeHandler={inputChangeHandler} value={input} />
        </div>
        <div>
          <Button btnClickHandler={btnClickHandler} />
        </div>
        <div>
          <Display
            className={styles.main}
            value={btnText.map((element) => (
              <ul>
                <li key={element.id}>{element.volumeInfo.title}</li>
              </ul>
            ))}
          />
        </div>
      </div>
    </>
  );
};

export default Book;
