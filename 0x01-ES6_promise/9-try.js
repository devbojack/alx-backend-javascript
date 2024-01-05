export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const results = mathFunction();
    queue.push(results);
  } catch (error) {
    queue.push(error);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
