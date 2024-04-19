import Account from "./Account";
import { render } from "@testing-library/react";

test("matches snapshot", () => {
  const utils = render(<Account name="chaemin" mbti="estj" />);
  expect(utils.container).toMatchSnapshot();
});
