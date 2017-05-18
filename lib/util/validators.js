export const required = x => (x == null ? 'This field is required' : undefined)

export const email = x =>
  x && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(x)
    ? 'Invalid Email Address'
    : undefined
