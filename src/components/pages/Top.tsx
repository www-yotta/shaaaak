import React, { memo } from "react";
import { Button } from "components/atoms/Button";

const Top = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Button>test</Button>
    </div>
  );
};

export default memo(Top);
