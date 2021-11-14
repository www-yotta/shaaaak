import { FC, memo } from "react";
import { Spacer } from "components/atoms/Spacer";
import { Main } from "components/templates/Main";
import useSWR from "swr";
import { fetcher } from "utils/fetcher";
import { Article, PartsProps } from "components/molecules/Article";

const PageBody: FC = () => {
  const { data } = useSWR<PartsProps[]>("/parts", fetcher);

  if (!data) return <></>;

  return (
    <>
      <Spacer size={12} />
      <Article data={data} />
      <Spacer size={12} />
    </>
  );
};

const Top = () => {
  return <Main Body={PageBody} />;
};

export default memo(Top);
