const Account = (props: { name: string; mbti: string }) => {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.mbti}</p>
    </>
  );
};

export default Account;
