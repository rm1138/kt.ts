declare global {
  interface Array<T> extends KtListSizeOp {}
}

export interface KtListSizeOp {
  size: number
}

export default <T extends any>(proto: Array<T>) => {
  Object.defineProperty(proto, 'size', {
    get: function () {
      return this.length
    },
  })
}
