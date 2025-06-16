test('Get to /api/v1/status should return 200', async () => {
  const response = await fetch('http://localhost:3000/api/v1/status');
  expect(response.status).toBe(200);
  expect(response.headers.get('Content-Type')).toBe('application/json; charset=utf-8');
  const data = await response.json();
  expect(data).toEqual({
    status: 'ok',
    message: 'API is running smoothly',
  });
});