export default function handleError(context, error) {
  // wrap context in brackets to make the context easier to find in logs
  console.error(`[${context}]`, error.message, error.stack);
  throw error;
}