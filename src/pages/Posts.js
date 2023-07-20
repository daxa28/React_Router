import React, { useEffect, useRef, useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import "../styles/App.css";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
// import TextInputWithFocusButton from "./components/TextInputWithFocusButton";
// import MySelect from "./components/UI/select/MySelect";
// import MyInput from "./components/UI/input/MyInput";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
// import { useObserver } from "../hooks/useObserver";
// import MySelect from "../components/UI/select/MySelect";

function Posts() {
  // const [value, setValue] = useState("Текст из <input/>");
  const [posts, setPosts] = useState([]);
  const [postsAll, setPostsAll] = useState([]);
  const [posts2, setPosts2] = useState([]);
  const [maxIdPosts, setMaxIdPosts] = useState({ id: 0 });
  const [filter, setFilter] = useState({ sort: "id", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();
  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getLimitAll(limit, page);
      setPosts2([...posts, ...response.data]);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );
  const [fetchPosts1] = useFetching(async () => {
    const response = await PostService.getAll();
    setPostsAll(response.data);
  });

  const changePage = (page) => {
    setPage(page);
  };

  const clickButtonCreatePost = () => {
    setModal(true);
    setMaxIdPosts(
      postsAll.reduce((acc, curr) => (acc.id > curr.id ? acc : curr))
    );
  };

  // useObserver(lastElement, page < totalPages, isPostsLoading, () => {
  //   setPage(page + 1);
  // });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  useEffect(() => {
    fetchPosts1();
  }, []);

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const numOfPostsDisplay = (value) => {
    setLimit(value);
    setPage(1);
  };

  return (
    <div className="App">
      {/* <p>Компоненты</p>
      <Counter />
      <ClassCounter />
      <hr /> */}
      {/* <p>Работа с input</p>
      <div style={{ border: "2px solid teal", padding: "10px" }}>
        <h1 style={{ fontSize: "20px" }}>{value}</h1>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <hr/> */}
      <h2>Лента постов</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MyButton onClick={clickButtonCreatePost}>Создать пост</MyButton>
      </div>
      <PostFilter
        limit={limit}
        numOfPostsDisplay={numOfPostsDisplay}
        filter={filter}
        setFilter={setFilter}
      />

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm maxIdPosts={maxIdPosts} create={createPost} />
      </MyModal>

      {postError && <h3>Произошла ошибка! {postError}</h3>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
        />
      )}
      <div ref={lastElement} style={{ height: "5px" }}></div>
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
      {/* <TextInputWithFocusButton /> */}
    </div>
  );
}

export default Posts;
