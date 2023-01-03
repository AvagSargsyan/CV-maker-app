import Field from './Field';
import '../styles/MainInfoEdit.scss';

export default function MainInfoEdit({ mainInfoState, updateFieldValue }) {
  return (
    <div className="main-info-edit">
      <Field
        fieldName="firstName"
        fieldValue={mainInfoState.firstName}
        updateFieldValue={updateFieldValue}
      />
      <Field
        fieldName="lastName"
        fieldValue={mainInfoState.lastName}
        updateFieldValue={updateFieldValue}
      />
      <Field
        fieldName="email"
        fieldValue={mainInfoState.email}
        updateFieldValue={updateFieldValue}
      />
      <Field
        fieldName="phoneNumber"
        fieldValue={mainInfoState.phoneNumber}
        updateFieldValue={updateFieldValue}
      />
    </div>
  );
}
