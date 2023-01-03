export default function MainInfo({ mainInfoState }) {
  return (
    <div>
      <div>{mainInfoState.firstName}</div>
      <div>{mainInfoState.lastName}</div>
      <div>{mainInfoState.email}</div>
      <div>{mainInfoState.phoneNumber}</div>
    </div>
  );
}
