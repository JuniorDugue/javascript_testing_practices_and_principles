let api, server;

beforeAll(async () => {
  server = await startServer();
  const { port } = server.address();
  api = axios.create({
    baseURL: `http://localhost:${port}/api`,
  });
});

afterAll(() => server.close());

beforeEach(() => resetDb());

test("can register a user", async () => {
  const registerData = { username: "bob", password: "wiley" };
  const testUser = await api.post("auth/register", registerData).then((response) => response.data.user);
  expect(testUser.username).toBe(registerData.username);

  const readUserUnauthenticated = await api.get(`users/${testUser.id}`).then((response) => response.data.user);
  expect(readUserUnauthenticated).toEqual(testUser);
});
