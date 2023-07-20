import React, { useState } from "react";
// import { useRef } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

// console.log(maxIdPosts())
const PostForm = ({ maxIdPosts, create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    setPost({ title: "", body: "" });
    const newPost = {
      ...post,
      id: maxIdPosts.id + 1,
    };
    create(newPost);
    // console.log(bodyInputRef.current.value);
  };

  // const bodyInputRef = useRef();

  return (
    <form>
      {/* Управляемый компонент */}
      <h3>Форма для создания поста</h3>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </div>

      {/* Неуправляемый/неконтролируемый компонент */}
      {/* <MyInput ref={bodyInputRef} type="text" placeholder="bodyInputRef" /> */}
    </form>
  );
};

export default PostForm;
