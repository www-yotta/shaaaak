import { FC, memo } from "react";
import { Main } from "components/templates/Main";
import { UserHeaderCard } from "components/molecules/UserHeaderCard";
import { PartsDetailCard } from "components/organisms/PartsDetailCard";

const PageBody: FC = () => {
  return (
    <div>
      <UserHeaderCard name="hoge" count={2} />
      {/* TODO: srcを可変にする */}
      <PartsDetailCard src="https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark" />
    </div>
  );
};

const PartsDetail = () => {
  return <Main Body={PageBody} />;
};

export default memo(PartsDetail);
