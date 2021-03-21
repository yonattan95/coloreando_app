import React, { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import GoBack from "../../../../commons/components/go_back";
import PublicLayout from "../../../../commons/components/layout/public_layout";
import CardDetail from "../components/card_detail";
import { currentColorSelector } from "../redux/reducers";

function DetailScreen() {
  const { colorId } = useParams<{ colorId?: string }>();
  const history = useHistory();
  const colorData = useSelector(
    (state) =>
      currentColorSelector(state, colorId ? Number.parseInt(colorId) : 0),
    shallowEqual
  );
  useEffect(() => {
    if (!colorId || !colorData || colorData.id !== Number.parseInt(colorId)) {
      history.replace("/");
    }
  }, [colorData, history, colorId]);
  return (
    <PublicLayout>
      <>
        <GoBack />
        <CardDetail data={{ ...colorData, name: "COPIADO" }} />
      </>
    </PublicLayout>
  );
}

export default DetailScreen;
