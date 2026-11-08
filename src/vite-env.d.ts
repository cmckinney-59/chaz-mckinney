/// <reference types="vite/client" />

declare module "*.css" {}

declare module "*.zip" {
  const src: string;
  export default src;
}
