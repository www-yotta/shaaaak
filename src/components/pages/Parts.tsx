import { FC, memo } from "react";
import { Main } from "components/templates/Main";
import { UserHeaderCard } from "components/molecules/UserHeaderCard";
import { PartsDetailCard } from "components/organisms/PartsDetailCard";
import { useParams } from "react-router-dom";
import { fetcher } from "utils/fetcher";
import useSWR from "swr";
import { PartsProps } from "components/molecules/Article";
import { Spacer } from "components/atoms/Spacer";
import theme from "theme";

const PageBody: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useSWR<PartsProps>(`/parts/${id}`, fetcher);

  if (!data) return <></>;

  return (
    <div>
      <Spacer size={theme.spacing(3)} />
      <UserHeaderCard name="hoge" count={2} />
      <Spacer size={theme.spacing(3)} />
      <PartsDetailCard data={data} />
    </div>
  );
};

const PartsDetail = () => {
  return <Main Body={PageBody} />;
};

export default memo(PartsDetail);
