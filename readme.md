## reproduce

1. `pnpm i`
2. `pnpm dev`

```
▶ pnpm dev

> @ dev ../github/ts-json-debug-example
> ts-node index.ts

Error: Error on TSON.assertEquals(): no transform has been configured. Configure the "tsconfig.json" file following the [README.md#setup](https://github.com/samchon/typescript-json#setup)
    at halt (../github/ts-json-debug-example/node_modules/.pnpm/typescript-json@3.3.12/node_modules/typescript-json/src/module.ts:666:11)
    at Object.assertEquals (../github/ts-json-debug-example/node_modules/.pnpm/typescript-json@3.3.12/node_modules/typescript-json/src/module.ts:319:5)
    at Object.<anonymous> (../github/ts-json-debug-example/index.ts:8:6)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Module.m._compile (../github/ts-json-debug-example/node_modules/.pnpm/ts-node@10.9.1_isic37iwoa3fuyvmvzejaq2bga/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
    at Object.require.extensions.<computed> [as .ts] (../github/ts-json-debug-example/node_modules/.pnpm/ts-node@10.9.1_isic37iwoa3fuyvmvzejaq2bga/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
 ELIFECYCLE  Command failed with exit code 1.```
