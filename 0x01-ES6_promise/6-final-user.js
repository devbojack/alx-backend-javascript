import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = [];
  try {
    const user = await signUpUser(firstName, lastName);
    results.push({
      status: 'Successful',
      value: user,
    });
    await uploadPhoto(fileName);
  } catch (error) {
    results.push({
      status: 'Unsuccessful',
      value: `Error: ${fileName} cannot be proccessed`,
    });
  }
  return results;
}
