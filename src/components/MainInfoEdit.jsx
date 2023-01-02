import Field from './Field';

export default function MainInfoEdit({ mainInfoState, updateFieldValue }) {
  return (
    <div>
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
