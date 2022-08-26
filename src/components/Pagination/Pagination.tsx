import ReactPaginate from "react-paginate";

import styles from "./styles.module.css";

interface Props {
  breakLabel?: string;
  nextLabel?: string;
  previousLabel?: string;
  onPageChange: (event: any) => void;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  pageCount?: number;
  containerClassName?: string;
  breakClassName?: string;
  pageClassName?: string;
  previousLinkClassName?: string;
  nextLinkClassName?: string;
}

const Pagination: React.FC<Props> = (props) => {
  const { onPageChange, containerClassName, breakClassName, pageClassName } =
    props;

  const exposeObject = (event: any) => {
    onPageChange(event);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={exposeObject}
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      pageCount={500}
      containerClassName={containerClassName || styles.container}
      breakClassName={breakClassName || styles.item}
      pageClassName={pageClassName || styles.item}
      renderOnZeroPageCount={() => {}}
    />
  );
};

export default Pagination;
