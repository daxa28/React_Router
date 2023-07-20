import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({ limit, numOfPostsDisplay, filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder={"Поиск..."}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p className="p__sort">
          Кол-во постов
          <MySelect
            value={limit}
            onChange={(value) => numOfPostsDisplay(value)}
            defaultValue={limit}
            options={[
              { value: 5, name: "5" },
              { value: 10, name: "10" },
              { value: 25, name: "25" },
              { value: -1, name: "Показать все" },
            ]}
          />
        </p>

        <p className="p__sort">
          Сортировка по
          <MySelect
            value={filter.sort}
            onChange={(selectedSort) =>
              setFilter({ ...filter, sort: selectedSort })
            }
            defaultValue={filter.sort}
            options={[
              { value: "id", name: "Индексу" },
              { value: "title", name: "Названию" },
              { value: "body", name: "Описанию" },
            ]}
          />
        </p>
      </div>
    </div>
  );
};

export default PostFilter;
