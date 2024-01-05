export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const results = mathFunction();
    queue.push(results);
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
