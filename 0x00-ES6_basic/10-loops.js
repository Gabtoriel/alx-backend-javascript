export default function appendToEachArrayValue(array, appendString) {
  const bucket = [];
  for (const val of array) {
    bucket.push(appendString + val);
  }

  return bucket;
}
