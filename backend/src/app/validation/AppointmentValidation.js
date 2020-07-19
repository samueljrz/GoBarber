import * as Yup from 'yup';

export default async (Data) => {
  const schema = Yup.object().shape({
    provider_id: Yup.number().required(),
    date: Yup.date().required(),
  });

  if (await schema.isValid(Data)) {
    return true;
  }
  return false;
};
