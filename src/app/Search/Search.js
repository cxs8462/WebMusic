import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Search.css";
import { getSeacherRes } from "../../api/req";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators";

function Search(props) {
  const [show, setShow] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [timer, setTimer] = useState();
  const { addSong } = props;
  const goback = () => {
    setShow(false);
  };
  //防抖节流函数
  useEffect(() => {
    if (keywords) {
      clearTimeout(timer);
      setTimer(
        setTimeout(() => {
          getSeacherRes(keywords).then((res) => {
            if (!res.result.songs) {
              setSearchData([]);
              return;
            }
            const list = [];
            res.result.songs.forEach((item) => {
              console.log(item);
              const obj = {};
              obj.id = item.id;
              obj.singer = item.artists[0].name;
              obj.name = item.name;
              obj.ar = [{ name: item.artists[0].name }];
              obj.al = { picUrl: item.artists[0].img1v1Url };
              list.push(obj);
            });
            setSearchData(list);
          });
        }, 700)
      );
    } else {
      setSearchData([]);
    }
  }, [keywords]);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExited={props.history.goBack}
    >
      <div className="Search">
        <div className="goback">
          <span onClick={goback}>
            <i className="iconfont">&#xe653;</i>
          </span>
        </div>
        <div className="search-input">
          <div className="input">
            <span className="tab-seach">
              <i className="iconfont">&#xe63c;</i>
            </span>
            <input
              value={keywords}
              onChange={(e) => {
                setKeywords(e.target.value);
              }}
              type="text"
            />
          </div>
        </div>
        <div className="list">
          {searchData.map((item) => {
            item.singer = item.singer.replace(
              keywords,
              `<span class='mate'>${keywords}</span>`
            );
            item.title = item.name.replace(
              keywords,
              `<span class='mate'>${keywords}</span>`
            );
            return (
              <p
                onClick={() => {
                  addSong(item);
                  alert("歌曲添加成功");
                }}
                key={item.id}
              >
                <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                <span dangerouslySetInnerHTML={{ __html: item.singer }}></span>
              </p>
            );
          })}
        </div>
      </div>
    </CSSTransition>
  );
}
const getDate = (dispatch) => {
  return {
    addSong(item) {
      dispatch(actionCreators.getSongs(item));
    },
  };
};

export default connect(null, getDate)(React.memo(Search));
