interface Person {
  name: {
    first: string;
    last: string;
  };
  id: {
    value: string;
  };
  wage?:number;
}

export { Person };