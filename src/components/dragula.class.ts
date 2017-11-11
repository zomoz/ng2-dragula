declare const require: any;

const dragulaExpt = require('@zomoz/dragula');
export const dragula: (containers?: any, options?: any) => any = (dragulaExpt as any).default || dragulaExpt;
