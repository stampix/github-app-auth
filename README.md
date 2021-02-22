# Authenticate inside actions with a Github App

```yml
      - uses: stampix/github-app-auth@v1
        with:
          appId: ${{ secrets.appId }}
          installationId: ${{ secrets.installationId }}
          privateKey: ${{ secrets.privateKey }}
```

## Testing locally with `act`

`act` has some issues loading the files, [see for more info](https://github.com/nektos/act/issues/228). Workaround I used is to temporarily add a path to checkout inside the workflow file:

```yml
      - uses: actions/checkout@v2
        with:
          path: "github-app-auth"
```          

## Bundling

`npx @vercel/ncc build index.js --license licenses.txt`