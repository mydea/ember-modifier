// TODO: upstream this to DefinitelyTyped [once the item is documented][docs]
//
// [docs]: https://github.com/emberjs/ember.js/issues/18967
declare module '@ember/modifier' {
  export function setModifierManager(
    factory: (owner: unknown) => unknown,
    obj: object
  ): void;

  export function capabilities(version: string): unknown;
}
