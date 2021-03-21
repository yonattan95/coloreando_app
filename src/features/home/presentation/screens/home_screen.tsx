import { Link, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import Footer from "../../../../commons/components/layout/footer";
import PublicLayout from "../../../../commons/components/layout/public_layout";
import CardContainer from "../components/card_container";
import CardItem from "../components/card_item";
import { fetchColorList } from "../redux/actions";
import {
  colorListSelector,
  isDownLoadingColorsSelector,
  pageSelector,
  totalPagesSelector,
} from "../redux/reducers";

export default function Home() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => totalPagesSelector(state));
  const colorList = useSelector((state) => colorListSelector(state));
  const currentPage = useSelector((state) => pageSelector(state));
  const isDownloadingColors = useSelector((state) =>
    isDownLoadingColorsSelector(state)
  );

  const getColorList = useCallback(
    (page?: number) => {
      dispatch(fetchColorList(page));
    },
    [dispatch]
  );

  const handleChangePage = (e: object, page: number) => {
    getColorList(page);
  };

  useEffect(() => {
    getColorList();
  }, [getColorList]);

  return (
    <PublicLayout>
      <>
        <CardContainer
          items={
            !isDownloadingColors
              ? colorList.map((colorValue) => (
                  <Link
                    component={LinkRouter}
                    to={`/detail/${colorValue.id}`}
                    key={colorValue.id}
                    className={classes.link}
                  >
                    <CardItem data={colorValue} />
                  </Link>
                ))
              : [1, 2, 3, 4, 5, 6].map((value, index) => (
                  <div key={index} className={classes.link}>
                    <Skeleton variant="rect" className={classes.skeleton} />
                  </div>
                ))
          }
        />
        <Footer
          page={currentPage}
          onChange={handleChangePage}
          totalPages={totalPages}
        />
      </>
    </PublicLayout>
  );
}

const useStyle = makeStyles(() => ({
  link: {
    flex: "0 1 30%",
    display: "flex",
    margin: "0.5rem",
  },
  skeleton: {
    minWidth: "300px",
    display: "flex",
    flex: 1,
    height: "100%",
  },
}));
