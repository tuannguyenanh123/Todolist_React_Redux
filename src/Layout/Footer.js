import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";

function Footer(props) {
  const dispatch = useDispatch();
  // const { pagination, onPageChange } = props;
  // limit mỗi trang có bao nhiêu item đó
  // const { page, limit, totalPage } = pagination;
  // const lastPage = Math.ceil(totalPage / limit);
  // function handlePageChange(newPage) {
  //   if (onPageChange) {
  //     onPageChange(newPage);
  //   }
  // }
  return (
    <div className="footer">
      <div
        className="footer__previous"
        // disabled={page <= 1}
        // onClick={handlePageChange(page - 1)}
      >
        <ArrowBackIosIcon />
      </div>
      <div className="footer__number">
        {!props.isActive === true ? (
          <button style={props.style}>1</button>
        ) : (
          <button>1</button>
        )}
        <button>2</button>
        <button>3</button>
      </div>
      <div
        className="footer__next"
        // disabled={page >= lastPage}
        // onClick={handlePageChange(page + 1)}
      >
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}
export default Footer;
