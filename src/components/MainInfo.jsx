import '../styles/MainInfo.scss';

export default function MainInfo({ mainInfoState }) {
  return (
    <div className="main-info">
      <div>{mainInfoState.firstName}</div>
      <div>{mainInfoState.lastName}</div>
      <div>{mainInfoState.email}</div>
      <div>{mainInfoState.phoneNumber}</div>
    </div>
  );
}
