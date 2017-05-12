import mapValues from 'lodash/mapValues';

export default (defaults, compute) => (overrides) => {
  const base = mapValues(defaults, (value, key) => overrides[key] || value);

  return compute ? { ...compute(base), ...base } : base;
};
