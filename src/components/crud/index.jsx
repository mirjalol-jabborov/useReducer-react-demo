import React, { useId, useRef, useState } from "react";
import useProducts from "../../hooks/useProducts";
import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from "../../context/shop/types";

const Crud = () => {
  const [state, dispatch] = useProducts();
  
  const inputRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState({id: -1});

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const [name, imageURL] = evt.target.elements;
    
    if(selectedItem?.id == -1){
        const obj = {
            id: state.products.length,  
            userName: name.value.trim(),
            userImg: imageURL.value.trim(),
          };
      
          dispatch({ type: ADD_PRODUCT, payload: obj });
    } else {
        const obj = {
            id: selectedItem.id,
            userName: name.value.trim(),
            userImg: imageURL.value.trim(),
          };
      
          dispatch({ type: UPDATE_PRODUCT, payload: obj });
          setSelectedItem({id: -1});
        }
    evt.target.reset()
  };

  const handleDelete = (id) => {
    // console.log(id);
    dispatch({type: REMOVE_PRODUCT, payload: {id: id}});
  }
  
  const handleEdit = (item) => {
    console.log(item.id);
    inputRef.current.focus();
    setSelectedItem(item);
  }

  return (
    <div>
      <div className="container">
            <form
              className="d-flex flex-column gap-2"
              onSubmit={(evt) => handleSubmit(evt)}
            >
              <input
                className="form-control"
                type="text"
                placeholder="Enter ur name"
                ref={inputRef}
                defaultValue={selectedItem?.userName}
              />
                <select className="form-select" 
                value={selectedItem?.userImg}
                >
                    <option value="https://m.ridus.ru/images/2021/4/30/1264756/in_article_cca99b4e9a.jpg">Not Happy cute KITTY</option>
                    <option value="https://icdn.lenta.ru/images/2020/09/30/13/20200930130228617/pwa_vertical_1280_8d172d6dae702e03017c045d5142ee5e.jpg">Crying cat</option>
                    <option value="https://kartinkof.club/uploads/posts/2022-03/1648329591_1-kartinkof-club-p-kot-s-ulibkoi-mem-1.jpg">Beluga</option>
                    <option value="https://vsememy.ru/wp-content/cache/thumb/c5dc959c3_320x200.jpg">white big mouth</option>
                </select>
              <button className="btn btn-primary" type="submit">
                Enter
              </button>
            </form>

          <div className="d-flex gap-4 mt-4 flex-wrap">
            {state?.products.length > 0 &&
              state.products.map((item, index) => {
                return (
                    <div style={{width: "200px"}} className="card" key={index}>
                        <img height={"150px"} src={item.userImg} alt={item.userName} />
                        <div className="card-body">
                            <p>{item.userName}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <button className="btn btn-danger p-1" onClick={() => handleDelete(item.id)}>Delete</button>
                            <button className="btn btn-primary p-1" onClick={() => {handleEdit(item)}}>Edit</button>
                        </div>
                    </div>
                )
              })}
          </div>
      </div>
    </div>
  );
};

export default Crud;
