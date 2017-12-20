export default function createUser() {
  server.create('profile', { name: 'Justin Drew', createdAt: new Date() });
  server.create('user', { username: 'justin@test.com', password: 'test', profileId: 1 });
}
