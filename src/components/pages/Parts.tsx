import { FC, memo } from "react";
import { Main } from "components/templates/Main";
import { UserHeaderCard } from "components/molecules/UserHeaderCard";
import { PartsDetailCard } from "components/organisms/PartsDetailCard";
import { useParams } from "react-router-dom";
import { fetcher } from "utils/fetcher";
import useSWR from "swr";
import { PartsProps } from "components/molecules/Article";
import { RecommendCarousel } from "components/molecules/RecommendCarousel";
import { Spacer } from "components/atoms/Spacer";
import theme from "theme";

const PageBody: FC = () => {
  // TODO: ユーザー情報を取得
  const userId = 2;
  const { id } = useParams<{ id: string }>();
  const { data: partsData } = useSWR<PartsProps>(`/parts/${id}`, fetcher);
  const { data: recommendData } = useSWR<any>(`/recommend/${userId}`, fetcher);

  // TODO: リファクタする
  if (!partsData) return <></>;
  if (!recommendData) return <></>;

  return (
    <div>
      <Spacer size={theme.spacing(3)} />
      <UserHeaderCard name="hoge" count={2} />
      <Spacer size={theme.spacing(3)} />
      <PartsDetailCard data={partsData} />
      <Spacer size={theme.spacing(3)} />
      <RecommendCarousel data={recommendData.parts} />
    </div>
  );
};

const PartsDetail = () => {
  return <Main Body={PageBody} />;
};

export default memo(PartsDetail);
