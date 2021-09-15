import { FC, memo } from "react";
import { Spacer } from "components/atoms/Spacer";
import { Main } from "components/templates/Main";
import useSWR from "swr";
import { fetcher } from "utils/fetcher";
import { Article } from "components/molecules/Article";

type List = {
  title: string;
  text: string;
  buttonLabel: string;
  thumbnailPath: string;
};

const PageBody: FC = () => {
  const { data } = useSWR<List[]>("/list", fetcher);

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
